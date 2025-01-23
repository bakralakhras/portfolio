
import { CertificateData } from './types'
import az104 from '../media/az_104.png'
import az900 from '../media/az900.png'
import eartech from '../media/eartech_logo.jpeg'
import aws_sol from '../media/aws_solutions.png'

export const certificateData: CertificateData[] = [
    {
        title: 'Azure Solutions Architect Expert',
        company: 'Microsoft',
        location: '',
        dates: 'December 2024 - Present',
        description: (
            <>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <a 
                        href="https://learn.microsoft.com/en-us/users/bakrferas-9988/credentials/certification/azure-administrator?tab=credentials-tab" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: 'teal', textDecoration: 'underline', fontSize: '1.2rem', fontWeight: 'bold' }}
                    >
                             Azure Solutions Architect Expert(AZ-104)
                    </a>
                </div>
            </>
        ),
        
        logoSrc: az104
    },
    {
        title: 'AWS Certified Solutions Architect',
        company: 'Amazon',
        location: '',
        dates: 'Ongoing',
        description: (
            <>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <span 
                        style={{ color: 'white', textDecoration: 'Italic', fontSize: '1.0rem', fontWeight: 'bold' }}
                    >
                        Certificate Ongoing.
                    </span>
                </div>
            </>
        ),
        logoSrc: aws_sol
    },

    {
        title: 'Azure Fundamentals',
        company: 'Microsoft',
        location: '',
        dates: 'August 2024 - Present',
        description:
        <>
        <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <a 
                href="https://learn.microsoft.com/en-us/users/bakrferas-9988/credentials/certification/azure-fundamentals?tab=credentials-tab" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'teal', textDecoration: 'underline', fontSize: '1.2rem', fontWeight: 'bold' }}
            >
                     Azure Fundamentals(AZ-900)
            </a>
        </div>
    </>,
        logoSrc: az900
    },

]
