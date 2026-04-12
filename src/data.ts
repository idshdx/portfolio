export const personalInfo = {
  name: "Andrei Botez",
  location: "Romania",
  email: "andrei@straja.org",
  github: "https://github.com/idshdx",
  linkedin: "https://www.linkedin.com/in/andrewww-botez",
  website: "https://shady.straja.org",
  cv_pdf: "cv.pdf",
  cv_latex: "cv-latex.zip",
};

export interface WorkExperience {
  company: string;
  location: string;
  position: string;
  period: string;
  summary?: string;
  achievements: string[];
  tools?: string[];
}

export const workExperience = [
  {
    "company": "Cognizant",
    "location": "remote, Romania",
    "position": "Fullstack Software Developer",
    "summary": "Contractor in the life sciences sector for an industry leader, to address project deviations in a GMP/GLP-regulated computerized software system dealing with the problem of data security",
    "achievements": [
      "Led backend migration from Express.js to NestJS (Node.js/Azure), driving improved scalability and maintainability",
      "Modernized the Electron client: replacing a legacy VueJS design system with a newer UI framework and moved the build system from Webpack to Vite, optimizing performance and developer productivity",
      "Upgraded deprecated software dependencies and libraries to current versions, significantly enhancing security posture and maintainability",
      "Migrated CI/CD pipelines and source control from Azure Pipelines and Azure Repos to GitHub Actions and GitHub Repositories,  streamlining deployment workflows",
      "Documented Azure Cloud project resources ending with multiple decommissions, reducing monthly use cost by thousands of dollars"
    ],
    "tools": ["Express.js", "NestJS", "Node.js", "TypeScript", "Electron", "Vue.js", "Vite", "Webpack", "Azure", "Microsoft AD", "GitHub Actions", "PostgreSQL", "Redis", "Docker"],
    "period": "2023 - 2024",
  },
  {
    "company": "Superbet",
    "position": "Fullstack Software Developer",
    "location": "remote, Romania",
    "period": "2020 - 2023",
    "summary": "As a key member of the retail engineering team, my main work involved rewriting the main PHP monolith legacy back-office application, towards a AWS microservices architecture system",
    "achievements": [
      "I developed & integrated software providers, servers, clients; for platforms such as PCs, mobile devices, TVs, custom hardware terminals; used by customers, internal engineering teams and other business departments",
      "Played a key backend engineering role in launching Superbet Club, supporting a user base of up to 1 million users",
      "Owned end-to-end feature development, with latter additions impacting the whole business, while meeting company OKRs and KPIs",
      "Lead by example, with the use of better tooling, standards and workflows; eg integration, regression, and performance tests using Postman, monitoring with Grafana, Prometheus, Loki, CloudWatch",
      "Drove code optimisation and refactoring—consecutive highest lines-deleted metric annually—earning successive promotions",
    ],
    "tools": ["NodeJS", "NestJS", "Typescript", "MySQL", "MongoDB", "Vue.js", "Docker", "Traefik", "Minio", "AWS", "NATS", "Redis", "Postman", "Grafana", "Prometheus", "Loki"],
  },
  {
    "company": "straja",
    "position": "Founder & IT Consultant",
    "location": "remote",
    "period": "2019 - present",
    "summary": "Established a business providing client-oriented software on-demand, and being a technical consultant for a variety of enterprises and projects",
    "achievements": [
      "Technical Consultant Contractor for different enterprises in the Bucharest area.",
      "Served small businesses in Romania, creating presentation and eCommerce sites with Wordpress and Woocommerce.",
      "Partner with an UK web agency for a number of diverse projects",
      "Hired and onboarded contractors, mentored junior developers, managed the resources to be within projects scope",
      "Shaped architecture and full-stack features for PetWatchdog.com, an UK pet-review platform",
      "Doubled Lighthouse & SEO scores to > 90, revamped signup flow, and 2× monthly account creation",
      "Designed, developed the server side the DuePet.com mobile app while managing the frontend team",
      "Added core features to mypetsmicrochip.co.uk platform",
      "Advocated best practices in data design, system operations, inclusive/semantic UI for the company and its clients",
      "Optimized CLI and deployment: −10 hrs/week, 2× release frequency using Buddy",
      "Managed project estimation (timelines, budgets), standardized tech stack and the delivery process",
      "Tripled project documentation, and ensured business process management is long lasting and on par with industry standards",
    ],
    "tools": ["Typescript", "Ionic", "mySQL", "AWS", "PHP", "Laravel", "Material-UI", "html/sass", "Wordpress", "Woocommerce", "Buddy", "Postman"],
  },
  {
    "company": "Udev Office",
    "position": "Backend Web Developer",
    "location": "Bucharest, Romania",
    "period": "2018 - 2019",
    "summary": "Joined a blockchain startup which will become the regions's most successful, eventually being acquired soon after my departure",
    "achievements": [
      "Backend web development for a platform designed for Initial Coin Offering (ICO) token launches with focus on data visualization leveraging D3js together with web3.js for interacting with the Ethereum blockchain",
      "Dealt with the problem of scalability which was usual for the domain but also security by testing with Chai and Mocha against Infura",
      "Contributed to the implementation of Gibraltar Blockchain Exchange (gbx.global), centered around testing Zeppelin-Solidity with Truffle framework",
    ],
    "tools": ["Node.js", "express.js", "D3.js", "web3.js", "Ethereum", "Chai", "Mocha", "Infura", "Zeppelin-Solidity", "Truffle"],
  },
  {
    "company": "Streamwide",
    "position": "Frontend Web Developer",
    "location": "Bucharest, Romania",
    "period": "2018",
    "summary": "Spearheaded the development and integration of a Reseller platform into the existing suite of company products",
    "achievements": [
      "Implemented protocol updates and leveraged HTML5 APIs, including WebRTC and the Audio Media Stream API, to enhance the flagship product capabilities",
      "Ensured cross-browser compatibility, meticulously testing the application across various web browser engines using using BrowserStack"
    ],
    "tools": ["Angular2", "Material Design", "rxjs", "ngrx", "jasmine", "karma"],
  },
  {
    "company": "Extia",
    "position": "Frontend Web Developer",
    "location": "Bucharest, Romania",
    "period": "2017 - 2018",
    "summary": " Contractor in the banking industry, I led the migration strategy to transition web client applications from using jQuery to Angular 2",
    "achievements": [
      "Researched and developed a proof-of-concept using single-spa to replace HTML iframes, enabling a microservice architecture on the frontend",
      "Delivered an demo integration with two products from different teams, having minimal changes to existing codebases",
      "Authored dozens of technical documents for two product teams and multiple cross-team technical leaders",
    ],
    "tools": ["jQuery", "Angular 2", "single-spa", "rxjs"],
  },
  {
    "company": "Luxoft",
    "position": "Frontend Web Developer",
    "location": "Bucharest, Romania",
    "period": "2017",
    "summary": "Contractor in the Telecom Industry, I rewrote of Client's Survey app using Angular2 and Material, as the solo frontend developer in the team",
    "achievements": [
      "Integrated new APIs and in-app crash analytics, resulting in zero functionality issues one month post-release",
      "Successfully managed the challenges of working with a beta version of Angular 2 and its rapid release cycle",
      "Pioneered the use of NgRx for centralized state management early in its release cycle",
    ],
    "tools": ["Angular2", "Material Design", "rxjs", "ngrx", "jasmine", "karma"],
  },
  {
    "company": "Cloud Business Services",
    "position": "Web Developer",
    "location": "Bucharest, Romania",
    "period": "2015 - 2017",
    "summary": "Joined and eventually led an internal team, spearheading the company’s new web agency studio focused on WordPress sites for local businesses",
    "achievements": [
      "Oversaw the complete software development lifecycle, from client engagement and technical implementation to product launch and maintenance",
      "Mentored junior developers and established organizational standards for software delivery and business processes",
      "Led the development of a timesheet management tool using AngularJS and Node.js",
    ],
    "tools": ["WordPress", "Woocommerce", "AngularJS", "Node.js"],
  },
  {
    "company": "RoundAssist",
    "position": "Software Developer",
    "location": "Barlad, Romania",
    "website": "https://www.ispdatabase.com/",
    "period": "2014 - 2015",
    "summary": "Migrated a student management platform from Microsoft Access to a LAMP stack web application",
    "achievements": [
      "Designed and implemented Postgres schemas to test fit the new data storage system requirements based on the multiple of Microsoft Access supported client databases like SQL Server, MySQL, Oracle" +
      "Developed data access methods in the model layer of the MVC pattern using Symfony 2",
      "Own the migration process of the old data into the new storage server system, using Razor ETL tool for the seamless integrity-preserving data transfer process",
      "While the experience made me strongly consider a career change, overcoming the challenges laid a strong foundation in software migration, the expertise that would be prevalent in my career",
    ],
    "tools": ["LAMP stack", "PostgreSQL", "SQL Server", "MySQL", "Razor ETL", "Symfony 2", "Microsoft Access", "Visual Basic for Applications (VBA)"],
  },
  {
    "company": "AccordGrup",
    "position": "Web Developer",
    "location": "Barlad, Romania",
    "period": "2014",
    "summary": "Managed and enhanced a custom auto-parts eCommerce platform built in CodeIgniter",
    "achievements": [
      "Handled webmaster duties to ensure site maintenance, reliability and business growth",
      "Synchronized the parts database with a vendor API for real-time pricing",
      "Developed automations for notifications, invoicing, and new email templates",
      "Optimized search and product-page performance through improved database operations",
    ],
    "tools": ["PHP", "CodeIgniter", "MySQL", "HTML", "CSS", "JavaScript", "jQuery"],
  },
];

export const education = [
  {
    institution: '"Vasile Alecsandri" University',
    location: "Bacau, Romania",
    degree: "Computer Science",
    period: "Jun 2023 - present"
  },
  {
    institution: '"G. R. Codreanu" National College',
    location: "Barlad, Romania",
    degree: "High School Diploma",
    period: "2004 - 2009",
    achievements: [
      "Organizer of the first LAN gaming competitions, then expanding regionally. Won the CounterStrike championship",
      "According to my specialization of math & informatics, I received a top-score Certificate of Computers Proficiency",
    ],
  },
];
export const skills = {
  operatingSystems: [
    "Debian",
    "QubesOS",
    "Coreboot",
    "GrapheneOS",
    "MirageOS",
    "Heads",
    "KickSecure",
    "OpenWRT",
    "NixOS"
  ],
  webAndApplicationServers: [
    "Nginx",
    "Caddy",
    "Apache",
    "Node.js",
    "Traefik"
  ],
  javascriptFrameworks: [
    "jQuery",
    "express.js",
    "nestjs",
    "angular",
    "vue.js",
    "electron",
    "rxjs",
    "D3.js",
    "web3.js",
    "astro"
  ],
  otherFrameworks: [
    "CodeIgniter",
    "Symfony",
    "Wordpress",
    "Bootstrap",
    "Tailwind",
    "Zod"
  ],
  virtualization: [
    "VirtualBox",
    "Docker (Podman, Rancher)",
    "XEN",
    "bubblewrap"
  ],
  programmingLanguages: [
    "PHP",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "SQL",
    "bash",
    "nix",
  ],
  automationBuildTools: [
    "SaltStack",
    "Make",
    "Nix",
    "Puppeteer",
    "Webpack",
    "Vite",
    "Buddy",
    "Github Actions",
    "CircleCI",
  ],
  testingTools: [
    "Mocha",
    "Chai",
    "Postman",
    "Jest",
    "Playwright"
  ],
  monitoringLoggingTools: [
    "Prometheus",
    "Grafana",
    "Loki",
    "Sentry",
    "CloudWatch"
  ],
  jsFrameworks: [
    "express",
    "nestjs",
    "angular",
    "vue",
    "electron",
    "ionic",
    "rxjs",
    "D3",
    "web3",
  ],
  databaseAndStorage: ["PostgreSQL", "Mysql", "MongoDB", "Redis", "Typeorm", "Sequelize"],
  cloudProviders: [
    "Heroku",
    "Digital Ocean",
    "AWS (EC2, Cognito, etc)",
    "Azure (AD, etc)",
    "Github (Actions, Codespaces, etc)"
  ],
  domainSkills: [
    "Fullstack Web Development",
    "Legacy Software Migration",
    "Systems Solution Technical Design and Writing",
    "API Development and Integration",
    "Database Design and Implementation",
    "DevSecOps",
    "Team Leadership",
    // "Privacy First Applications",
  ],

};

export type ProjectCategory = "Enterprise" | "Startup" | "Consultancy" | "Open Source";

export interface Project {
  title: string;
  link: string;
  description: string[];
  tech: string[];
  category: ProjectCategory;
}

export const projects: Project[] = [
  {
    title: "Superbet Club",
    link: "https://club.superbet.ro/",
    category: "Enterprise",
    tech: ["Node.js", "NestJS", "AWS", "Microservices", "Redis"],
    description: [
      "I played a key role in the backend development of Superbet's customer loyalty program in Romania, serving both in-store and online bettors. Some of the features I was responsible include:",
      "Join & Activate your club account (physical card or online).",
      "Place or scan bets—either in-store or online.",
      "Earn cashback & raffle entries automatically.",
      "Redeem rewards as vouchers or withdraw them.",
      "Maintain activity to qualify for ongoing perks—including birthday gifts.",
      "Security first implementations and integrations",
      "Supporting a user base of up to 1 million users",
      "Part of rewriting the main PHP monolith legacy back-office application towards an AWS microservices architecture"
    ],
  },
  {
    title: "petwatchdog",
    link: "https://web.archive.org/web/20210624093823/https://petwatchdog.com/",
    category: "Consultancy",
    tech: ["TypeScript", "AWS", "UI/UX", "SEO"],
    description: [
      "UK pet-review platform developed as part of straja consultancy",
      "Shaped architecture and full-stack features for this platform",
      "Doubled Lighthouse & SEO scores to > 90",
      "Revamped signup flow, resulting in 2× monthly account creation",
      "Implemented best practices in data design and system operations"
    ],
  },
  {
    title: "duepet mobile app",
    link: "https://duepet.com/",
    category: "Startup",
    tech: ["Node.js", "MySQL", "API Design", "Architecture"],
    description: [
      "Designed and developed the server side of this mobile app",
      "Managed the frontend team during development",
      "Implemented client-oriented software on-demand",
      "Applied best practices in data design and system operations",
      "Part of partnership with a UK web agency"
    ],
  },
  {
    title: "mypetsmicrochip platform",
    link: "https://web.archive.org/web/20161001160102/https://www.mypetsmicrochip.co.uk/",
    category: "Consultancy",
    tech: ["PHP", "Frontend", "UI/UX", "MySQL"],
    description: [
      "Added core features to this pet microchip platform",
      "Implemented inclusive and semantic UI principles",
      "Applied best practices in data design and system operations",
      "Part of partnership with a UK web agency",
      "Contributed to project documentation and business process management"
    ],
  },
  {
    title: "International Student Database Program (ISP Database)",
    link: "https://www.ispdatabase.com/",
    category: "Enterprise",
    tech: ["LAMP Stack", "Symfony 2", "PostgreSQL", "Razor ETL"],
    description: [
      "Migrated a student management platform from Microsoft Access to a LAMP stack web application",
      "Designed and implemented Postgres schemas to fit new data storage system requirements",
      "Developed data access methods in the model layer using Symfony 2",
      "Managed the migration process of old data into the new storage system using Razor ETL",
      "Ensured seamless integrity-preserving data transfer process"
    ],
  },
  {
    title: "Gibraltar Blockchain Exchange (GBX)",
    link: "https://www.gbx.global/",
    category: "Enterprise",
    tech: ["Node.js", "Ethereum", "Smart Contracts", "Security"],
    description: [
      "Building A World-Leading, Institutional-Grade Token Sale Platform and Cryptocurrency Exchange",
      "The platform aims to be a world-leading institutional-grade token sale platform and cryptocurrency exchange coupled with a comprehensive listing process, AML/KYC best practices and public consensus within a governed environment.",
    ],
  }
];

export const awards = [
];

export type InterestLabel = "Exploring" | "Active" | "Core" | "Old";

export interface Interest {
  title: string;
  description: string;
  label: InterestLabel;
}

export const interests: Interest[] = [
  {
    title: "Functional Programming",
    description: "Exploring purely functional paradigms, immutability, and algebraic data types — particularly in TypeScript and Haskell.",
    label: "Exploring",
  },
  {
    title: "Privacy-First Software",
    description: "Building and advocating for systems that minimize data collection, use end-to-end encryption, and respect user autonomy.",
    label: "Core",
  },
  {
    title: "Distributed Systems",
    description: "Designing resilient, scalable architectures with event sourcing, CQRS, and message-driven communication patterns.",
    label: "Active",
  },
  {
    title: "Secure Operating Systems",
    description: "Running and experimenting with hardened OS stacks like QubesOS, NixOS, and GrapheneOS for daily use and research.",
    label: "Core",
  },
  {
    title: "Blockchain & Web3",
    description: "Early hands-on work with Ethereum, Solidity, and token platforms — still watching the space but less actively involved.",
    label: "Old",
  },
  {
    title: "Developer Tooling & DX",
    description: "Improving build pipelines, local dev environments, and CLI workflows to reduce friction and increase release cadence.",
    label: "Active",
  },
];
