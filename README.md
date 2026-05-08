# Bakr Alakhras — Portfolio

> Static portfolio for an Infrastructure & System Engineer focused on resilient systems, platform operations, observability, automation, and data infrastructure.

<p align="left">
  <img alt="Static Site" src="https://img.shields.io/badge/static_site-0D1117?style=for-the-badge&logo=html5&logoColor=E34F26&labelColor=0D1117">
  <img alt="Vanilla JS" src="https://img.shields.io/badge/vanilla_js-0D1117?style=for-the-badge&logo=javascript&logoColor=F7DF1E&labelColor=0D1117">
  <img alt="CSS" src="https://img.shields.io/badge/custom_css-0D1117?style=for-the-badge&logo=css3&logoColor=1572B6&labelColor=0D1117">
  <img alt="GitHub Pages Ready" src="https://img.shields.io/badge/github_pages-ready-0D1117?style=for-the-badge&logo=githubpages&logoColor=white&labelColor=0D1117">
</p>

## Purpose

This repository contains my personal engineering portfolio. It is built as a lightweight static site with no framework, no build pipeline, and no runtime dependencies.

The site highlights:

- Infrastructure and systems engineering work
- Platform and data infrastructure projects
- Observability and reliability case studies
- Professional experience, skills, education, and certifications
- Practical engineering decisions, tradeoffs, and implementation notes

## Featured Case Studies

| Case Study | Focus | Stack |
|---|---|---|
| Sovereign Data Platform | GitOps-managed OpenShift data platform with zero static credentials | OpenShift, ArgoCD, Vault, Kafka, Trino, MinIO |
| Distributed NiFi Monitoring Stack | HA observability for 60 NiFi nodes across 20 sites | Prometheus, Thanos, Grafana, Keepalived, SeaweedFS |
| HA PostgreSQL with Patroni | Self-managed PostgreSQL high availability on RHEL | PostgreSQL, Patroni, etcd, HAProxy, Keepalived |
| Real-Time Fraud Detection Platform | Streaming and batch analytics on a lakehouse foundation | Kafka, Spark, Iceberg, Trino, Airflow |
| AI Incident Responder | Automated alert triage and remediation workflow | FastAPI, Celery, Prometheus, LLM APIs |

## Tech Stack

The portfolio itself is intentionally simple.

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | Custom CSS |
| Interactivity | Vanilla JavaScript |
| Content Model | JavaScript modules |
| Hosting | GitHub Pages or any static web server |

No React, no bundler, no package manager, no build command.

## Repository Structure

```text
.
├── index.html                  # Default GitHub Pages entry point
├── Portfolio.html              # Main portfolio page
├── styles.css                  # Shared styles for case studies
├── CONTENT.md                  # Notes for editing portfolio content
├── assets/
│   ├── css/
│   │   └── main.css            # Homepage styles
│   └── js/
│       ├── app.js              # Homepage behavior
│       ├── data.js             # Main content source
│       ├── icons.js            # Inline icon helpers
│       └── renderers.js        # Card/timeline/section renderers
└── case-studies/
    ├── sovereign-data-platform.html
    ├── monitoring-stack.html
    ├── postgres-ha.html
    ├── fraud-detection.html
    └── ai-incident-responder.html
```

## Local Preview

The homepage uses JavaScript modules, so serve it through HTTP instead of opening the file directly.

```powershell
python -m http.server 8000
```

Open:

```text
http://localhost:8000/
```

## Updating Content

Homepage content is centralized in:

```text
assets/js/data.js
```

Use it to edit:

- Project cards
- Case study previews
- Skills
- Experience
- Education
- Certifications

Standalone case studies live in:

```text
case-studies/
```

Additional editing notes are in:

```text
CONTENT.md
```

After updating `assets/js/data.js`, regenerate the static homepage markup:

```powershell
node generate.js
```

This keeps `index.html` crawlable and readable without JavaScript while preserving the existing JavaScript as progressive enhancement.

## Design Direction

The visual direction is dark, technical, and systems-oriented:

- Terminal-inspired typography
- Low-noise layouts
- Dense but readable project cards
- Architecture diagrams rendered directly in HTML/CSS
- Case studies written around decisions, tradeoffs, incidents, and outcomes

The goal is not to look like a marketing page. The goal is to present engineering work clearly and credibly.

## Deployment

This repository is ready for GitHub Pages.

Default entry point:

```text
index.html
```

The named homepage file is also kept as:

```text
Portfolio.html
```

## Author

**Bakr Alakhras**  
Infrastructure & System Engineer

| Link | URL |
|---|---|
| GitHub | [github.com/bakralakhras](https://github.com/bakralakhras) |
| LinkedIn | [linkedin.com/in/bakr-alakhras](https://www.linkedin.com/in/bakr-alakhras/) |
