export const personalInfo = {
  name: "Andrei Botez",
  location: "Romania",
  email: "andrei@straja.org",
  github: "https://github.com/idshdx",
  linkedin: "https://www.linkedin.com/in/andrewww-botez",
  website: "https://shady.straja.org",
  signal: "shdx.01",
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
    "On-demand Client-orinted Software",
    "Systems Solution Technical Design and Writing",
    "API Development and Integration",
    "Database Design and Implementation",
    "DevSecOps",
    "Project and Team Leadership",
    // "Privacy First Applications",
  ],

};

export type ProjectCategory = "Enterprise" | "Startup" | "Consultancy" | "Open Source";

export interface CaseStudyResult {
  metric: string;
  value: string;
  description: string;
}

export interface CaseStudyTechSection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  heroImage: string;
  overview: string;
  role: string;
  duration: string;
  team: string;
  challenge: string;
  approach: string[];
  results: CaseStudyResult[];
  techDeepDive: CaseStudyTechSection[];
  keyTakeaways: string[];
}

export interface Project {
  title: string;
  link: string;
  description: string[];
  tech: string[];
  category: ProjectCategory;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  {
    title: "Superbet Club",
    link: "https://club.superbet.ro/",
    category: "Enterprise",
    tech: ["Node.js", "NestJS", "AWS", "Microservices", "Redis", "NATS", "MySQL", "MongoDB", "Docker", "Grafana"],
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
    caseStudy: {
      slug: "superbet-club",
      heroImage: "/superbet-club-hero.png",
      overview: "Led the backend engineering of Superbet's customer loyalty program in Romania — a high-scale platform serving up to 1 million users across in-store and online channels. This was a central pillar in the company's strategic migration from a legacy PHP monolith towards a resilient, cloud-native AWS microservices architecture.",
      role: "Fullstack Software Developer",
      duration: "2020 – 2023",
      team: "Part of the Retail Engineering Team",
      challenge: "The existing loyalty program was deeply embedded within a legacy PHP monolith that couldn't scale to meet the demands of a rapidly growing user base. The system needed to support real-time cashback calculations, raffle entries, voucher redemption, and birthday rewards — all while maintaining strict security standards in a regulated betting environment. Additionally, the platform had to serve both physical retail locations (via card scanning) and online users simultaneously, requiring seamless cross-channel synchronization.",
      approach: [
        "Decoupled loyalty features from the PHP monolith into dedicated NestJS microservices, each owning its bounded context — accounts, rewards, vouchers, and raffle engines.",
        "Designed an event-driven architecture using NATS as the message broker for inter-service communication, enabling loose coupling and independent deployability.",
        "Implemented Redis-based caching layers for real-time loyalty point calculations and cashback processing, dramatically reducing database load under peak traffic.",
        "Built secure integration APIs for physical card activation and online account linking, with full audit trails for regulatory compliance.",
        "Developed an automated voucher generation and reward distribution system, handling birthday gifts, tier-based perks, and promotional campaigns at scale.",
        "Established comprehensive observability using Grafana dashboards, Prometheus metrics, and Loki log aggregation — enabling proactive incident detection and rapid debugging."
      ],
      results: [
        {
          metric: "User Scale",
          value: "~1M",
          description: "Users supported across both in-store and online channels"
        },
        {
          metric: "Architecture",
          value: "Monolith → Microservices",
          description: "Legacy PHP monolith successfully decomposed into cloud-native services"
        },
        {
          metric: "Performance",
          value: "Real-time",
          description: "Loyalty point calculations and cashback processing with sub-second latency"
        },
        {
          metric: "Reliability",
          value: "Zero-downtime",
          description: "Deployments achieved through blue-green and canary release strategies"
        }
      ],
      techDeepDive: [
        {
          heading: "Microservices Architecture",
          body: "The loyalty platform was decomposed into independently deployable NestJS services running on AWS. Each service owned its database (MySQL for transactional data, MongoDB for event logs) and communicated via NATS messaging. This architecture allowed the team to scale individual components — such as the raffle engine during high-traffic campaigns — without affecting other parts of the system."
        },
        {
          heading: "Event-Driven Communication",
          body: "NATS was chosen as the messaging backbone for its lightweight footprint and high throughput. Every bet placement, card scan, and account activation published domain events that downstream services consumed asynchronously. This decoupled architecture eliminated the tight coupling that plagued the monolith and enabled features like real-time cashback notifications."
        },
        {
          heading: "Security & Compliance",
          body: "Operating in the regulated betting industry meant security was non-negotiable. The platform implemented end-to-end encryption for sensitive data, role-based access control for back-office operations, and comprehensive audit logging for every transaction. Integration and regression test suites, built with Postman, ran on every deployment to prevent regressions in security-critical paths."
        }
      ],
      keyTakeaways: [
        "Incremental migration (strangler fig pattern) is far more sustainable than big-bang rewrites — we shipped value continuously while decomposing the monolith.",
        "Investing in observability early pays dividends — Grafana/Prometheus/Loki gave us the confidence to ship fast and debug faster.",
        "Event-driven architectures require disciplined schema evolution — we established contract-first API design early to avoid breaking changes.",
        "Cross-channel consistency (physical + digital) demands careful idempotency design — duplicate card scans and network retries are inevitable at scale."
      ]
    }
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
    caseStudy: {
      slug: "duepet",
      heroImage: "",
      overview: "Duepet is a mobile application designed to help pet owners manage and track their pet-related activities, services, and needs. The platform aims to streamline interactions between pet owners and service providers, offering a centralized digital experience.",
      role: "Backend Architecture & Team Lead",
      duration: "Ongoing",
      team: "Partnership with UK web agency",
      challenge: "The primary challenge was coordinating distributed teams across different regions while delivering a robust, scalable backend capable of supporting a mobile-first experience. In addition, requirements from the client evolved rapidly, and the platform needed to handle growing user demand seamlessly.",
      approach: [
        "Established clear communication channels and structured delivery processes to manage frontend development workflows and timelines.",
        "Implemented a flexible architecture and iterative delivery model to adapt to fast-changing client requirements.",
        "Designed a normalized schema for core entities (users, pets, services, bookings) and optimized queries for high-frequency operations to ensure performance at scale.",
        "Enforced data validation and integrity constraints at multiple layers, and introduced CI/CD pipelines for automated deployment.",
        "Monitored performance using observability tools to proactively address bottlenecks."
      ],
      results: [
        {
          metric: "Delivery",
          value: "Success",
          description: "Delivered a production-ready mobile backend system"
        },
        {
          metric: "Velocity",
          value: "Improved",
          description: "Increased development speed through structured processes"
        },
        {
          metric: "Scale",
          value: "Scalable",
          description: "Enabled scalable growth of the platform under growing user demand"
        }
      ],
      techDeepDive: [
        {
          heading: "Backend Architecture",
          body: "The backend was designed with scalability and modularity in mind, enabling independent service evolution and efficient deployment cycles. It served as a centralized hub enabling rapid feature iteration, real-time data synchronization, and smooth cross-platform workflows."
        },
        {
          heading: "Database Optimization",
          body: "Implemented a normalized relational database schema with tight integrity constraints, alongside specifically optimized queries to ensure high performance even as the user base grew. This prevented data anomalies and guaranteed reliable performance."
        }
      ],
      keyTakeaways: [
        "Strong backend architecture is critical for mobile-first platforms.",
        "Clear leadership improves cross-team efficiency when working with distributed teams.",
        "Flexibility is essential when working with evolving client requirements."
      ]
    }
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
    caseStudy: {
      slug: "isp-database",
      heroImage: "",
      overview: "The International Student Database Program (ISP Database) is a platform designed to manage international student data across multiple institutions. The project focused on modernizing a legacy Microsoft Access-based system into a scalable, web-based architecture capable of handling multi-database environments.",
      role: "Software Developer & Data Migration Engineer",
      duration: "2014 - 2015",
      team: "RoundAssist",
      challenge: "The legacy system was built on Microsoft Access, leading to limited scalability, poor performance, and difficult integration with modern systems. Data was fragmented across multiple client-specific databases (SQL Server, MySQL, Oracle, Access), with a high risk of inconsistency. A flexible, vendor-agnostic migration strategy was required.",
      approach: [
        "Re-architected the application from a desktop-based Access solution to a web-based platform using a LAMP stack.",
        "Designed and implemented a new relational schema aligned with normalization principles, accommodating multiple source database formats.",
        "Implemented the model layer using Symfony 2 following MVC principles, opting for raw SQL queries for better control during migration.",
        "Owned the full data migration lifecycle using Razor ETL, extracting, transforming, and loading heterogeneous schemas into a unified format.",
        "Managed database provisioning, schema deployment, and successful cutover with minimal disruption."
      ],
      results: [
        {
          metric: "Integrity",
          value: "100%",
          description: "Successfully migrated client data with full integrity preservation"
        },
        {
          metric: "Architecture",
          value: "LAMP",
          description: "Reduced dependency on legacy Access-based workflows"
        },
        {
          metric: "Platform",
          value: "Scalable",
          description: "Enabled centralized, scalable data management for university clients"
        }
      ],
      techDeepDive: [
        {
          heading: "System Migration",
          body: "Decoupled business logic from Access forms and VBA scripts, reimplementing core logic in PHP. This enabled multi-user concurrent access via a web interface and standardized data handling across heterogeneous client environments."
        },
        {
          heading: "Data Migration Pipeline",
          body: "The ETL pipeline was designed to handle cross-database compatibility, ensuring referential integrity preservation and robust data validation during the extraction from Access/SQL Server/Oracle to the new unified storage system."
        }
      ],
      keyTakeaways: [
        "Cross-database interoperability and data modeling are essential in real-world systems.",
        "Building reliable ETL pipelines requires deep understanding of both legacy and modern systems.",
        "Trade-offs between ORMs and raw SQL must be evaluated carefully in high-control scenarios."
      ]
    }
  },
  {
    title: "Gibraltar Blockchain Exchange (GBX)",
    link: "https://www.gbx.global/",
    category: "Enterprise",
    tech: ["Node.js", "Ethereum", "Smart Contracts", "Security"],
    description: [
      "Building A World-Leading, Institutional-Grade Token Sale Platform and Cryptocurrency Exchange",
      "The platform aims to be a world-leading institutional-grade token sale platform and cryptocurrency exchange coupled with a comprehensive listing process, AML/KYC best practices and public consensus within a governed environment."
    ],
    caseStudy: {
      slug: "gbx-exchange",
      heroImage: "",
      overview: "Gibraltar Blockchain Exchange (GBX) was positioned as an institutional-grade token sale platform and cryptocurrency exchange, emerging during the peak of the ICO boom. The initiative aimed to combine regulated token issuance with a compliant trading infrastructure, integrating AML/KYC processes and governance frameworks.",
      role: "Backend Web Developer",
      duration: "2018 - 2019",
      team: "Udev Office",
      challenge: "The project operated in a rapidly expanding but highly speculative market. Key challenges included early-stage scalability constraints of the Ethereum network, ambiguous product requirements that evolved quickly, and handling trust and governance concerns for a regulated exchange in an unregulated ecosystem.",
      approach: [
        "Implemented backend services interacting with Ethereum smart contracts using web3.js, handling transaction flows and event subscriptions.",
        "Developed dynamic visualizations using D3.js to represent token distribution, funding progress, and transaction activity in real-time.",
        "Contributed to testing pipelines using Truffle, Mocha, and Chai to validate contract security patterns (Zeppelin-Solidity).",
        "Optimized interactions with Ethereum nodes via Infura to address early-stage network scalability constraints.",
        "Participated in identifying and mitigating risks related to vulnerabilities and transaction handling edge cases."
      ],
      results: [
        {
          metric: "Integration",
          value: "Web3",
          description: "Established core blockchain infrastructure and data visualization layer"
        },
        {
          metric: "Outcome",
          value: "Acquired",
          description: "The startup achieved regional success and was later acquired"
        },
        {
          metric: "Security",
          value: "Validated",
          description: "Strengthened smart contract security through rigorous testing pipelines"
        }
      ],
      techDeepDive: [
        {
          heading: "Blockchain Integration",
          body: "Implemented backend transaction flows and contract event subscriptions with web3.js. Managed the asynchronous interaction models required by early-stage Ethereum node infrastructure (Infura), reducing redundant contract calls."
        },
        {
          heading: "Data Visualization Layer",
          body: "D3.js was utilized to create a real-time, dynamic representation of token sale metrics. This helped non-technical stakeholders understand funding distributions and contract activity clearly."
        }
      ],
      keyTakeaways: [
        "Web3 infrastructure requires a security-first development mindset.",
        "Strong technical execution cannot compensate for unstable market conditions.",
        "Early exposure to high-risk projects provides valuable foundations for distributed system thinking."
      ]
    }
  },
  {
    title: "Lockpost",
    link: "https://github.com/idshdx/lockpost",
    category: "Open Source",
    tech: ["PHP", "Symfony", "Twig", "Stimulus", "OpenPGP.js", "Docker"],
    description: [
      "Lightweight web application designed to enable secure message intake through shareable links.",
      "Abstracts cryptographic complexity for non-technical users.",
      "Messages encrypted client-side using OpenPGP.js and signed server-side."
    ],
    caseStudy: {
      slug: "lockpost",
      heroImage: "",
      overview: "Lockpost is a lightweight web application designed to enable secure message intake through shareable links. The goal is to remove friction from encrypted communication by allowing non-technical users to send confidential information without needing to understand PGP workflows.",
      role: "Full-stack Developer (Solo)",
      duration: "Iterative phases",
      team: "Solo Project",
      challenge: "Secure communication tools typically require both sender and receiver to be familiar with encryption tools such as PGP. This creates usability friction and limits adoption in real-world scenarios where simplicity and speed are critical. The goal was to abstract cryptographic complexity while preserving strong security guarantees.",
      approach: [
        "Designed a streamlined flow where the system retrieves a public key and generates a unique, time-bound shareable link.",
        "Implemented client-side encryption using OpenPGP.js so messages are encrypted in-browser before submission.",
        "Configured server-side PGP signing for authenticity verification of the backend payload before email forwarding.",
        "Developed a stateless architecture with zero tracking, cookies, or analytics, using symmetric encryption for token-based access.",
        "Built both backend and frontend layers along with local containerization (Docker, NGINX, PHP-FPM, MailHog)."
      ],
      results: [
        {
          metric: "Usability",
          value: "High",
          description: "Abstracted PGP complexity into a simple user experience"
        },
        {
          metric: "Privacy",
          value: "First",
          description: "Built a privacy-first application with no message data retention"
        },
        {
          metric: "Security",
          value: "E2E",
          description: "Enabled end-to-end encrypted messaging via shareable links"
        }
      ],
      techDeepDive: [
        {
          heading: "Cryptographic Flow",
          body: "The system dynamically retrieves PGP keys and performs all encryption operations natively within the browser using OpenPGP.js. Upon submission, the server only processes encrypted payloads and attaches a cryptographic signature to verify message origin."
        },
        {
          heading: "Architecture Decisions",
          body: "Opted for a completely stateless design to remove data persistence risks. The backend utilizes a minimal footprint of Symfony components to ensure reliable routing without relying on bulky framework features."
        }
      ],
      keyTakeaways: [
        "Security and usability can be aligned with careful abstraction.",
        "Even small projects can profoundly benefit from a privacy-first design mindset.",
        "Iterative expansion post-MVP is highly effective for refining technical direction."
      ]
    }
  },
  {
    title: "Frontend Modernization in Banking Ecosystem",
    link: "",
    category: "Enterprise",
    tech: ["Angular 2", "jQuery", "single-spa", "RxJS"],
    description: [
      "Modernizing legacy web client applications within a banking environment.",
      "Transition from jQuery-based architectures to Angular 2-based modular frontend systems.",
      "Architected migration strategy and tested microfrontend architecture using single-spa."
    ],
    caseStudy: {
      slug: "banking-frontend-modernization",
      heroImage: "",
      overview: "This project focused on modernizing legacy web client applications within a banking environment by transitioning from jQuery-based architectures to Angular 2-based modular frontend systems. It targeted improvements in maintainability, scalability, and team autonomy across multiple product teams.",
      role: "Contractor / Frontend Lead",
      duration: "2017 - 2018",
      team: "Extia (Banking Client)",
      challenge: "The existing frontend ecosystem relied heavily on jQuery-driven UI logic, featuring tight coupling between components and HTML iframe-based integration between products. This caused high technical debt, difficult cross-team coordination, and slow delivery cycles.",
      approach: [
        "Defined a phased migration strategy from jQuery to Angular 2 to ensure incremental adoption with minimal disruption.",
        "Conducted a research initiative evaluating single-spa as a framework for frontend microservices to replace HTML iframes.",
        "Developed a working Proof of Concept (PoC) using single-spa, demonstrating microfrontend orchestration.",
        "Delivered a live integration demo involving two separate product teams to prove interoperability.",
        "Authored extensive technical documentation supporting adoption, including migration strategy and architecture design notes."
      ],
      results: [
        {
          metric: "Architecture",
          value: "Modernized",
          description: "Established validated path from jQuery monolithic frontend to Angular 2"
        },
        {
          metric: "Integration",
          value: "Microfrontends",
          description: "Reduced architectural dependency on legacy iframe-based UI composition"
        },
        {
          metric: "Alignment",
          value: "High",
          description: "Achieved cross-team technical alignment through extensive documentation"
        }
      ],
      techDeepDive: [
        {
          heading: "Migration Strategy",
          body: "The migration process involved identifying high-impact modules for gradual replacement of jQuery components with Angular 2, introducing reactive patterns natively using RxJS to untangle deeply coupled logic."
        },
        {
          heading: "Microfrontend POC",
          body: "The single-spa PoC successfully replaced iframes with a unified shell application that orchestrated multiple standalone frontend applications, validating that different product suites could seamlessly coexist."
        }
      ],
      keyTakeaways: [
        "Incremental migration safely reduces operational risk in large, critical banking systems.",
        "Microfrontend architecture dramatically improves team autonomy but requires strong architectural governance.",
        "Early proof-of-concepts are indispensable to de-risk major architectural transitions."
      ]
    }
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

// ─── Open Source Projects ────────────────────────────────────────────────────

export interface OssProject {
  // Required fields
  title: string;
  slug: string;
  description: string;
  tech: string[];
  repoUrl: string;
  license: string;
  features: string[];
  category: string;
  // Optional fields
  demoUrl?: string;
  heroImage?: string;
  installationSteps?: string[];
  usageExample?: string;
  contributingGuide?: string;
  status?: 'Active' | 'Archived' | 'Experimental';
  keyTakeaways?: string[];
}

export const ossProjects: OssProject[] = [
  {
    title: "CSIDH-wasm",
    slug: "csidh-wasm",
    description:
      "A WebAssembly port of the CSIDH isogeny cryptographic library, providing cryptographic primitives for post-quantum key exchange. It allows high-performance isogeny-based cryptography to run natively in web browsers and Node.js environments.",
    tech: ["WebAssembly", "C", "Assembly", "Emscripten", "Node.js"],
    repoUrl: "https://github.com/idshdx/csidh-wasm",
    license: "MIT",
    features: [
      "WebAssembly port via Emscripten for efficient key exchange mechanisms",
      "Supports 512-bit parameter set for post-quantum security",
      "Optimized C arithmetic with Assembly foundations",
      "Native support for Node.js, modern browsers, and Web Workers",
      "Provides core primitives: secret key generation, public key derivation, and shared secret calculation",
    ],
    category: "Cryptography Tool",
    status: "Active",
    installationSteps: [
      "Clone the repository: `git clone https://github.com/idshdx/csidh-wasm`",
      "Ensure Emscripten is installed and configured in your environment",
      "Build for Node.js: `emmake make` or for Browser: `emmake make browser`",
      "Run tests to verify the build: `npm run test` or `npm run test:browser`",
    ],
    usageExample: `import CSIDH from "csidh-wasm";

const lib = await CSIDH();
const alice_sk = lib.secretKey(); 
const alice_pk = lib.publicKey(alice_sk);

const bob_sk = lib.secretKey(); 
const bob_pk = lib.publicKey(bob_sk);

const alice_ss = lib.sharedKey(bob_pk, alice_sk);
const bob_ss = lib.sharedKey(alice_pk, bob_sk);`,
    contributingGuide:
      "Contributions, especially regarding 1024-bit parameter sets or Assembly optimizations, are most welcome. Please open an issue to discuss major changes before submitting a PR.",
    keyTakeaways: [
      "Successfully ported complex C-based cryptographic primitives to WebAssembly with high performance.",
      "Demonstrated the viability of isogeny-based post-quantum cryptography in browser environments.",
      "Navigated Emscripten's build system to handle low-level memory management and assembly optimizations.",
    ],
  },
  {
    title: "qubes-mat",
    slug: "qubes-mat",
    description:
      "Secure, reproducible, and GitOps-driven metadata scrubbing infrastructure for Qubes OS. Automatically cleans metadata from images using MAT2 within disposable VMs, enforced by strict qrexec policies.",
    tech: ["Shell", "SaltStack", "Nix", "Qubes OS", "MAT2"],
    repoUrl: "https://github.com/idshdx/qubes-mat",
    license: "MIT",
    features: [
      "Security-first design using Disposable VMs for isolation",
      "Infrastructure-as-Code implementation via SaltStack for reproducible Qubes environments",
      "User-space reproducibility using Nix Flakes",
      "Strict qrexec policy enforcement for secure inter-VM communication",
      "Seamless desktop integration for right-click metadata cleaning",
    ],
    category: "Security Infrastructure",
    status: "Active",
    installationSteps: [
      "Clone the repository into your management VM or dom0",
      "Run the bootstrap script: `./scripts/bootstrap_gitops.sh`",
      "Deploy the Salt configurations: `./scripts/deploy.sh`",
      "Configure RPC policies: `./scripts/setup_rpc.sh`",
    ],
    usageExample: `# Architecture flow:
# [user selects file] -> [proxy-cleaner-dvm] -> [mat2-cleaner-dvm] -> [work-vault]

# Manual trigger via qrexec:
qrexec-client-vm work-vault my.CleanImage < /path/to/image.jpg`,
    contributingGuide:
      "All contributions must adhere to the least-privilege security model. Please review the hardening guide in the security/ directory before proposing changes.",
    keyTakeaways: [
      "Leveraged Qubes OS security primitives (Disposable VMs, qrexec) to build a robust metadata cleaning pipeline.",
      "Implemented a fully automated, GitOps-driven infrastructure management system using SaltStack.",
      "Achieved high reproducibility and environment isolation by combining Nix Flakes with Qubes OS architecture.",
    ],
  },
  {
    title: "Youtube2Article",
    slug: "youtube2article",
    description:
      "A multi-agent AI pipeline that transforms YouTube technical presentations into high-quality, structured Markdown articles. Leverages Google's Gemini models to ensure technical accuracy, speaker attribution, and professional narrative flow.",
    tech: ["TypeScript", "Node.js", "Google Gemini AI", "yt-dlp", "FFmpeg"],
    repoUrl: "https://github.com/idshdx/Youtube2Article",
    license: "MIT",
    features: [
      "Multi-agent architecture: Diarizer, Cleaner, Architect, and Writer agents",
      "Automated diarization for identifying multiple speakers and audience interaction",
      "Smart transcript cleaning: removes verbal fillers and fixes auto-caption errors",
      "Automatic structural blueprinting with section titles and summaries",
      "Generates polished, production-ready technical articles in Markdown format",
    ],
    category: "AI Productivity Tool",
    status: "Active",
    installationSteps: [
      "Clone the repository: `git clone https://github.com/idshdx/Youtube2Article.git`",
      "Install dependencies: `npm install`",
      "Create a `.env` file and add your `GEMINI_API_KEY`",
      "Run the pipeline: `npm start <YouTube URL> [output_name]`",
    ],
    usageExample: `# Convert a technical talk to an article
npm start https://www.youtube.com/watch?v=example-id my-technical-article

# Output generated in /dist:
# - my-technical-article.md (Final Article)
# - my-technical-article_cleaned.txt (Polished Transcript)`,
    contributingGuide:
      "Contributions to agent prompts or new extraction patterns (like OCR for slides) are welcome. Please ensure TypeScript types are maintained.",
    keyTakeaways: [
      "Designed a robust multi-agent orchestration pattern to handle complex long-form content synthesis.",
      "Optimized LLM prompts to achieve high-fidelity technical diarization and noise reduction in transcripts.",
      "Built a practical tool that significantly reduces the time required to convert video content into structured documentation.",
    ],
  },
];

