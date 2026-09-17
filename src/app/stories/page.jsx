import Title from '@/components/Title';
import React from 'react';
import { DeveloperCard } from '@/components/DeveloperCard';

const Stories = () => {

    const developers = [
        {
            "id": 1,
            "name": "Rahim Ahmed",
            "designation": "Senior Full Stack Developer",
            "company": "TechVerse Solutions",
            "experience": "6 years",
            "image": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "PostgreSQL",
            "Docker"
            ],
            "story": "Rahim started his career as a self-taught web developer working on small freelance projects. Over the years, he mastered modern JavaScript ecosystems and transitioned into full-stack architecture. He led the migration of a legacy monolithic system into microservices for a major fintech client. Passionate about open source, Rahim frequently contributes to community libraries and mentors junior developers. He believes clean code and static typing are essential for scalable software.Rahim started his career as a self-taught web developer working on small freelance projects. Over the years, he mastered modern JavaScript ecosystems and transitioned into full-stack architecture. He led the migration of a legacy monolithic system into microservices for a major fintech client. Passionate about open source, Rahim frequently contributes to community libraries and mentors junior developers. He believes clean code and static typing are essential for scalable software.Rahim started his career as a self-taught web developer working on small freelance projects. Over the years, he mastered modern JavaScript ecosystems and transitioned into full-stack architecture. He led the migration of a legacy monolithic system into microservices for a major fintech client. Passionate about open source, Rahim frequently contributes to community libraries and mentors junior developers. He believes clean code and static typing are essential for scalable software.Rahim started his career as a self-taught web developer working on small freelance projects. Over the years, he mastered modern JavaScript ecosystems and transitioned into full-stack architecture. He led the migration of a legacy monolithic system into microservices for a major fintech client. Passionate about open source, Rahim frequently contributes to community libraries and mentors junior developers. He believes clean code and static typing are essential for scalable software."
        },
        {
            "id": 2,
            "name": "Nusrat Jahan",
            "designation": "Lead Frontend Engineer",
            "company": "InnoSoft Global",
            "experience": "8 years",
            "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "TypeScript",
            "Next.js",
            "Vue.js",
            "Tailwind CSS",
            "Redux Toolkit",
            "GraphQL"
            ],
            "story": "Nusrat began her journey designing UI components for early-stage startups in Dhaka. Her deep understanding of design systems and web performance helped startups scale smoothly. At InnoSoft, she currently manages a team of 10 frontend developers building enterprise dashboards. She advocates strongly for web accessibility (a11y) and automated UI testing. In her free time, Nusrat speaks at local tech meetups about modern CSS and React performance optimization."
        },
        {
            "id": 3,
            "name": "Tanvir Hasan",
            "designation": "Backend Software Engineer",
            "company": "CloudScale Systems",
            "experience": "4 years",
            "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "Node.js",
            "TypeScript",
            "Express",
            "MongoDB",
            "Redis",
            "AWS"
            ],
            "story": "Tanvir developed a fascination for database optimization and cloud scalability during his university days. He started building high-concurrency RESTful APIs for e-commerce platforms. At CloudScale, he architected a real-time notification engine processing millions of daily webhooks. Tanvir enjoys solving complex server-side bottlenecks and caching challenges. He is currently focused on learning Go and Kubernetes to expand his cloud-native skillset."
        },
        {
            "id": 4,
            "name": "Sultana Parvin",
            "designation": "UI/UX Engineer",
            "company": "CreativeMind Studio",
            "experience": "5 years",
            "image": "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "TypeScript",
            "React",
            "Figma",
            "Design Systems",
            "Storybook",
            "Sass"
            ],
            "story": "Sultana bridges the gap between creative visual design and bulletproof technical frontend code. She started as a graphic designer before discovering her passion for interactive web interfaces. She created an enterprise design system used across 12 different client applications. Her focus is always on user-centered interactions, smooth micro-animations, and responsive design. She loves conducting usability research and translating insights into clean React components."
        },
        {
            "id": 5,
            "name": "Mahmudul Karim",
            "designation": "DevOps & Cloud Engineer",
            "company": "DataBridge Analytics",
            "experience": "7 years",
            "image": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "Python",
            "TypeScript",
            "Docker",
            "Kubernetes",
            "Terraform",
            "CI/CD"
            ],
            "story": "Mahmudul started his tech career in system administration before pivoting to DevOps and Infrastructure as Code. He specialized in building automated deployment pipelines and maintaining high-availability cloud infrastructures. At DataBridge, he reduced cloud infrastructure costs by 35% through container orchestration optimization. Mahmudul is a strong proponent of infrastructure automation using TypeScript with AWS CDK. He spends his weekends experimenting with home lab servers and automation scripts."
        },
        {
            "id": 6,
            "name": "Anika Tabassum",
            "designation": "Mobile Application Developer",
            "company": "Appify Technologies",
            "experience": "3 years",
            "image": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "React Native",
            "TypeScript",
            "Redux",
            "Firebase",
            "REST APIs",
            "Jest"
            ],
            "story": "Anika discovered mobile application development during a university hackathon where her team won first place. She specializes in building cross-platform mobile apps for iOS and Android using React Native. At Appify, she built a healthcare consultation app downloaded by over 500,000 users. Anika pays meticulous attention to app startup times and offline-first data synchronization. She aspires to publish her own open-source React Native UI kit."
        },
        {
            "id": 7,
            "name": "Fahim Shahriar",
            "designation": "Full Stack Engineer",
            "company": "Nexus Web Labs",
            "experience": "5 years",
            "image": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "TypeScript",
            "NestJS",
            "React",
            "Prisma",
            "PostgreSQL",
            "GraphQL"
            ],
            "story": "Fahim is an engineer who thrives in fast-paced startup environments where rapid iteration is crucial. He built scalable SaaS platforms from scratch, handling everything from database schemas to UI components. His adoption of TypeScript across both frontend and backend drastically reduced production runtime bugs. Fahim actively conducts code reviews and promotes strict linting standards within his organization. Outside of coding, he loves playing chess and writing technical blogs."
        },
        {
            "id": 8,
            "name": "Farzana Yasmin",
            "designation": "Data & Frontend Developer",
            "company": "Insightful Data Tech",
            "experience": "4 years",
            "image": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "TypeScript",
            "D3.js",
            "React",
            "Python",
            "Tailwind CSS",
            "Chart.js"
            ],
            "story": "Farzana transforms complex data streams into intuitive, interactive visual dashboards. She holds a degree in Computer Science with a strong background in statistics and data visualization. At Insightful Data Tech, she crafts real-time analytics portals for financial institutions. Farzana excels at optimizing heavy client-side charts to maintain 60 FPS performance. She enjoys working at the intersection of data science and web frontend development."
        },
        {
            "id": 9,
            "name": "Sajid Islam",
            "designation": "Software Security & QA Engineer",
            "company": "CyberShield Solutions",
            "experience": "6 years",
            "image": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "TypeScript",
            "Cypress",
            "Playwright",
            "Jest",
            "OWASP",
            "Node.js"
            ],
            "story": "Sajid ensures application security and quality through rigorous automated end-to-end testing frameworks. He previously worked as a web developer before specializing in software quality assurance and security audits. At CyberShield, he built a custom CI/CD testing pipeline that reduced manual QA testing time by 70%. Sajid frequently conducts vulnerability assessments for web applications. He advocates for shift-left security practices early in the software development lifecycle."
        },
        {
            "id": 10,
            "name": "Ayesha Siddiqua",
            "designation": "Principal Software Architect",
            "company": "NextGen Software",
            "experience": "10 years",
            "image": "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=600",
            "skills": [
            "TypeScript",
            "System Design",
            "Node.js",
            "Microservices",
            "Kafka",
            "AWS"
            ],
            "story": "Ayesha brings a decade of hands-on software development and architectural leadership experience. She has guided enterprise software transformations and mentored dozens of junior and mid-level engineers. At NextGen, she oversees technical architecture for high-throughput distributed applications. Ayesha was an early adopter of TypeScript in 2017, pioneering its adoption across her entire company. She is a respected speaker at international tech conferences on domain-driven design."
        }
    ]


    return (
        <div>
            <Title>this text is from stories route </Title>
            {
                // developers.map(developer => <li key={developer.id} >{developer.name}</li>)
                developers.map(developer =>  <DeveloperCard  key={developer.id} developer={developer}> </DeveloperCard>)
            }
        </div>
    );
};

export default Stories;