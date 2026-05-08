const fs = require('fs');
const path = require('path');

const root = __dirname;

const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const write = (file, content) => fs.writeFileSync(path.join(root, file), content);

const loadExportedConst = (file, name) => {
  const source = read(file);
  const marker = `export const ${name} =`;
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`Could not find ${marker} in ${file}`);

  const expression = source.slice(start + marker.length).trim().replace(/;\s*$/, '');
  return Function(`"use strict"; return (${expression});`)();
};

const portfolioData = loadExportedConst('assets/js/data.js', 'portfolioData');
const iconPaths = loadExportedConst('assets/js/icons.js', 'iconPaths');

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

const badges = (items = []) => items.map(item => `<span class="tbadge">${escapeHtml(item)}</span>`).join('');
const statusClass = (status) => status === 'Production' ? 'green' : status === 'Blocked' ? 'red' : 'amber';
const projectPage = (project) => project.links.find(link => link.type === 'case');
const cardLinkAttrs = (link) => link
  ? `data-href="${escapeHtml(link.href)}" role="link" tabindex="0" aria-label="Open ${escapeHtml(link.label)}"`
  : '';
const iconLink = (link) => `
  <a class="ilink" href="${escapeHtml(link.href)}" ${link.external ? 'target="_blank" rel="noopener noreferrer"' : ''} title="${escapeHtml(link.label)}">
    <svg viewBox="0 0 24 24">${iconPaths[link.type] || iconPaths.docs}</svg>
  </a>`;

const renderProject = (project) => {
  const status = `<span class="status ${statusClass(project.status)}"><span class="d"></span>${escapeHtml(project.status)}</span>`;
  const pageLink = projectPage(project);
  if (project.featured) {
    return `
      <article class="card feat-card ${pageLink ? 'clickable-card' : ''}" data-cat="${escapeHtml(project.category)}" ${cardLinkAttrs(pageLink)}>
        <span class="eyebrow accent">${escapeHtml(project.eyebrow)}</span>
        <div>
          <div class="feat-name">${escapeHtml(project.name)}</div>
          <p class="feat-statement">${escapeHtml(project.statement)}</p>
        </div>
        <div class="tstack">${badges(project.stack)}</div>
        <div class="divider"></div>
        <ul class="highlights">${project.highlights.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
        <div class="feat-foot">
          ${status}
          <div class="icon-links">${project.links.map(iconLink).join('')}</div>
        </div>
      </article>`;
  }
  return `
    <article class="card nb-card ${pageLink ? 'clickable-card' : ''}" data-cat="${escapeHtml(project.category)}" ${cardLinkAttrs(pageLink)}>
      <span class="eyebrow accent">${escapeHtml(project.eyebrow)}</span>
      <div class="nb-name">${escapeHtml(project.name)}</div>
      <p class="nb-desc">${escapeHtml(project.statement)}</p>
      <div class="tstack">${badges(project.stack)}</div>
      <div class="nb-foot">
        ${status}
        ${project.links.map(iconLink).join('')}
      </div>
    </article>`;
};

const renderArchRow = (row) => `
  <div class="arch-row">
    ${row.map((item, index) => {
      const box = typeof item === 'string' ? { text: item } : item;
      const arrow = index > 0 ? '<span class="arch-arrow">&rarr;</span>' : '';
      return `${arrow}<div class="arch-box ${box.accent ? 'accent' : ''}">${escapeHtml(box.text)}</div>`;
    }).join('')}
  </div>`;

const renderCaseStudy = (study) => `
  <article class="card cs-card">
    <span class="eyebrow">${escapeHtml(study.eyebrow)}</span>
    <div class="cs-name">${escapeHtml(study.name)}</div>
    <div class="arch">${study.arch.map(renderArchRow).join('')}</div>
    <div class="cs-block">
      <span class="lab">The Problem</span>
      <p class="txt">${escapeHtml(study.problem)}</p>
    </div>
    <div class="cs-block">
      <span class="lab">The Approach</span>
      <p class="txt">${escapeHtml(study.approach)}</p>
    </div>
    <div class="divider"></div>
    <div class="cs-block">
      <span class="lab">Key Decisions</span>
      <ul class="cs-decisions">${study.decisions.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </div>
    <div class="cs-foot">
      <div class="tstack">${badges(study.stack)}</div>
      <a class="cs-link" href="${escapeHtml(study.href)}">Read Case Study &rarr;</a>
    </div>
  </article>`;

const renderExperience = (item) => `
  <div class="tl-entry">
    <div class="tl-head">
      <h3 class="tl-role">${escapeHtml(item.role)}</h3>
      <span class="tl-meta">${escapeHtml(item.meta)}</span>
    </div>
    <div class="tl-co">${escapeHtml(item.company)}</div>
    <ul class="tl-bullets">${item.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}</ul>
  </div>`;

const renderSkillGroup = (group) => `
  <div class="stack-group">
    <div class="lab">${escapeHtml(group.label)}</div>
    <div class="pills">${badges(group.items)}</div>
  </div>`;

const renderEducation = (education) => `
  <div class="deg">${escapeHtml(education.degree)} &mdash; <span>${escapeHtml(education.school)}</span></div>
  <div class="meta">${escapeHtml(education.meta)}</div>`;

const renderCertification = (cert) => `
  <div class="cert">
    <div class="cert-logo ${escapeHtml(cert.logoClass)}">${escapeHtml(cert.logo)}</div>
    <div>
      <div class="cert-name">${escapeHtml(cert.name)}</div>
      <div class="cert-issuer">${escapeHtml(cert.issuer)}</div>
    </div>
    <div class="cert-badge">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${iconPaths.badge}</svg>
    </div>
  </div>`;

const sections = {
  filters: portfolioData.categories
    .map((category, index) => `<button class="pill ${index === 0 ? 'active' : ''}" data-cat="${escapeHtml(category.id)}">${escapeHtml(category.label)}</button>`)
    .join(''),
  'featured-projects': portfolioData.projects.filter(project => project.featured).map(renderProject).join(''),
  'notable-projects': portfolioData.projects.filter(project => !project.featured).map(renderProject).join(''),
  'case-study-grid': portfolioData.caseStudies.map(renderCaseStudy).join(''),
  'skills-grid': portfolioData.skills.map(renderSkillGroup).join(''),
  'experience-timeline': portfolioData.experience.map(renderExperience).join(''),
  'education-block': renderEducation(portfolioData.education),
  'certification-grid': portfolioData.certifications.map(renderCertification).join(''),
};

const replaceMount = (html, id, content) => {
  const openPattern = new RegExp(`<div\\b[^>]*\\bid="${id}"[^>]*>`, 'm');
  const openMatch = openPattern.exec(html);
  if (!openMatch) throw new Error(`Could not find mount #${id}`);

  const openStart = openMatch.index;
  const openEnd = openStart + openMatch[0].length;
  const tagPattern = /<\/?div\b[^>]*>/g;
  tagPattern.lastIndex = openEnd;

  let depth = 1;
  let closeStart = -1;
  let closeEnd = -1;
  let tagMatch;
  while ((tagMatch = tagPattern.exec(html))) {
    if (tagMatch[0].startsWith('</')) depth -= 1;
    else depth += 1;

    if (depth === 0) {
      closeStart = tagMatch.index;
      closeEnd = tagPattern.lastIndex;
      break;
    }
  }

  if (closeStart === -1) throw new Error(`Could not find closing tag for #${id}`);

  return `${html.slice(0, openEnd)}\n${content}\n    ${html.slice(closeStart, closeEnd)}${html.slice(closeEnd)}`;
};

let html = read('index.html');
for (const [id, content] of Object.entries(sections)) {
  html = replaceMount(html, id, content);
}

write('index.html', html);
console.log(`Generated static homepage content for ${Object.keys(sections).length} sections.`);
