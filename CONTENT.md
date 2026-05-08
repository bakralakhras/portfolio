# Updating Portfolio Content

Most repeatable homepage content now lives in `assets/js/data.js`. The HTML contains only section mount points, and `assets/js/renderers.js` turns the data into cards, timelines, and badges.

## Add a Project

Add a new object to `portfolioData.projects` in `assets/js/data.js`.

```js
{
  category: 'devops',
  eyebrow: 'Automation',
  name: 'New Project',
  statement: 'One clear sentence about what it does.',
  stack: ['Python', 'FastAPI', 'Docker'],
  status: 'In Development',
  links: [
    { type: 'github', label: 'GitHub', href: 'https://github.com/bakralakhras/new-project', external: true }
  ]
}
```

Use `featured: true` and add a `highlights` array if you want it in the larger featured project grid.

## Add a Category

Add the category to `portfolioData.categories`, then use the same `id` on projects.

```js
{ id: 'security', label: 'Security' }
```

## Add Experience

Add a new object to `portfolioData.experience` with `role`, `meta`, `company`, and `bullets`.

## Add Skills

Add or edit an object in `portfolioData.skills`.

```js
{ label: 'Security', items: ['Vault', 'FreeIPA', 'Kerberos'] }
```

## Update Education

Edit `portfolioData.education`.

## Add a Certification

Add a new object to `portfolioData.certifications`.

```js
{ logo: 'CKA', logoClass: '', name: 'Certified Kubernetes Administrator', issuer: 'CNCF' }
```

If you want a custom logo color, add a matching `.cert-logo.your-class` style in `Portfolio.html`.
