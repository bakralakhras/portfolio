# Bakr Alakhras Portfolio

Personal portfolio for Bakr Alakhras, an Infrastructure & System Engineer focused on infrastructure automation, platform operations, observability, and data platform reliability.

The site is a static HTML/CSS/JavaScript portfolio. It highlights selected infrastructure and data platform projects, detailed case studies, technical experience, skills, education, and certifications.

## Overview

This portfolio is designed to be simple to run, easy to maintain, and deployable from any static hosting provider.

Key sections include:

- Projects and engineering work
- Technical case studies
- Infrastructure, DevOps, observability, and data platform skills
- Professional experience
- Education and certifications
- Contact links

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- JavaScript modules for structured portfolio content
- Static hosting through GitHub Pages or any equivalent web server

No build step, package manager, or frontend framework is required.

## Project Structure

```text
.
├── index.html
├── Portfolio.html
├── styles.css
├── CONTENT.md
├── assets/
│   ├── css/
│   │   └── main.css
│   └── js/
│       ├── app.js
│       ├── data.js
│       ├── icons.js
│       └── renderers.js
└── case-studies/
    ├── ai-incident-responder.html
    ├── fraud-detection.html
    ├── monitoring-stack.html
    ├── postgres-ha.html
    └── sovereign-data-platform.html
```

## Running Locally

Because the homepage loads content through JavaScript modules, serve the site through a local HTTP server instead of opening the HTML file directly.

From the project root:

```powershell
python -m http.server 8000
```

Then open:

```text
http://localhost:8000/
```

## Editing Content

Most repeatable homepage content is managed in:

```text
assets/js/data.js
```

Use that file to update:

- Project cards
- Case study previews
- Skills
- Experience
- Education
- Certifications

Detailed case study pages live in:

```text
case-studies/
```

For content editing notes, see:

```text
CONTENT.md
```

## Case Studies

Current case studies include:

- Sovereign Data Platform
- Distributed NiFi Monitoring Stack
- Real-Time Fraud Detection Platform
- AI Incident Responder
- HA PostgreSQL with Patroni

Each case study is written as a standalone HTML page using the shared visual system from `styles.css`.

## Deployment

This repository is suitable for GitHub Pages.

The default entry point is:

```text
index.html
```

`Portfolio.html` is kept as the named homepage file for compatibility with the original local project workflow.

## Author

Bakr Alakhras  
Infrastructure & System Engineer

- GitHub: [bakralakhras](https://github.com/bakralakhras)
- LinkedIn: [bakr-alakhras](https://www.linkedin.com/in/bakr-alakhras/)
