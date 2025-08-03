import { CertificateData } from './types'
import az104 from '../media/az_104.png'
import az900 from '../media/az900.png'
import aws_sol from '../media/aws_solutions.png'

export const certificateData: CertificateData[] = [
  {
    title: 'Azure Administrator Associate (AZ-104)',
    company: 'Microsoft',
    location: '',
    dates: 'December 2024',
    description: (
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <a
          href="https://learn.microsoft.com/en-us/users/bakrferas-9988/credentials/certification/azure-administrator?tab=credentials-tab"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'teal',
            textDecoration: 'underline',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          View Credential
        </a>
      </div>
    ),
    logoSrc: az104
  },
  {
    title: 'AWS Certified Solutions Architect (SAA-C03)',
    company: 'Amazon',
    location: '',
    dates: 'In Progress',
    description: (
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <span
          style={{
            color: 'white',
            fontStyle: 'italic',
            fontSize: '1.0rem',
            fontWeight: 'bold'
          }}
        >
          Studying for certification
        </span>
      </div>
    ),
    logoSrc: aws_sol
  },
  {
    title: 'Azure Fundamentals (AZ-900)',
    company: 'Microsoft',
    location: '',
    dates: 'August 2024',
    description: (
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <a
          href="https://learn.microsoft.com/en-us/users/bakrferas-9988/credentials/certification/azure-fundamentals?tab=credentials-tab"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: 'teal',
            textDecoration: 'underline',
            fontSize: '1.1rem',
            fontWeight: 'bold'
          }}
        >
          View Credential
        </a>
      </div>
    ),
    logoSrc: az900
  }
]
