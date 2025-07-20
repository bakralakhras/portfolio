import { ReactElement } from 'react'

export interface LinkT {
    link: string
    icon: ReactElement
}

export interface ProjectT {
    name?: string
    id?: string
    type?: string
    tags?: ReactElement[]
    tagline?: string
    imageSrc?: string
    videoSrc?: string 
    description?: string
    links?: LinkT[]
    headerLink?: string
}

export interface ExperienceData {
    title: string
    company: string
    location: string
    dates: string
    description: string
    logoSrc?: string | null
}
export interface CertificateData {
    title: string
    company: string
    location: string
    dates: string
    description: React.ReactNode
    logoSrc?: string | null
}
