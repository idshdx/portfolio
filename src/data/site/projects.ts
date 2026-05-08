import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "Superbet Club",
    link: "https://club.superbet.ro/",
    category: ["Enterprise", "Product Launch"],
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
      heroImage: "/projects/superbet-club.jpg",
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
    title: "DuePet mobile app",
    link: "https://duepet.com/",
    category: ["Startup", "Product Launch"],
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
      heroImage: "/projects/duepet.png",
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
    title: "International Student Database Program (ISP DB)",
    link: "https://www.ispdatabase.com/",
    category: ["Enterprise", "Legacy Software Migration"],
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
      heroImage: "/projects/ispdb.jpg",
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
    category: ["Enterprise", "Product Launch"],
    tech: ["Node.js", "Ethereum", "Smart Contracts", "Security"],
    description: [
      "Building A World-Leading, Institutional-Grade Token Sale Platform and Cryptocurrency Exchange",
      "The platform aims to be a world-leading institutional-grade token sale platform and cryptocurrency exchange coupled with a comprehensive listing process, AML/KYC best practices and public consensus within a governed environment."
    ],
    caseStudy: {
      slug: "gbx-exchange",
      heroImage: "/projects/GBX2.jpg",
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
    category: ["Open Source"],
    tech: ["PHP", "Symfony", "Twig", "Stimulus", "OpenPGP.js", "Docker"],
    description: [
      "Lightweight web application designed to enable secure message intake through shareable links.",
      "Abstracts cryptographic complexity for non-technical users.",
      "Messages encrypted client-side using OpenPGP.js and signed server-side."
    ],
    caseStudy: {
      slug: "lockpost",
      heroImage: "/projects/lockpost-logo.png",
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
    category: ["Enterprise", "Legacy Software Migration"],
    tech: ["Angular 2", "jQuery", "single-spa", "RxJS"],
    description: [
      "Modernizing legacy web client applications within a banking environment.",
      "Transition from jQuery-based architectures to Angular 2-based modular frontend systems.",
      "Architected migration strategy and tested microfrontend architecture using single-spa."
    ],
    caseStudy: {
      slug: "banking-frontend-modernization",
      heroImage: "/projects/ingbank3.jpg",
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
