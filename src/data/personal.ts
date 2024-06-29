import type { Link } from './site-config';

type WorkExperience = {
    role: string;
    description: string;
    location: string;
    startedAt: string;
    finishedAt: string;
};
type Education = {
    title: string;
    description: string;
    startedAt: string;
    finishedAt: string;
};
type Language = { language: string; level: string };
type Skill = { section: string; tags: string[] };
type PersonalData = {
    name: string;
    role: string;
    excerpt: string;
    contacts: Link[];
    socialLinks: Link[];
    workExperience: WorkExperience[];
    education: Education[];
    languages: Language[];
    skills: Skill[];
};

const personalData: PersonalData = {
    name: 'Gustavo Dantas',
    role: 'Software developer',
    excerpt:
        "Problem solver. Philosophy enthusiast. Constantly improving in calisthenics. I like to learn and build in public. I enjoy writing about what I'm learning/doing on social media and especially on my blog",
    contacts: [
        {
            text: 'Email',
            href: 'gusdantas15@gmail.com'
        }
    ],
    socialLinks: [
        {
            text: 'about me',
            href: 'https://dantas15.com/about'
        },
        {
            text: 'github',
            href: 'https://github.com/dantas15'
        },
        {
            text: 'linkedin',
            href: 'https://www.linkedin.com/in/dantas15/'
        },
        {
            text: 'twitter/X',
            href: 'https://twitter.com/gusdantas'
        }
    ],
    workExperience: [
        {
            role: 'Quality Manager at Comp Júnior',
            description:
                "I continued what captivated me from the previous position, working on more automated and optimized ways to improve the quality of the company's software, as well as reinforcing the internal culture of code review and internal documentation. Among the ways to improve quality, I worked on bringing CI/CD tools into the context of our applications, mainly involving GitHub Actions and Docker. Additionally, I also focus on content for future members, the biggest example being the refactoring of Comp Júnior's public digital library, Athena, where I played a fundamental role both operationally and in content for the Infrastructure track.",
            location: 'Lavras, Minas Gerais, Brazil',
            startedAt: '2024-01',
            finishedAt: '2024-06'
        },
        {
            role: 'Project Director at Comp Júnior',
            description:
                'I was mainly responsible for the strategic planning of the projects sector, identifying the feasibility of new projects and bringing new technologies into Comp Júnior through training and documentation. I structured a technical documentation and internal management platform for the projects sector. Additionally, I organized the squads for project development while reinforcing the quality of deliveries, mainly through Code Review. I was also responsible for ensuring the end-to-end functionality of broadcasts and the website for CompWeek 2023-2, a 100% online and free IT event organized entirely by Comp Júnior.',
            location: 'Lavras, Minas Gerais, Brazil',
            startedAt: '2023-08',
            finishedAt: '2023-12'
        },
        {
            role: 'Full Stack Developer at Comp Júnior',
            description: 'I worked as a full-stack developer, contributing to ongoing projects for clients.',
            location: 'Lavras, Minas Gerais, Brazil',
            startedAt: '2023-07',
            finishedAt: '2023-08'
        },
        {
            role: 'IT Technician at Infoluck Sistemas',
            description:
                'I was responsible for structuring the migration of a legacy system in Delphi to the web. I played a crucial role in selecting technologies for the web system, especially on the front-end. I worked with TypeScript, React.js, MantineUI as a component library, React Context, Zod for validation, and TanStack Query for API requests, mainly the internal PHP API. It was my first practical experience after completing my technical course, and I felt that I was able to apply many theoretical concepts from there, such as design patterns, database modeling, state management with React Context, and web development in general.',
            location: 'Amparo, São Paulo, Brazil',
            startedAt: '2022-01',
            finishedAt: '2022-12'
        }
    ],
    education: [
        {
            title: "Bachelor's Degree in Computer Science",
            description: 'Studied various topics including software development and design patterns.',
            startedAt: '2022-10',
            finishedAt: '2026-12'
        },
        {
            title: 'Technical Course in System Development',
            description: 'Studied software development, MySQL, and various other competencies.',
            startedAt: '2019-01',
            finishedAt: '2021-12'
        }
    ],
    languages: [
        {
            language: 'Portuguese',
            level: 'Native'
        },
        {
            language: 'English',
            level: 'Advanced'
        }
    ],
    skills: [
        {
            section: 'Software Development',
            tags: [
                'JavaScript',
                'Typescript',
                'React.js',
                'Node.js',
                'Docker',
                'Docker-compose',
                'Next.js',
                'API REST',
                'GraphQL',
                'Relay',
                'Koa.js',
                'Nest.js',
                'MongoDB',
                'Mongoose',
                'SQL',
                'PostgreSQL',
                'SQLite',
                'PHP',
                'Laravel',
                'HTML/CSS'
            ]
        },
        {
            section: 'Tools and platforms',
            tags: ['VSCode', 'Vim', 'Git', 'GitHub', 'Google Cloud Platform']
        },
        {
            section: 'Interests',
            tags: ['Software architecture', 'Philosophy', 'Developer experience', 'DevOps']
        }
    ]
};

export { personalData };
