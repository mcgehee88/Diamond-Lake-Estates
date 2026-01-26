# GitHub Setup Instructions

## For Future AI Chats

When you start a new chat and want to make changes:

```
I'm working on the Diamond Lake Estates Civic League website.

GitHub token secret: github_token
Repo: https://github.com/freetrials/diamond-lake-estates-website

Here's what needs to change:
[YOUR REQUEST]
```

The AI will:
1. Use `github_token` from your Zo settings to authenticate
2. Clone the repo
3. Make your changes
4. Push back to GitHub
5. Deploy to Netlify
6. Verify it's live

---

## What's Already Set Up

✅ All website files are in this folder (`/home/workspace/Diamond Lake Estates Website/`)

✅ Git repo initialized locally (ready to push)

✅ Credentials stored in Zo Settings > Developers:
   - `github_token` — GitHub personal access token (scope: `repo`)
   - `NETLIFY_PERSONAL_ACCESS_TOKEN` — For Netlify deployments

✅ GitHub repo created: `https://github.com/freetrials/diamond-lake-estates-website`

✅ Netlify site linked (ID: `08354646-cdc1-4a5a-b890-ff546200a777`)

---

## What YOU Need to Do (One-Time)

### 1. Verify GitHub Repo Access
Go to: https://github.com/freetrials/diamond-lake-estates-website
- Make sure it's **YOUR repo** (freetrials account)
- It should have "main" branch

### 2. First Push (Manual)
You can optionally push the initial files manually:

```bash
cd /home/workspace/"Diamond Lake Estates Website"
git remote add origin https://github.com/freetrials/diamond-lake-estates-website.git
git branch -M main
git push -u origin main
```

**Or** just tell the AI in your next chat: "Push all files to GitHub first" and they'll do it.

### 3. Future Chats
Just paste the prompt above. Done.

---

## Workflow Diagram

```
Your Request in Chat
        ↓
AI reads: github_token + repo URL
        ↓
AI clones GitHub repo
        ↓
AI edits HTML/CSS
        ↓
AI tests (browser screenshots)
        ↓
AI commits & pushes to GitHub
        ↓
AI deploys to Netlify
        ↓
AI verifies at diamondlakeestates.com
        ↓
Chat ends. You're done.
```

---

## Files to Reference

- **README.md** — Overview of site + design system
- **DLE-HANDOFF-PROMPT.md** — Full technical handoff (paste in new chats)
- **All HTML files** — Use `edit_file_llm` for edits
- **styles.css** — Design system colors, fonts, responsive breakpoints
- **script.js** — Mobile menu toggle logic

---

## Credentials (Already Set)

✅ `github_token` — In Settings > Developers
✅ `NETLIFY_PERSONAL_ACCESS_TOKEN` — In Settings > Developers
✅ Site ID: `08354646-cdc1-4a5a-b890-ff546200a777`
✅ Repo: `https://github.com/freetrials/diamond-lake-estates-website`

---

## Questions?

- **Site doesn't update?** Check Netlify deploy status
- **GitHub push fails?** Check token has `repo` scope
- **New AI is confused?** Paste the full DLE-HANDOFF-PROMPT.md in your chat

You're all set! 🚀
