# LTRCOL-2011: AI by Design for Collaboration

Hands-on lab guide for **Cisco Live US 2026** covering AI-powered features across Webex Messaging, Calling, Meetings, Customer Assist, Contact Center, Slido, and Vidcast.

**Live site:** https://omerilyas.github.io/AibyDesign/

## Quick Start — Local Preview

### 1. Clone the repo

```bash
git clone git@github.com:omerilyas/AibyDesign.git
cd AibyDesign
```

### 2. Create and activate a virtual environment

**macOS / Linux:**

```bash
python3 -m venv .venv
source .venv/bin/activate
```

**Windows:**

```powershell
python -m venv .venv
.venv\Scripts\activate
```

### 3. Install dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Serve locally

```bash
mkdocs serve
```

Open http://127.0.0.1:8000 in your browser. Changes auto-reload.

## Contributing

### Editing content

1. All lab content lives under `docs/`
2. Each module has its own folder (e.g., `docs/module-1-setup-your-lab-environment/`)
3. Each folder has an `index.md` (overview) and one markdown file per submodule task
4. Screenshots go in the `img/` subfolder within each module folder

### Adding a new submodule

1. Create a new `.md` file in the appropriate module folder
2. Add it to the `nav:` section in `mkdocs.yml`
3. Add a checklist entry in `docs/project-task-board.md`

### Adding a new module

1. Create a new folder under `docs/` (e.g., `docs/module-10-new-topic/`)
2. Add `index.md` and submodule `.md` files
3. Create an `img/` subfolder for screenshots
4. Add the module and submodules to `nav:` in `mkdocs.yml`
5. Add a module card to `docs/index.md` (home page)
6. Add entries to `docs/project-task-board.md`
7. Add the submodule task IDs to `docs/js/interactive-checkboxes.js` in the `URL_TO_TASK` mapping (for the "Mark Task Complete" button)

### Deploying

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions. Just push your changes:

```bash
git add .
git commit -m "Your commit message"
git push
```

The site will update within 1-2 minutes. Check deployment status at https://github.com/omerilyas/AibyDesign/actions

### Important

- Do **not** commit large files (`.docx`, `.mp4`, `.zip`) — they are in `.gitignore`
- Preview locally with `mkdocs serve` before pushing
- Use lowercase kebab-case for all filenames

## Project Structure

```
.
├── README.md
├── requirements.txt
├── mkdocs.yml
├── .github/workflows/deploy.yml    # GitHub Pages auto-deploy
└── docs/
    ├── index.md                     # Home page
    ├── about-this-lab.md
    ├── project-task-board.md        # Progress tracker
    ├── css/custom.css               # Custom styles
    ├── js/interactive-checkboxes.js # Task progress + celebration
    ├── js/floating-notepad.js       # Per-page notepad
    ├── module-1-setup-your-lab-environment/
    ├── module-2-langchain-for-messaging-intelligence/
    └── appendix/
```
