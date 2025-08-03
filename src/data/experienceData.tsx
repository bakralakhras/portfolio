import { ExperienceData } from './types'
import pwc from '../media/pwc_logo.png'
import eartech from '../media/eartech_logo.jpeg'

export const experienceData: ExperienceData[] = [
  {
    title: 'Cloud Consultant Intern',
    company: 'PwC Middle East',
    location: 'Amman, Jordan',
    dates: 'Aug 2024 - Oct 2024',
    description:
      'Deployed containerized apps on Azure using Docker and Terraform. Built CI/CD pipelines, automated infra tasks with Python, and implemented system monitoring with Prometheus and Grafana.',
    logoSrc: pwc
  },
  {
    title: 'DevOps Intern',
    company: 'EarTech IT',
    location: 'Istanbul, Turkey',
    dates: 'Nov 2023 - Jan 2024',
    description:
      'Developed Python-based services on Azure. Automated workflows with CI/CD, integrated SQL and Cognitive Search, and optimized cloud performance using Blob Storage and CDN.',
    logoSrc: eartech
  }
]
