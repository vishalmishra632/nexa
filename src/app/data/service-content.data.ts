export interface ServiceContent {
    title: string;
    mainTitle: string;
    paragraphs: string[];
    qaTitle: string;
    qaContent: string;
    images: string[];
    qaImage: string;
}

export const SERVICE_CONTENT: { [key: string]: ServiceContent } = {
    'visual-design': {
        title: 'Visual Design',
        mainTitle: 'Visual Design Solutions',
        paragraphs: [
            `In today's digital landscape, visual design is more than just aesthetics—it's about creating meaningful user experiences that drive engagement and conversion. At Nexa Tech Services, we understand that exceptional visual design is the cornerstone of successful digital products. Our team of expert UI/UX designers combines creativity with strategic thinking to deliver interfaces that not only look stunning but also function intuitively.`,

            `Our visual design process begins with a deep understanding of your brand identity, target audience, and business objectives. We conduct thorough research to understand user behaviors, preferences, and pain points. This user-centric approach ensures that every design decision we make is backed by data and aligned with your business goals.`,

            `We specialize in creating responsive designs that provide seamless experiences across all devices and platforms. From wireframing and prototyping to final visual designs, we maintain a iterative process that incorporates your feedback at every stage. Our designers are proficient in the latest design tools and technologies, including Figma, Adobe XD, Sketch, and InVision, allowing us to create interactive prototypes that bring your vision to life.`
        ],
        qaTitle: 'User Experience Excellence',
        qaContent: `UX design is at the heart of everything we create. We believe that great user experiences are built on a foundation of research, empathy, and continuous improvement. Our UX designers employ various methodologies including user interviews, journey mapping, usability testing, and A/B testing to create experiences that users love. We focus on information architecture that makes sense, intuitive navigation patterns, accessibility compliance (WCAG standards), performance optimization, and cross-platform consistency.`,
        images: ['images/solutions-details/1.png', 'images/solutions-details/2.png'],
        qaImage: 'images/solutions-details/5.png'
    },

    'development': {
        title: 'Development',
        mainTitle: 'Comprehensive Development Solutions',
        paragraphs: [
            `At Nexa Tech Services, we transform innovative ideas into robust, scalable digital solutions. Our development team comprises seasoned professionals with expertise across multiple technology stacks, frameworks, and platforms. We follow agile methodologies to ensure rapid development cycles while maintaining the highest standards of code quality.`,

            `Our development process is built on industry best practices, including continuous integration/continuous deployment (CI/CD), test-driven development (TDD), and code reviews. We understand that every project is unique, which is why we tailor our approach to meet your specific requirements, timeline, and budget constraints.`,

            `We excel in full-stack web application development, Progressive Web Apps (PWAs), mobile application development (iOS and Android), enterprise software solutions, API development and integration, cloud-native applications, e-commerce platforms, and Content Management Systems (CMS).`
        ],
        qaTitle: 'Development Best Practices',
        qaContent: `We adhere to strict development standards to ensure scalable architecture design, clean and maintainable code, comprehensive documentation, security-first approach, performance optimization, regular code reviews, and automated testing. Our development team works closely with designers, QA engineers, and project managers to deliver solutions that exceed expectations. We believe in transparent communication and provide regular updates throughout the development lifecycle.`,
        images: ['images/solutions-details/1.png', 'images/solutions-details/2.png'],
        qaImage: 'images/solutions-details/5.png'
    },

    'qa-testing': {
        title: 'QA Testing',
        mainTitle: 'Comprehensive Quality Assurance',
        paragraphs: [
            `Quality is non-negotiable at Nexa Tech Services. Our QA testing services ensure that your software products meet the highest standards of functionality, performance, and security. We employ a comprehensive testing strategy that covers all aspects of software quality, from basic functionality to complex integration scenarios.`,

            `Our QA team consists of certified testing professionals who bring extensive experience across various domains and technologies. We utilize both manual and automated testing approaches to provide thorough coverage while optimizing testing efficiency.`,

            `Our testing services include functional testing, regression testing, performance and load testing, security testing and vulnerability assessment, mobile application testing, API testing, cross-browser compatibility testing, usability testing, accessibility testing, and automation framework development.`
        ],
        qaTitle: 'Quality Assurance Process',
        qaContent: `Our structured QA process includes test planning and strategy development, test case design and documentation, test environment setup, test execution and defect reporting, regression testing cycles, performance benchmarking, security vulnerability assessment, user acceptance testing support, test automation implementation, and continuous testing integration.`,
        images: ['images/solutions-details/1.png', 'images/solutions-details/2.png'],
        qaImage: 'images/solutions-details/5.png'
    },

    'it-management': {
        title: 'IT Management',
        mainTitle: 'Strategic IT Management',
        paragraphs: [
            `Effective IT management is crucial for business success in today's technology-driven world. Nexa Tech Services provides comprehensive IT management solutions that align your technology infrastructure with your business objectives. Our approach focuses on optimizing operations, reducing costs, and maximizing the value of your IT investments.`,

            `Our IT management services cover infrastructure management and optimization, network administration and security, server management and maintenance, cloud infrastructure management, IT asset management, help desk and technical support, disaster recovery planning, compliance and regulatory management, vendor management, and IT budget planning and optimization.`,

            `We implement industry best practices including ITIL framework adoption, Service Level Agreement (SLA) management, change management processes, incident and problem management, configuration management, capacity planning, and business continuity planning.`
        ],
        qaTitle: 'Proactive IT Management',
        qaContent: `Our proactive approach includes 24/7 monitoring and alerting, predictive maintenance, regular health checks and assessments, performance optimization, security patch management, backup and recovery testing, documentation and knowledge base maintenance, and regular reporting and analytics.`,
        images: ['images/solutions-details/1.png', 'images/solutions-details/2.png'],
        qaImage: 'images/solutions-details/5.png'
    },

    'cyber-security': {
        title: 'Cyber Security',
        mainTitle: 'Advanced Cyber Security Solutions',
        paragraphs: [
            `In an era of increasing cyber threats, protecting your digital assets is paramount. Nexa Tech Services offers comprehensive cyber security solutions designed to safeguard your business from evolving threats. Our security experts employ a multi-layered approach to create robust defense mechanisms that protect your data, applications, and infrastructure.`,

            `Our cyber security services include security assessment and auditing, vulnerability assessment and penetration testing, security architecture design, identity and access management, network security implementation, endpoint protection, data encryption and protection, security incident response, compliance management (GDPR, HIPAA, PCI-DSS), and security awareness training.`,

            `We utilize advanced security tools and technologies including next-generation firewalls, Intrusion Detection/Prevention Systems (IDS/IPS), Security Information and Event Management (SIEM), multi-factor authentication, advanced threat protection, Zero Trust security models, and cloud security solutions.`
        ],
        qaTitle: 'Security Best Practices',
        qaContent: `Our security approach includes regular security assessments, continuous monitoring and threat detection, incident response planning, security policy development, employee security training, compliance auditing, disaster recovery planning, and third-party risk management.`,
        images: ['images/solutions-details/1.png', 'images/solutions-details/2.png'],
        qaImage: 'images/solutions-details/5.png'
    },

    'system-support': {
        title: '24x7 System Support',
        mainTitle: 'Round-the-Clock Technical Support',
        paragraphs: [
            `Business operations don't stop, and neither do we. Our 24x7 system support ensures your IT infrastructure runs smoothly at all times. Our dedicated support team provides immediate assistance for critical issues, minimizing downtime and maintaining business continuity.`,

            `Our support services include 24/7 help desk support, remote troubleshooting, on-site support (when required), system monitoring and alerting, incident management, problem resolution, performance optimization, preventive maintenance, user support and training, and comprehensive documentation.`,

            `We provide different support levels with guaranteed response times: Critical issues - 15-minute response time, High priority - 1-hour response time, Medium priority - 4-hour response time, and Low priority - 24-hour response time.`
        ],
        qaTitle: 'Comprehensive Support Framework',
        qaContent: `Our support framework includes multi-channel support (phone, email, chat), ticketing system for issue tracking, SLA-based service delivery, regular service reviews, proactive monitoring and maintenance, emergency response procedures, escalation management, customer satisfaction surveys, and continuous improvement initiatives.`,
        images: ['images/solutions-details/1.png', 'images/solutions-details/2.png'],
        qaImage: 'images/solutions-details/5.png'
    }
};
