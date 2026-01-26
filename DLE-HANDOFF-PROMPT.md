# Diamond Lake Estates Civic League Website — AI Handoff Prompt

## Project Overview
- **Site:** https://diamondlakeestates.com
- **Purpose:** Nonprofit civic league website (501c7)
- **Audience:** Older demographic (boomers) — keep simple, large text, clear CTAs
- **Founded:** 1961, Virginia Beach neighborhood

---

## Credentials & Access

**GitHub:**
- Secret name: `github_token` (stored in Settings > Developers, scope: `repo`)
- Repo: https://github.com/freetrials/diamond-lake-estates-website

**Netlify:**
- Site ID: `08354646-cdc1-4a5a-b890-ff546200a777`
- Token secret: `NETLIFY_PERSONAL_ACCESS_TOKEN` (Settings > Developers)
- Site name: `stunning-tanuki-ee59af`

**Google Forms:**
- Directory form: https://docs.google.com/forms/d/e/1FAIpQLSdzfPJkpI0VQvzbysfCGVm3Y-hy_5k-rFvDZeF8eb3m6CVqtQ/viewform

---

## Site Structure

**Pages:**
- `/` (index.html) — Home
- `/about.html` — About
- `/dues.html` — Pay Dues
- `/newsletters.html` — Newsletters
- `/events.html` — Events
- `/resources.html` — Resources (Property Rules, Member-Only Resources)
- `/directory.html` — Community Directory (Google Form outbound CTA)

**Key Files:**
- `styles.css` — All styling (colors, fonts, responsive)
- `script.js` — Navigation toggle (mobile menu)
- `og-image.png` — Social media preview image (1200x630px)
- `data/newsletters.json` — Newsletter archive
- `favicon.png` — Site icon

---

## Design System

**Colors:**
- Primary: `#1e5a7d` (dark teal)
- Accent: `#e87722` (orange)
- Background: `#fafbfc` (light)
- Text: `#1a1a1a` (dark gray)

**Fonts:**
- Display: `Fraunces` (serif, headings)
- Body: `Outfit` (sans-serif, copy)

**Responsive:**
- Mobile breakpoint: 768px
- Large text for older users
- Touch-friendly buttons (min 44px)

---

## How to Make Changes

**Workflow:**

1. **Clone the repo**
   ```bash
   git clone https://github.com/freetrials/diamond-lake-estates-website.git
   cd diamond-lake-estates-website
   ```

2. **Edit files**
   - HTML pages directly (use `edit_file_llm` for precision)
   - Always use `edit_file_llm` for text edits (faster than `create_or_rewrite_file`)
   - CSS in `styles.css`

3. **Test locally**
   - Open the file in a browser to verify changes render correctly
   - Test on mobile viewport (375px width)

4. **Commit and push to GitHub**
   ```bash
   git add .
   git commit -m "Brief description of change"
   git push origin main
   ```

5. **Deploy to Netlify**
   ```bash
   NETLIFY_AUTH_TOKEN=$NETLIFY_PERSONAL_ACCESS_TOKEN netlify deploy --prod --site "08354646-cdc1-4a5a-b890-ff546200a777"
   ```

6. **Verify live**
   - Visit https://diamondlakeestates.com
   - Check desktop + mobile
   - Take screenshots if needed

---

## Common Tasks

**Add a new page:**
- Create `newpage.html` in root with consistent nav/footer
- Update all nav menus to include new link
- Commit, push, deploy

**Update property rules (on /resources):**
- Edit the content in the `Civic League Property Rules` section
- Keep formatting verbatim from official document
- Test that all sections render clearly

**Add new newsletter:**
- Update `data/newsletters.json` with new entry
- No deploy needed (loads dynamically on `/newsletters`)

**Update footer links:**
- Edit all HTML files' footer section consistently
- Add to `Quick Links` and `Get in Touch` sections

**Change colors/fonts:**
- Edit `:root` variables in `styles.css`
- Updates apply sitewide automatically

---

## Key Rules & Notes

✅ **DO:**
- Use `edit_file_llm` for most edits
- Test both desktop and mobile
- Screenshot changes before ending chat
- Keep text clear, simple, large
- Use verbatim copy for property rules (formal document)
- Commit with clear messages

❌ **DON'T:**
- Use sed/complex shell commands for HTML edits
- Deploy without testing
- Break the nav structure
- Minimize text for older demographic
- Add AI-sounding language (e.g., em-dashes, "leverage")

---

## Common Issues & Fixes

**Menu shifts/moves around pages:**
- Nav structure must be identical on all pages
- Use consistent `<nav class="main-nav">` pattern

**Form doesn't embed properly:**
- Google Form must have "Anyone with link" permissions
- Use outbound CTA button instead of iframe for better UX

**Mobile menu doesn't work:**
- Check `script.js` is loaded on all pages
- Verify nav toggle button exists

**Deploy fails:**
- Check `NETLIFY_AUTH_TOKEN` is set correctly
- Confirm site ID is accurate
- Check no broken file paths

---

## When Starting a New Chat

Paste this and your request:

```
I'm working on the Diamond Lake Estates Civic League website (diamondlakeestates.com).

GitHub token secret: github_token
Repo: https://github.com/freetrials/diamond-lake-estates-website

Here's what needs to change:
[Your request]
```

That's it. I'll handle the rest.
