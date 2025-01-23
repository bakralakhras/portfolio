import { ExperienceData } from './types'
import pwc from '../media/pwc_logo.png'
import eartech from '../media/eartech_logo.jpeg'

export const experienceData: ExperienceData[] = [
    {
        title: 'Cloud Engineer Intern',
        company: 'PwC',
        location: 'Amman, JO',
        dates: 'July 2024 - August 2024',
        description:
            'Building Scalable Cloud Solutions, Using DevOps methodologies. Integerated CI/CD pipeline to the workflow and helping automate tasks with python.',
        logoSrc: pwc
    },
    {
        title: 'Software Engineer',
        company: 'EarTech IT',
        location: 'Istanbul, TR',
        dates: 'June 2023 - Jan 2024',
        description:
            'Developed and optimized Python-based solutions for cloud applications, focusing on automation, data processing, and performance improvements using Azure services. Collaborated with senior engineers to enhance application efficiency and authored technical documentation for seamless onboarding and system maintenance.',
        logoSrc: eartech
    }
]
