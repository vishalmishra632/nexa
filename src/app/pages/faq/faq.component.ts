import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-faq',
    imports: [NgFor, NgClass, TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './faq.component.html',
    styleUrl: './faq.component.scss'
})
export class FaqComponent {

    // Accordion
    accordionItems = [
        {
            title: 'What makes Nexa different from other IT consulting firms?',
            content: `With nearly a decade of experience, Nexa stands out through our unique combination of proven expertise, tailored solutions, and comprehensive knowledge transfer. We don't just implement solutions – we ensure your team is empowered to maintain and expand them. Our focus on delivering measurable results while providing continuous support sets us apart.`,
            open: false
        },
        {
            title: 'What technologies and platforms do you specialize in?',
            content: `We specialize in mainframe modernization, cloud migration (AWS, Azure), Java development frameworks (Spring Boot, Microservices), SAP solutions, and enterprise systems. Our expertise spans legacy system transformation, DevOps implementations, cybersecurity, and 24x7 system support across multiple platforms.`,
            open: false
        },
        {
            title: 'How do you ensure project success?',
            content: `Our success is built on a structured approach: thorough assessment, phased implementation, continuous communication, and comprehensive documentation. We utilize industry best practices, maintain transparent project tracking, and provide detailed knowledge transfer to ensure long-term success. Our clients typically see 30-70% improvement in system performance and operational efficiency.`,
            open: false
        },
        {
            title: 'What industries do you primarily serve?',
            content: `We serve diverse industries including banking, financial services, healthcare, insurance, and manufacturing. Our specialized experience in sectors with complex regulatory requirements and legacy systems enables us to deliver solutions that meet industry-specific challenges while ensuring compliance and security.`,
            open: false
        },
        {
            title: 'Do you offer ongoing support after project completion?',
            content: `Yes, we provide comprehensive post-implementation support including 24x7 system monitoring, maintenance services, technical support, and regular system health checks. Our support packages can be customized to meet your specific needs, ensuring continuous optimal performance of your IT infrastructure.`,
            open: false
        },
        {
            title: 'What is your approach to legacy system modernization?',
            content: `We follow a strategic approach that includes comprehensive assessment, risk analysis, phased migration planning, and careful execution. Our methodology ensures minimal disruption to your business operations while preserving critical functionality. We focus on incremental modernization to reduce risk and deliver immediate value.`,
            open: false
        },
        {
            title: 'How long does a typical project take?',
            content: `Project timelines vary based on scope and complexity. Simple implementations may take 2-3 months, while comprehensive transformations can span 6-12 months. We provide detailed project timelines during our assessment phase and maintain flexibility to adapt to your business needs and constraints.`,
            open: false
        },
        {
            title: 'Do you provide training for our internal teams?',
            content: `Absolutely. Knowledge transfer is a core component of our service. We provide comprehensive training programs, detailed documentation, workshops, and hands-on sessions to ensure your team can effectively manage and maintain the implemented solutions. Our goal is to make your team self-sufficient.`,
            open: false
        }
    ];
    selectedItem: any = null;
    toggleAccordionItem(item: any) {
        item.open = !item.open;
        if (this.selectedItem && this.selectedItem !== item) {
            this.selectedItem.open = false;
        }
        this.selectedItem = item;
    }

}
