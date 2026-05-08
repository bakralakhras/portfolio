// Content source: add future projects, case studies, jobs, and certs here.
export const portfolioData = {
  categories: [
    { id: 'all', label: 'All' },
    { id: 'platform', label: 'Platform & Data' },
    { id: 'devops', label: 'DevOps & Automation' },
    { id: 'product', label: 'Product' },
    { id: 'iac', label: 'IaC & Cloud' }
  ],
  projects: [
    {
      featured: true,
      category: 'platform',
      eyebrow: 'Platform Engineering',
      name: 'Sovereign Data Platform',
      statement: 'GitOps-managed OpenShift 4.18 lakehouse with 10 stateful services, zero static credentials, and a single bootstrap command.',
      stack: ['OpenShift', 'ArgoCD', 'Kafka', 'Trino', 'MinIO', 'Vault', 'Prometheus', 'Thanos', 'Airflow', 'Spark'],
      highlights: [
        'App-of-apps deployment model with deterministic sync-wave ordering',
        'Vault Secrets Operator materializing secrets from Vault KV v2 paths',
        'Cold restore from Git alone on private on-premises infrastructure'
      ],
      status: 'Production',
      links: [
        { type: 'github', label: 'GitHub', href: 'https://github.com/bakralakhras', external: true },
        { type: 'case', label: 'Case Study', href: 'case-studies/sovereign-data-platform.html' },
        { type: 'docs', label: 'Docs', href: '#' }
      ]
    },
    {
      featured: true,
      category: 'platform',
      eyebrow: 'Data Engineering',
      name: 'Real-Time Fraud Detection Platform',
      statement: 'Streaming and batch fraud analytics platform built on a Kafka-to-Iceberg lakehouse architecture.',
      stack: ['Kafka', 'Spark', 'Iceberg', 'MinIO', 'Airflow', 'Trino', 'Superset'],
      highlights: [
        'Dual-path pipeline: real-time alerting + batch reconciliation layer',
        'Kafka-to-Iceberg ingestion with schema evolution and compaction',
        'Federated query layer via Trino over MinIO-backed Iceberg tables'
      ],
      status: 'In Development',
      links: [
        { type: 'github', label: 'GitHub', href: 'https://github.com/bakralakhras', external: true },
        { type: 'case', label: 'Case Study', href: 'case-studies/fraud-detection.html' },
        { type: 'docs', label: 'Docs', href: '#' }
      ]
    },
    {
      category: 'devops',
      eyebrow: 'DevOps / Automation',
      name: 'AI-Powered Cloud Incident Responder',
      statement: 'Alert triage system that maps Prometheus signals to LLM-generated remediation steps.',
      stack: ['Python', 'FastAPI', 'Prometheus', 'Grafana', 'Docker'],
      status: 'In Development',
      links: [
        { type: 'github', label: 'GitHub', href: 'https://github.com/bakralakhras', external: true },
        { type: 'case', label: 'Case Study', href: 'case-studies/ai-incident-responder.html' }
      ]
    },
    {
      category: 'devops',
      eyebrow: 'Automation',
      name: 'TaskSmith',
      statement: 'AI task agent with async job processing, LLM-driven classification, and built-in observability.',
      stack: ['FastAPI', 'PostgreSQL', 'Redis', 'Celery', 'Prometheus'],
      status: 'In Development',
      links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/bakralakhras', external: true }]
    },
    {
      category: 'product',
      eyebrow: 'Product',
      name: 'Grimoire',
      statement: 'Offline-first desktop and mobile audiobook platform with local media ownership and progress sync.',
      stack: ['Desktop', 'Mobile', 'SQLite'],
      status: 'In Development',
      links: [{ type: 'github', label: 'GitHub', href: 'https://github.com/bakralakhras', external: true }]
    }
  ],
  caseStudies: [
    {
      eyebrow: 'Platform Engineering',
      name: 'Sovereign Data Platform',
      problem: 'How do you run streaming, batch, and analytical workloads on private infrastructure without managed cloud services or configuration drift?',
      approach: 'Made ArgoCD app-of-apps the control plane, split every stateful service into its own Application, and used Vault Secrets Operator so Git only references Vault paths.',
      decisions: [
        'ArgoCD app-of-apps over Helm umbrella charts for independent release cadence',
        'Vault Secrets Operator over static Kubernetes Secrets for auditable rotation',
        'OpenShift Thanos Querier over a standalone Prometheus stack for lower ops overhead'
      ],
      stack: ['OpenShift', 'ArgoCD', 'Vault', 'Thanos'],
      href: 'case-studies/sovereign-data-platform.html',
      arch: [
        ['Git Repo', { text: 'ArgoCD', accent: true }, 'App-of-Apps'],
        ['Kafka', 'Trino', 'Spark', 'MinIO', 'Airflow'],
        [{ text: 'Vault', accent: true }, 'Dynamic Creds', { text: 'Thanos', accent: true }]
      ]
    },
    {
      eyebrow: 'Observability Engineering',
      name: 'Distributed NiFi Monitoring Stack',
      problem: 'How do you monitor 60 NiFi nodes across 20 cities with no single point of failure and only one client-facing URL?',
      approach: 'Built a duplicated Prometheus agent layer, centralized ingestion through Thanos Receive, deduplicated queries through Thanos Querier, and used Keepalived VIPs for both write ingestion and Grafana access.',
      decisions: [
        'Prometheus agent mode over standard Prometheus for stateless HA scraping',
        'Thanos Receive and Querier for deduplication and long-term metrics',
        'SeaweedFS over MinIO to satisfy NFS storage and open-source constraints'
      ],
      stack: ['Prometheus', 'Thanos', 'Grafana', 'Keepalived', 'SeaweedFS', 'NiFi'],
      href: 'case-studies/monitoring-stack.html',
      arch: [
        ['60 NiFi APIs', { text: 'Prom Agents x2', accent: true }, 'remote_write'],
        [{ text: 'Thanos Receive', accent: true }, 'SeaweedFS / NFS', 'Thanos Querier'],
        ['Grafana x2', { text: 'Keepalived VIP', accent: true }, 'Client URL']
      ]
    },
    {
      eyebrow: 'Data Engineering',
      name: 'Real-Time Fraud Detection Platform',
      problem: 'How do you build a fraud detection pipeline that handles both real-time and historical analysis without duplicating storage?',
      approach: 'Unified Kafka and Iceberg as a single lakehouse foundation. Real-time path uses Spark Structured Streaming; batch path reuses the same Iceberg tables via Trino.',
      decisions: [
        'Iceberg over Delta Lake for OpenShift/MinIO compatibility',
        'Spark over a separate Flink cluster for operational simplicity',
        'Trino for ad-hoc over Spark SQL for latency'
      ],
      stack: ['Kafka', 'Iceberg', 'Spark', 'Trino'],
      href: 'case-studies/fraud-detection.html',
      arch: [
        [{ text: 'Kafka', accent: true }, 'Spark Streaming', 'Alerts'],
        ['ingest'],
        [{ text: 'Iceberg / MinIO', accent: true }, 'Compaction'],
        ['Trino', 'Superset', 'Analysts']
      ]
    },
    {
      eyebrow: 'DevOps / Automation',
      name: 'AI Incident Responder',
      problem: 'Alert fatigue in a multi-cluster environment with no automated triage workflow.',
      approach: 'Built an async pipeline that consumes Alertmanager webhooks, enriches alerts with context from Prometheus, and sends structured prompts to an LLM for remediation suggestions.',
      decisions: [
        'Async Celery queue over synchronous API for burst handling',
        'Structured prompt templates over freeform to constrain LLM output',
        'FastAPI over Flask for native async support'
      ],
      stack: ['FastAPI', 'Celery', 'Prometheus'],
      href: 'case-studies/ai-incident-responder.html',
      arch: [
        ['Alertmanager', { text: 'FastAPI Webhook', accent: true }],
        ['Prometheus Context', 'Celery Queue', { text: 'LLM', accent: true }],
        ['Structured Prompt', 'Remediation Steps']
      ]
    },
    {
      eyebrow: 'Reliability',
      name: 'HA PostgreSQL with Patroni',
      problem: 'A regulated workload needed durable, automatically failing-over PostgreSQL with no managed-DB option available.',
      approach: 'Built a 3-node Patroni cluster on RHEL with etcd quorum, fronted by HAProxy and Keepalived for VIP failover. WAL archived to MinIO with point-in-time recovery validated weekly.',
      decisions: [
        'Patroni over repmgr for declarative cluster topology',
        'etcd over Consul to share quorum with existing platform',
        'HAProxy + Keepalived over PgBouncer-only for L4 failover'
      ],
      stack: ['PostgreSQL', 'Patroni', 'etcd', 'HAProxy'],
      href: 'case-studies/postgres-ha.html',
      arch: [
        ['Keepalived VIP', { text: 'HAProxy', accent: true }, 'Patroni Leader'],
        ['Replica 01', { text: 'etcd Quorum', accent: true }, 'Replica 02'],
        ['WAL Archive', 'MinIO Backup']
      ]
    }
  ],
  skills: [
    { label: 'Cloud & Platforms', items: ['Azure', 'OpenShift', 'AWS'] },
    { label: 'Containers & Orchestration', items: ['Kubernetes', 'Docker', 'Helm', 'Podman'] },
    { label: 'GitOps & CI/CD', items: ['ArgoCD', 'GitHub Actions', 'GitLab CI', 'Jenkins', 'Ansible'] },
    { label: 'Infrastructure as Code', items: ['Terraform', 'Ansible'] },
    { label: 'Monitoring & Observability', items: ['Prometheus', 'Grafana', 'Thanos', 'Alertmanager'] },
    { label: 'Data Infrastructure', items: ['Kafka', 'Spark', 'Trino', 'Hive', 'MinIO', 'Airflow', 'Iceberg', 'Superset'] },
    { label: 'Security & Identity', items: ['Vault', 'FreeIPA', 'Kerberos', 'cert-manager'] },
    { label: 'Databases', items: ['PostgreSQL', 'MySQL', 'Oracle', 'Redis'] },
    { label: 'Backend & Automation', items: ['Python', 'FastAPI', 'Bash', 'REST APIs'] },
    { label: 'Linux', items: ['RHEL', 'Rocky Linux', 'Ubuntu'] }
  ],
  experience: [
    {
      role: 'Infrastructure & System Engineer',
      meta: 'Sep 2025 - Present · Full-time',
      company: 'Datahub Analytics — Amman, Jordan · On-site',
      bullets: [
        'Own and operate enterprise Linux infrastructure across 45+ servers — automated configuration, domain integration, and fleet-wide drift prevention via Ansible and SSSD.',
        'Engineered a fully redundant HA database tier using PostgreSQL, Patroni, etcd, HAProxy, and Keepalived, eliminating single points of failure across production clusters.',
        'Administer Cloudera CDP compute environments — HDFS, YARN, Spark, Impala, and NiFi — across multi-site deployments serving production analytical workloads.',
        'Enforce platform security and governance via Ranger, Kerberos, and Atlas; manage Informatica PowerCenter and PowerExchange CDC pipelines integrating Oracle, SQL Server, and Kafka.',
        'Designed and shipped a self-hosted data stack on RHEL — Trino, MinIO, Hive Metastore, Kafka, Jenkins, GitLab, and Kubernetes — operated entirely on bare-metal infrastructure.'
      ]
    },
    {
      role: 'Cloud Engineer',
      meta: 'Jul 2024 - Sep 2024 · Internship',
      company: 'PwC Middle East — On-site',
      bullets: [
        'Built and containerized Azure-hosted web applications with Docker, enforcing environment parity across dev and production.',
        'Designed and shipped CI/CD pipelines that automated build, test, and deployment — removing manual handoffs from the release process.',
        'Authored Terraform templates to standardize repeatable cloud infrastructure provisioning across Azure environments.',
        'Instrumented application performance with Prometheus and built Grafana dashboards tracking latency, error rates, and resource utilization.',
        'Hardened Windows Server environments on Azure VMs using Ansible, applying security baselines across the fleet.'
      ]
    }
  ],
  education: {
    degree: 'B.Sc. Software Engineering',
    school: 'Bahçeşehir University',
    meta: 'Graduated top 5% · 2025'
  },
  certifications: [
    { logo: 'MS', logoClass: 'ms', name: 'Azure Administrator Associate', issuer: 'Microsoft · AZ-104' },
    { logo: 'MS', logoClass: 'ms', name: 'Azure Fundamentals', issuer: 'Microsoft · AZ-900' },
    { logo: 'M', logoClass: 'minio', name: 'Certified Administrator', issuer: 'MinIO' }
  ]
};
