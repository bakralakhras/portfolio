import {
    PythonBadge,
    ReactBadge,
    TypescriptBadge,
    AWSBadge,
    TerraformBadge,
    DynamoDBBadge,
    AzureBadge,
    DockerBadge,
    IacBadge,
    JupyterBadge,
    AiBadge,
    DartBadge,
    FlutterBadge,
} from '../components/Projects/TechBadges'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'

export const projectData: ProjectT[] = [
    {
        name: 'Cloud Resume',
        id: 'cloudresume',
        type: 'AWS app',
        tagline: 'A cloud-powered resume built with AWS services.',
        tags: [<AWSBadge />, <TerraformBadge /> ,<ReactBadge/>,<DynamoDBBadge/>],
        imageSrc: '/cloud_resume.png',
        description:
            'A serverless resume website hosted on AWS, featuring a visitor counter powered by AWS Lambda, API Gateway, and DynamoDB. The project is deployed with S3 and CloudFront for global distribution, with automated CI/CD workflows using GitHub Actions.',
        links: [
            {
                link: 'https://github.com/bakralakhras/Aws_Cloud_Resume',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/Aws_Cloud_Resume',


    },
    {
        name: 'Azure CI/CD App',
        id: 'Azure app',
        type: 'Web app',
        tagline: 'A CI/CD pipeline for deploying containerized web apps on Azure.',
        tags: [
            <AzureBadge/>,
            <DockerBadge />,
            <ReactBadge />,
            <PythonBadge />,
        ],
        imageSrc: '/azure_webapp.png',
        description:
            'An automated CI/CD pipeline leveraging GitHub Actions to deploy a containerized Flask web application to Azure App Service. The project utilizes Docker for containerization, Azure Container Registry for storage, and monitors performance with Prometheus and Grafana.',
        links: [
            {
                link: 'https://github.com/bakralakhras/Azure-Docker-CI-CD-WebApp',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/Azure-Docker-CI-CD-WebApp',
    },
    {
        name: 'Terraform Scalable Solution',
        id: 'terraform-solution',
        type: 'IaC',
        tagline: 'A scalable cloud infrastructure deployment using Terraform.',
        tags: [<TerraformBadge />, <AWSBadge />, <AzureBadge /> ,<IacBadge/>],
        imageSrc: '/terraform_solution.jpg',
        description:
            "An infrastructure-as-code solution utilizing Terraform to provision and manage scalable cloud resources on Azure. The project ensures high availability, automated deployments, and security best practices, with modular configurations for efficient resource management.",
        links: [
            {
                link: 'https://github.com/bakralakhras/Terraform-Scalable-solution/tree/main',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/Terraform-Scalable-solution/tree/main',
    },

    {
        name: 'Monitor App',
        id: 'flask-monitor',
        type: 'Web app',
        tagline:
            'A real-time system monitoring web application.',
        tags: [<ReactBadge />, <TypescriptBadge />],
        imageSrc: '/monitor_app.jpg',
        description:
            'A Flask-based monitoring application that tracks system metrics such as CPU and memory usage in real-time. The project features interactive visualizations using Plotly and automated alerts for performance thresholds, ensuring proactive system management.',
        links: [
            {
                link: 'https://github.com/bakralakhras/Monitoring-App',
                icon: <FiGithub />,
            },
            {
                link: 'https://github.com/bakralakhras/Monitoring-App',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/Monitoring-App',
    },
    {
        name: 'BitCoin Prediction',
        id: 'bitcoin',
        type: 'AI',
        tagline:
            'An AI-powered Bitcoin price prediction model.',
        tags: [<PythonBadge />, <JupyterBadge/> , <AiBadge/>],
        imageSrc: '/bitcoin_prediction.jpg',
        description:
            'A machine learning model utilizing Python and libraries such as TensorFlow and Scikit-learn to analyze historical Bitcoin data and predict future prices. The project includes data preprocessing, feature engineering, and performance evaluation to enhance forecasting accuracy.',
        links: [
            {
                link: 'https://github.com/bakralakhras/AI-Bitcoin_Prediction',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/AI-Bitcoin_Prediction',
    },
    {
        name: 'Sentimental Analysis',
        id: 'nlp',
        type: 'AI',
        tagline: 'An AI-driven sentiment analysis application.',
        tags: [<PythonBadge />, <JupyterBadge />,<AiBadge/>],
        imageSrc: '/sentiment.jpg',
        description:
            "A sentiment analysis model built with Python, leveraging NLP techniques to analyze text data and classify sentiments as positive, negative, or neutral. The project utilizes libraries such as TensorFlow and NLTK, with a focus on data preprocessing, model training, and evaluation.",
        links: [
            {
                link: 'https://github.com/bakralakhras/AI-Sentimental-Analysis',
                icon: <FiGithub />,
            },
            {
                link: 'https://github.com/bakralakhras/AI-Sentimental-Analysis',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/AI-Sentimental-Analysis',
    },
    {
        name: 'WildRydes',
        id: 'aws-portfolio',
        type: 'Website',
        tagline: 'A serverless web application powered by AWS',
        tags: [<AWSBadge/>, <ReactBadge />],
        imageSrc: '/aws_web.jpg',
        description:
            'A fully serverless web application built on AWS, featuring user authentication with Amazon Cognito, backend processing with AWS Lambda, and data storage using DynamoDB. The project integrates various AWS services to provide scalability, security, and efficient resource management.',
        links: [
            {
                link: 'https://github.com/bakralakhras/wildrydes-site',
                icon: <FiLink />,
            },
        ],
    },
    {
        name: 'MuslimPal',
        id: 'muslim-pal',
        type: 'Web app',
        tagline: 'An Islamic lifestyle companion app.',
        tags: [
            <DartBadge />,
            <FlutterBadge />,
        ],
        imageSrc: '/mosque_icon.jpg',
        description:
            'A web application designed to assist Muslims in daily religious practices by providing features such as prayer time notifications, Quranic verses, and Islamic event tracking. Built using Python and Flask, with a user-friendly interface and integration of APIs for real-time updates.',
        links: [
            {
                link: 'https://github.com/bakralakhras/Muslim_pal',
                icon: <FiGithub />,
            },
            {
                link: 'https://github.com/bakralakhras/Muslim_pal',
                icon: <FiLink />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/Muslim_pal',
    },
      
   

]
