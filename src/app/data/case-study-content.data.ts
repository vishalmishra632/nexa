export interface CaseStudyContent {
    title: string;
    mainTitle: string;
    industry: string;
    techStack: string[];
    requirement: string;
    paragraphs: string[];
    additionalTitle: string;
    additionalContent: string;
    image: string;
    additionalImage: string;
}

export const CASE_STUDY_CONTENT: { [key: string]: CaseStudyContent } = {
    'mainframe-db2-specialist': {
        title: 'Banking Database Performance Optimization',
        mainTitle: 'Enterprise DB2 Performance Optimization for Major Bank',
        industry: 'Banking',
        techStack: ['IBM DB2', 'z/OS', 'COBOL', 'IBM OMEGAMON', 'JCL'],
        requirement: 'A major banking institution needed to optimize their DB2 database performance to handle increased transaction volumes and reduce system latency during peak hours.',
        paragraphs: [
            `We delivered a comprehensive DB2 performance optimization project for a leading banking institution experiencing significant challenges with their transaction processing systems. The bank's mission-critical applications were suffering from performance bottlenecks, particularly during peak transaction hours, affecting customer experience and operational efficiency.`,

            `Our team conducted an in-depth analysis of the existing DB2 subsystems and implemented a multi-faceted optimization strategy. We redesigned buffer pool configurations, optimized critical SQL queries, and restructured table spaces for better data distribution. We also implemented automated monitoring scripts and established new database maintenance procedures.`,

            `The project resulted in a 40% improvement in transaction processing speed and a 60% reduction in system downtime. We successfully implemented an enhanced disaster recovery plan that exceeded industry standards, ensuring business continuity. The optimizations also prepared the system for future scalability, saving the client an estimated $200,000 in infrastructure costs.`
        ],
        additionalTitle: 'Technical Achievements',
        additionalContent: `This project showcased our expertise in mainframe database optimization. We leveraged IBM OMEGAMON for performance monitoring, implemented automated health checks, and developed custom REORG utilities. The solution included advanced buffer pool tuning, SQL query optimization, and implementation of data compression techniques that reduced storage costs by 30%. Our team also established comprehensive documentation and knowledge transfer sessions for the client's technical team.`,
        image: 'images/case-details/1.jpg',
        additionalImage: 'images/solutions-details/5.png'
    },

    'mainframe-zos-engineer': {
        title: 'Healthcare Systems Modernization',
        mainTitle: 'z/OS Infrastructure Transformation for Healthcare Provider',
        industry: 'Healthcare',
        techStack: ['z/OS', 'CICS', 'IMS', 'RACF', 'CA OPS/MVS', 'SMP/E'],
        requirement: 'A healthcare provider needed to modernize their z/OS infrastructure to improve patient data processing efficiency while ensuring HIPAA compliance and zero downtime.',
        paragraphs: [
            `We successfully executed a comprehensive z/OS modernization project for a major healthcare provider. The project involved upgrading their mainframe infrastructure while maintaining continuous availability of critical healthcare services. Our solution addressed system performance issues, enhanced security protocols, and improved overall operational efficiency.`,

            `Our team implemented a phased upgrade approach that included z/OS version upgrades, CICS modernization, and enhanced security implementations. We introduced automated monitoring tools and established new backup and recovery procedures. The project also included integration with modern cloud-based healthcare applications while maintaining the robustness of the mainframe systems.`,

            `The modernization effort resulted in a 35% improvement in processing speeds and 99.9% system availability. We reduced the disaster recovery time from 48 hours to just 4 hours and implemented advanced security measures including multi-factor authentication and encryption protocols for patient data protection.`
        ],
        additionalTitle: 'Healthcare Compliance & Security',
        additionalContent: `This project demonstrated our expertise in healthcare IT compliance and security. We implemented RACF security enhancements, developed automated compliance reporting tools, and established real-time monitoring for unauthorized access attempts. The solution included integration with EPIC and Cerner systems, ensuring seamless data flow between legacy and modern applications. Our team also provided comprehensive training on security best practices and developed detailed documentation for ongoing maintenance.`,
        image: 'images/case-details/1.jpg',
        additionalImage: 'images/solutions-details/5.png'
    },

    'mainframe-developer': {
        title: 'Legacy Banking Application Modernization',
        mainTitle: 'COBOL Application Modernization for Digital Banking',
        industry: 'Finance and Banking',
        techStack: ['COBOL', 'CICS', 'JCL', 'DB2', 'REST APIs', 'Java', 'MQ Series'],
        requirement: 'A financial institution sought to modernize their legacy COBOL applications to support digital banking initiatives while maintaining the reliability of core banking functions.',
        paragraphs: [
            `We delivered a comprehensive mainframe application modernization project for a leading financial institution. The project involved transforming legacy COBOL applications to support modern digital banking services. Our solution enabled mobile and web banking integration while preserving the stability and security of core banking operations.`,

            `Our team implemented a hybrid approach, refactoring critical COBOL modules and creating API layers for external system integration. We introduced modern DevOps practices to the mainframe environment, including automated testing and continuous integration pipelines. The project included optimization of batch processing operations and implementation of real-time transaction capabilities.`,

            `The modernization project achieved a 70% reduction in code maintenance time and a 50% improvement in batch processing speeds. We successfully enabled digital banking services integration, allowing customers to access core banking functions through modern channels while maintaining the reliability of the mainframe systems.`
        ],
        additionalTitle: 'Innovation in Legacy Systems',
        additionalContent: `This project showcased our ability to bridge legacy and modern technologies. We developed RESTful APIs using Java to expose mainframe services, implemented MQ Series for asynchronous communication, and established a microservices architecture that coexisted with the mainframe. Our team also introduced automated testing frameworks for COBOL applications and implemented CI/CD pipelines that included mainframe deployments. The solution provided a roadmap for continued modernization while protecting existing investments.`,
        image: 'images/case-details/1.jpg',
        additionalImage: 'images/solutions-details/5.png'
    },

    'senior-java-developer': {
        title: 'Financial Services Digital Transformation',
        mainTitle: 'Microservices Architecture Implementation for Banking',
        industry: 'Finance',
        techStack: ['Java', 'Spring Boot', 'Spring Cloud', 'Docker', 'Kubernetes', 'PostgreSQL', 'Redis', 'RabbitMQ'],
        requirement: 'A financial institution required a complete digital transformation of their customer-facing applications, migrating from monolithic architecture to microservices for improved scalability and performance.',
        paragraphs: [
            `We led a comprehensive digital transformation project for a major financial institution, architecting and implementing a modern microservices-based platform. The project involved decomposing monolithic applications into scalable microservices, implementing cloud-native patterns, and establishing robust DevOps practices.`,

            `Our team designed and developed over 30 microservices using Spring Boot and Spring Cloud, implementing patterns such as circuit breakers, service discovery, and API gateways. We containerized applications using Docker and orchestrated them with Kubernetes, ensuring high availability and scalability. The project included implementation of event-driven architecture using RabbitMQ for asynchronous communication.`,

            `The transformation resulted in a 60% reduction in system latency and significantly improved application scalability. We achieved deployment frequency improvements from monthly to daily releases and reduced time-to-market for new features by 75%. The new architecture supports handling 10x more concurrent users with improved reliability.`
        ],
        additionalTitle: 'Cloud-Native Excellence',
        additionalContent: `This project demonstrated our expertise in modern software architecture. We implemented comprehensive monitoring using Prometheus and Grafana, established distributed tracing with Jaeger, and developed automated security scanning in CI/CD pipelines. Our team also created a complete suite of automated tests, achieving over 90% code coverage. The solution included implementation of OAuth 2.0 and OpenID Connect for secure authentication and authorization across microservices.`,
        image: 'images/case-details/1.jpg',
        additionalImage: 'images/solutions-details/5.png'
    },

    'java-aws-developer': {
        title: 'Cloud Migration & Serverless Architecture',
        mainTitle: 'AWS Cloud Migration for Banking Platform',
        industry: 'Banking',
        techStack: ['Java', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'S3', 'CloudFormation', 'Terraform', 'ElastiCache'],
        requirement: 'A banking institution needed to migrate their on-premise Java applications to AWS cloud, implementing serverless architecture for better scalability and cost optimization.',
        paragraphs: [
            `We executed a large-scale cloud migration project for a banking platform, transforming traditional Java applications into serverless architectures on AWS. The project involved re-architecting monolithic applications into microservices and leveraging AWS managed services for optimal performance and cost efficiency.`,

            `Our team implemented serverless functions using AWS Lambda, designed scalable data storage solutions with DynamoDB, and created robust API management using API Gateway. We established infrastructure as code using CloudFormation and Terraform, enabling consistent and repeatable deployments. The solution included implementation of caching strategies using ElastiCache and event-driven architectures using SNS and SQS.`,

            `The migration achieved a 25% reduction in infrastructure costs and a 40% improvement in application response times. We implemented auto-scaling capabilities that dynamically adjust to transaction volumes, resulting in optimal resource utilization. The project also enhanced security posture with AWS WAF and Shield implementations.`
        ],
        additionalTitle: 'Cost Optimization & Performance',
        additionalContent: `This project showcased our expertise in AWS cloud optimization. We implemented advanced cost monitoring using AWS Cost Explorer, established automated backup strategies using AWS Backup, and developed custom CloudWatch dashboards for comprehensive monitoring. Our team also implemented multi-region disaster recovery, achieving an RPO of less than 5 minutes. The solution included comprehensive security implementations following AWS Well-Architected Framework principles.`,
        image: 'images/case-details/1.jpg',
        additionalImage: 'images/solutions-details/5.png'
    },

    'sap-hcm-consultant': {
        title: 'Enterprise Payroll System Implementation',
        mainTitle: 'SAP HCM Payroll Transformation for Financial Institution',
        industry: 'Banking',
        techStack: ['SAP HCM', 'SAP Payroll', 'SuccessFactors', 'ABAP', 'SAP PI/PO', 'Fiori'],
        requirement: 'A multinational bank required a complete overhaul of their payroll system to handle complex compensation structures across multiple regions while ensuring compliance with various regulatory requirements.',
        paragraphs: [
            `We delivered a comprehensive SAP HCM payroll transformation project for a multinational banking institution. The project involved implementing a centralized payroll system capable of handling complex compensation scenarios across multiple business units and geographical regions, while ensuring compliance with various regulatory requirements.`,

            `Our team redesigned payroll schemas, implemented custom wage types, and developed automated validation rules. We established seamless integration between SAP HCM and SuccessFactors, ensuring real-time data synchronization. The project included development of custom Fiori applications for employee self-service and manager approvals, significantly improving user experience.`,

            `The implementation resulted in a 40% reduction in payroll processing time and achieved 99.9% accuracy in payroll calculations. We successfully automated year-end processing, eliminating manual interventions and ensuring timely tax document generation. The solution also included comprehensive audit trails and reporting capabilities for regulatory compliance.`
        ],
        additionalTitle: 'Regulatory Compliance & Automation',
        additionalContent: `This project demonstrated our expertise in complex payroll implementations. We developed automated reconciliation processes, implemented sophisticated tax calculation engines, and created custom reports for regulatory submissions. Our team also established real-time monitoring dashboards for payroll operations and developed comprehensive documentation for ongoing maintenance. The solution included multi-currency and multi-language support, facilitating global operations.`,
        image: 'images/case-details/1.jpg',
        additionalImage: 'images/solutions-details/5.png'
    }
};
