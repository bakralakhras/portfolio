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
    LookerBiBadge,
    GCPBadge,
} from '../components/Projects/TechBadges'
import { FiGithub, FiLink } from 'react-icons/fi'
import { ProjectT } from './types'



export const projectData: ProjectT[] = [
     {
    name: 'Capstone Project - Customer Segmentation',
    id: 'Customer Segmentation',
    type: 'Data App',
    tagline: 'ML-powered customer segmentation pipeline with Streamlit, Azure SQL, and Looker BI.',
    tags: [
        <PythonBadge />,
        <LookerBiBadge />, 
        <GCPBadge />,
        <AzureBadge />,  
        <AiBadge />,
    ],
    imageSrc: './capstone_2.jpg', 
    description:
        'A modular data pipeline for clustering and enriching customer data using Python, Streamlit, and Azure SQL. Includes auto-cleaning, silhouette-optimized KMeans clustering, normalization, and seamless upload to Azure SQL for Looker dashboards hosted on GCP. Designed for marketing teams and BI workflows.',
    links: [
        {
            link: 'https://github.com/bakralakhras/Capstone_2',
            icon: <FiGithub />,
        },
    ],
    headerLink: 'https://github.com/bakralakhras/Capstone_2',
},
    {
        name: 'SentinelAI-Native',
        id: 'AI-Remedy',
        type: 'AIOps',
        tagline: 'Autonomous Cloud Incident Response Engine — Powered by AI, Built for Scale.',
        tags: [
            <AzureBadge/>,
            <DockerBadge />,
            <AiBadge />,
            <PythonBadge />,
        ],
        imageSrc: './system.jpg',
        description:
            'SentinelAI is an autonomous cloud incident responder that detects, analyzes, and resolves infrastructure issues in real time. Built with FastAPI, Prometheus, and Cohere integration, it triggers self-healing scripts and Slack alerts on demand. Designed for scalability with Docker, Terraform, and Azure AKS, it brings intelligent automation to modern DevOps workflows.',
        links: [
            {
                link: 'https://github.com/bakralakhras/SentinelAI-Native',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/Azure-Docker-CI-CD-WebApp',
    },
    {
        name: 'Cloud Resume',
        id: './cloudresume.png',
        type: 'AWS app',
        tagline: 'A cloud-powered resume built with AWS services.',
        tags: [<AWSBadge />, <TerraformBadge /> ,<ReactBadge/>,<DynamoDBBadge/>, <ReactBadge/>],
        imageSrc: './cloud_resume.png',
        description:
            'A serverless resume website hosted on AWS, featuring a visitor counter powered by AWS Lambda, API Gateway, and DynamoDB. The project is deployed with S3 and CloudFront for global distribution, with automated CI/CD workflows using GitHub Actions.',
        links: [
            {
                link: 'https://github.com/bakralakhras/portfolio',
                icon: <FiGithub />,
            },
        ],
        headerLink: 'https://github.com/bakralakhras/portfolio',


    },
    {
    name: 'Asteroid Game',
    id: 'asteroid-shooter',
    type: 'Game Dev',
    tagline: 'A classic asteroid shooter built with Python and Pygame.',
    tags: [
        <PythonBadge />,
        <AiBadge />, 
    ],
    imageSrc: '/asteroid_thumb.jpg',
    description:
        'A real-time asteroid shooter game built using Python and Pygame. Includes WASD controls, shooting mechanics, object collisions, and modular game design. Developed using OOP principles with plans to expand gameplay features.',
    links: [
        {
            link: 'https://github.com/bakralakhras/Aestroid_game',
            icon: <FiGithub />,
        },
    ],
    headerLink: 'https://github.com/bakralakhras/Aestroid_game',
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
        imageSrc: './azure_webapp.png',
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
        imageSrc: './terraform_solution.jpg',
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
        imageSrc: './monitor_app.jpg',
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
        imageSrc: './bitcoin_prediction.jpg',
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
        imageSrc: './sentiment.jpg',
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
        imageSrc: './aws_web.jpg',
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
        imageSrc: './mosque_icon.jpg',
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
