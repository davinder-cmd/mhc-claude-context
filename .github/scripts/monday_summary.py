#!/usr/bin/env python3
"""
Monday Morning Summary Generator

Queries Notion databases and uses Claude to generate a weekly summary,
then posts it to the Weekly Log database.
"""

import os
import json
from datetime import datetime, timedelta
import requests
import anthropic

# Configuration
NOTION_API_KEY = os.environ["NOTION_API_KEY"]
ANTHROPIC_API_KEY = os.environ["ANTHROPIC_API_KEY"]

TASKS_DB_ID = "33c69fed-9031-806e-a939-d7f72c65fe99"
INITIATIVES_DB_ID = "33c69fed-9031-80b5-bc87-eabc0fa1f051"
INBOX_DB_ID = "33c69fed-9031-8025-b595-d41aba0a68d2"
WEEKLY_LOG_DB_ID = "33c69fed-9031-8088-9575-f538b442c55f"

NOTION_VERSION = "2022-06-28"
NOTION_BASE_URL = "https://api.notion.com/v1"


def notion_request(method, endpoint, data=None):
    """Make a request to the Notion API."""
    headers = {
        "Authorization": f"Bearer {NOTION_API_KEY}",
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
    }
    url = f"{NOTION_BASE_URL}{endpoint}"
    response = requests.request(method, url, headers=headers, json=data)
    response.raise_for_status()
    return response.json()


def extract_title(page):
    """Extract the title from a Notion page."""
    props = page.get("properties", {})
    for prop in props.values():
        if prop.get("type") == "title":
            title_arr = prop.get("title", [])
            return "".join(t.get("plain_text", "") for t in title_arr)
    return "Untitled"


def extract_property(page, prop_name, prop_type):
    """Extract a property value from a Notion page."""
    prop = page.get("properties", {}).get(prop_name, {})
    if prop_type == "select":
        select = prop.get("select")
        return select.get("name") if select else None
    elif prop_type == "rich_text":
        texts = prop.get("rich_text", [])
        return "".join(t.get("plain_text", "") for t in texts)
    elif prop_type == "date":
        date = prop.get("date")
        return date.get("start") if date else None
    elif prop_type == "checkbox":
        return prop.get("checkbox", False)
    return None


def query_tasks(since_date):
    """Query tasks updated in the last 7 days."""
    data = {
        "filter": {
            "timestamp": "last_edited_time",
            "last_edited_time": {"on_or_after": since_date},
        },
        "sorts": [{"timestamp": "last_edited_time", "direction": "descending"}],
    }
    result = notion_request("POST", f"/databases/{TASKS_DB_ID}/query", data)

    tasks = []
    for page in result.get("results", []):
        tasks.append({
            "name": extract_title(page),
            "status": extract_property(page, "Status", "select"),
            "type": extract_property(page, "Type", "select"),
            "effort": extract_property(page, "Effort", "select"),
            "due_date": extract_property(page, "Due Date", "date"),
        })
    return tasks


def query_active_initiatives():
    """Query initiatives with Active status."""
    data = {
        "filter": {
            "property": "Status",
            "select": {"equals": "Active"},
        },
    }
    result = notion_request("POST", f"/databases/{INITIATIVES_DB_ID}/query", data)

    initiatives = []
    for page in result.get("results", []):
        initiatives.append({
            "name": extract_title(page),
            "priority": extract_property(page, "Priority", "select"),
            "category": extract_property(page, "Category", "select"),
            "target_date": extract_property(page, "Target date", "date"),
        })
    return initiatives


def query_inbox(since_date):
    """Query inbox items from the last 7 days."""
    data = {
        "filter": {
            "timestamp": "created_time",
            "created_time": {"on_or_after": since_date},
        },
        "sorts": [{"timestamp": "created_time", "direction": "descending"}],
    }
    result = notion_request("POST", f"/databases/{INBOX_DB_ID}/query", data)

    items = []
    for page in result.get("results", []):
        items.append({
            "name": extract_title(page),
            "source": extract_property(page, "Source", "select"),
            "processed": extract_property(page, "Processed", "checkbox"),
            "notes": extract_property(page, "Notes", "rich_text"),
        })
    return items


def generate_summary(tasks, initiatives, inbox_items):
    """Use Claude to generate the weekly summary."""
    prompt = """You are summarizing a week of work for a Product Designer and PM. Based on the following Notion data, write a concise Monday morning summary covering: (1) What shipped or was completed last week, (2) What is currently in progress, (3) What is coming up this week, (4) Any blockers. Keep it under 300 words. Format it clearly.

## Tasks (updated in last 7 days)
{tasks}

## Active Initiatives
{initiatives}

## Inbox Items (last 7 days)
{inbox}
""".format(
        tasks=json.dumps(tasks, indent=2) if tasks else "No tasks updated this week.",
        initiatives=json.dumps(initiatives, indent=2) if initiatives else "No active initiatives.",
        inbox=json.dumps(inbox_items, indent=2) if inbox_items else "No inbox items this week.",
    )

    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)
    message = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}],
    )
    return message.content[0].text


def create_weekly_log_page(summary, week_of_date):
    """Create a new page in the Weekly Log database."""
    # Split summary into paragraphs for Notion blocks
    paragraphs = [p.strip() for p in summary.split("\n\n") if p.strip()]

    children = []
    for para in paragraphs:
        # Handle headers (lines starting with #)
        lines = para.split("\n")
        for line in lines:
            if line.startswith("### "):
                children.append({
                    "object": "block",
                    "type": "heading_3",
                    "heading_3": {
                        "rich_text": [{"type": "text", "text": {"content": line[4:]}}]
                    },
                })
            elif line.startswith("## "):
                children.append({
                    "object": "block",
                    "type": "heading_2",
                    "heading_2": {
                        "rich_text": [{"type": "text", "text": {"content": line[3:]}}]
                    },
                })
            elif line.startswith("# "):
                children.append({
                    "object": "block",
                    "type": "heading_1",
                    "heading_1": {
                        "rich_text": [{"type": "text", "text": {"content": line[2:]}}]
                    },
                })
            elif line.startswith("- ") or line.startswith("* "):
                children.append({
                    "object": "block",
                    "type": "bulleted_list_item",
                    "bulleted_list_item": {
                        "rich_text": [{"type": "text", "text": {"content": line[2:]}}]
                    },
                })
            elif line.strip():
                children.append({
                    "object": "block",
                    "type": "paragraph",
                    "paragraph": {
                        "rich_text": [{"type": "text", "text": {"content": line}}]
                    },
                })

    data = {
        "parent": {"database_id": WEEKLY_LOG_DB_ID},
        "properties": {
            "Name": {
                "title": [{"text": {"content": f"Week of {week_of_date}"}}]
            },
            "Week of": {
                "date": {"start": week_of_date}
            },
            "Status": {
                "select": {"name": "Draft"}
            },
        },
        "children": children,
    }

    result = notion_request("POST", "/pages", data)
    return result.get("url")


def main():
    print("Starting Monday Morning Summary generation...")

    # Calculate date 7 days ago
    seven_days_ago = (datetime.utcnow() - timedelta(days=7)).strftime("%Y-%m-%d")
    today = datetime.utcnow().strftime("%Y-%m-%d")

    print(f"Querying data since {seven_days_ago}...")

    # Query all databases
    tasks = query_tasks(seven_days_ago)
    print(f"Found {len(tasks)} tasks updated in the last 7 days")

    initiatives = query_active_initiatives()
    print(f"Found {len(initiatives)} active initiatives")

    inbox_items = query_inbox(seven_days_ago)
    print(f"Found {len(inbox_items)} inbox items from the last 7 days")

    # Generate summary with Claude
    print("Generating summary with Claude...")
    summary = generate_summary(tasks, initiatives, inbox_items)
    print("Summary generated successfully")

    # Create Weekly Log page
    print("Creating Weekly Log page in Notion...")
    page_url = create_weekly_log_page(summary, today)
    print(f"Weekly Log page created: {page_url}")

    print("\nGenerated Summary:")
    print("-" * 40)
    print(summary)


if __name__ == "__main__":
    main()
