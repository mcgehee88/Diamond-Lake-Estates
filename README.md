# Diamond Lake Estates Civic League Website

**Live Site:** https://diamondlakeestates.com

---

## Quick Start for AI Chats

When starting a new chat, paste this:

```
I'm working on the Diamond Lake Estates Civic League website.

GitHub token secret: github_token
Repo: https://github.com/freetrials/diamond-lake-estates-website

Here's what needs to change:
[YOUR REQUEST]
```

That's it. I'll handle the rest.

---

## Credentials

- **GitHub token:** `github_token` (Settings > Developers)
- **Netlify token:** `NETLIFY_PERSONAL_ACCESS_TOKEN` (Settings > Developers)
- **Netlify Site ID:** `08354646-cdc1-4a5a-b890-ff546200a777`
- **Google Forms:** Directory form embedded on `/directory` (outbound CTA)

---

## File Structure

```
Diamond Lake Estates Website/
├── index.html           # Home
├── about.html           # About
├── dues.html            # Pay Dues + Member Benefits
├── newsletters.html     # Newsletter Archive
├── events.html          # Events & Calendar
├── resources.html       # Property Rules (Formal - Verbatim)
├── directory.html       # Community Directory (Google Form CTA)
├── styles.css           # All styling + responsive design
├── script.js            # Mobile menu toggle
├── og-image.png         # Social media preview (1200x630)
├── hero-bg.png          # Hero section background
├── favicon.png          # Site icon
├── data/
│   └── newsletters.json # Newsletter archive data
└── newsletters/
    └── 2026-01.pdf      # PDF files
```

---

## Design System

**Colors:**
- Primary: `#1e5a7d` (dark teal)
- Accent: `#e87722` (orange)
- Background: `#fafbfc`
- Text: `#1a1a1a`

**Fonts:**
- Display: Fraunces (serif)
- Body: Outfit (sans-serif)

**Responsive:** Mobile breakpoint at 768px
**Audience:** Older demographic (large text, clear CTAs)

---

## How Changes Work

**Workflow:**
1. AI clones GitHub repo
2. Edits HTML/CSS files
3. Tests in browser (desktop + mobile)
4. Commits and pushes to GitHub
5. Deploys to Netlify with `netlify deploy --prod`
6. Verifies live at diamondlakeestates.com

**For future chats:**
- Follow the prompt above
- New AI will pick up exactly where things left off
- No confusion, no rework

---

## Key Notes

✅ **Property Rules** — `/resources` uses VERBATIM text from formal document (26 rules)

✅ **Member Benefits** — `/dues` lists all 7 membership benefits clearly

✅ **Mobile-First** — All pages tested on 375px+ viewports

✅ **No Contact Form** — Points to `contact@diamondlakeestates.com` instead

✅ **Directory** — `/directory` has outbound CTA button to Google Form (no embed)

❌ Don't use em-dashes or AI-sounding language

❌ Don't break nav structure across pages

❌ Don't minimize text for older users

---

## Common Requests

**Add new page:**
Create HTML with consistent nav + footer, update all nav menus, commit, push, deploy.

**Update property rules:**
Edit `/resources` verbatim from official document.

**Change colors:**
Edit `:root` variables in `styles.css`.

**Add newsletter:**
Update `data/newsletters.json` (loads dynamically).

---

## Questions?

Check this file or email: contact@diamondlakeestates.com
