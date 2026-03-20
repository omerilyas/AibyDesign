# LTRCOL-2011: Cisco Webex AI Lab Guide

Hands-on lab guide for **Cisco Live US 2026** covering AI-powered features across Webex Messaging, Calling, Meetings, Customer Assist, Contact Center, Slido, and Vidcast.

Built with [MkDocs](https://www.mkdocs.org/) and the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Quick Start

### 1. Create and activate the virtual environment

=== "macOS / Linux"

```bash
python3 -m venv .venv
source .venv/bin/activate
```

=== "Windows"

```powershell
python -m venv .venv
.venv\Scripts\activate
```

### 2. Install dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### 3. Serve locally

```bash
mkdocs serve
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000) in your browser.

### 4. Build static site

```bash
mkdocs build
```

Output goes to the `site/` directory.

## Project Structure

```
.
├── README.md
├── requirements.txt
├── mkdocs.yml
└── docs/
    ├── index.md
    ├── about-this-lab.md
    ├── accessing-your-lab.md
    ├── project-task-board.md
    ├── module-1-setup-your-lab-environment/
    ├── module-2-enhancing-messaging-with-webex-ai/
    ├── module-3-ai-powered-features-in-webex-calling/
    ├── module-4-ai-powered-webex-meetings/
    ├── module-5-customer-assist/
    ├── module-6-ai-agents-in-webex-contact-center/
    ├── module-7-transforming-engagement-with-slido-ai/
    ├── module-8-elevating-vidcast-with-ai/
    └── appendix/
```

Each module folder contains an `index.md` overview and one markdown file per submodule task.
