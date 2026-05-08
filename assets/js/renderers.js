import { portfolioData } from './data.js';
import { iconPaths } from './icons.js';

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
      const arrow = index > 0 ? '<span class="arch-arrow">→</span>' : '';
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
      <a class="cs-link" href="${escapeHtml(study.href)}">Read Case Study →</a>
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
  <div class="deg">${escapeHtml(education.degree)} — <span>${escapeHtml(education.school)}</span></div>
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

export const renderPortfolioData = () => {
  document.getElementById('filters').innerHTML = portfolioData.categories
    .map((category, index) => `<button class="pill ${index === 0 ? 'active' : ''}" data-cat="${escapeHtml(category.id)}">${escapeHtml(category.label)}</button>`)
    .join('');
  document.getElementById('featured-projects').innerHTML = portfolioData.projects.filter(project => project.featured).map(renderProject).join('');
  document.getElementById('notable-projects').innerHTML = portfolioData.projects.filter(project => !project.featured).map(renderProject).join('');
  document.getElementById('case-study-grid').innerHTML = portfolioData.caseStudies.map(renderCaseStudy).join('');
  document.getElementById('skills-grid').innerHTML = portfolioData.skills.map(renderSkillGroup).join('');
  document.getElementById('experience-timeline').innerHTML = portfolioData.experience.map(renderExperience).join('');
  document.getElementById('education-block').innerHTML = renderEducation(portfolioData.education);
  document.getElementById('certification-grid').innerHTML = portfolioData.certifications.map(renderCertification).join('');
};
