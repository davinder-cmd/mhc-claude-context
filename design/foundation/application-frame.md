# Application Frame

**Confluence:** https://mobilehealthc.atlassian.net/wiki/spaces/MDS/pages/1344045104
**Status:** ✅ Documented

---

## Purpose

The structural skeleton of the app. Defines the three persistent regions every screen is built within. Consistent across all employer implementations unless SDK/partner rules override.

---

## Three Regions

Every platform uses the same three regions:

1. **App Bar** — employer branding, top-level actions (profile, settings, messages)
2. **Navigation** — platform-specific (see below)
3. **Body** — all content lives here

---

## Navigation by Platform

| Platform | Navigation type | Notes |
|----------|----------------|-------|
| Mobile iOS / Android | Bottom Navigation bar | 3–5 items, always visible |
| Desktop / Tablet ≥600dp | Navigation Panel | 256dp expanded, 72dp collapsed |
| Mobile browser <600dp | Modal navigation drawer | Opens on trigger, overlays content |

---

## Body Region

| Context | Max content width |
|---------|-----------------|
| Desktop default | 940dp |
| Common content widths | 720dp, 640dp, 480dp |
| SDK / white-label | Partner requirements may override |

**Margins:**
- Base (mobile): 16dp
- ≥600dp breakpoint: 32dp
- ≥840dp breakpoint: 200dp max margin each side

---

## Rules

- Never change navigation structure without executive sign-off
- Modal pages do not show Bottom Navigation
- SDK implementations may have partner-specific frame constraints — check before designing

## Escalate if

Navigation structure changes are needed, or a new frame region is proposed.
