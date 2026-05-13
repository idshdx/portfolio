import type { Project } from './types';

export const projects: Project[] = [
  {
    title: "Superbet Club",
    link: "https://club.superbet.ro/",
    category: ["Enterprise", "Product Launch"],
    tech: ["Node.js", "NestJS", "AWS", "Microservices", "Redis", "NATS", "MySQL", "MongoDB", "Docker", "Grafana"],
    description: [
      "Contributed backend services and integrations for Superbet's customer loyalty program in Romania, serving both retail and online betting channels. Areas of work included:",
      "Join & Activate your club account (physical card or online).",
      "Place or scan bets—either in-store or online.",
      "Earn cashback & raffle entries automatically.",
      "Redeem rewards as vouchers or withdraw them.",
      "Maintain activity to qualify for ongoing perks—including birthday gifts.",
      "Security-focused implementations and integrations.",
      "Services designed for a customer base of up to 1 million users.",
      "Part of the wider migration from a legacy PHP back-office monolith toward AWS-hosted services."
    ],
    caseStudy: {
      slug: "superbet-club",
      heroImage: "/projects/superbet-club.jpg",
      overview: "Backend contribution to Superbet Club, a loyalty platform for Romania's retail and online betting channels. The work combined customer account activation, rewards, vouchers, raffle mechanics, and operational tooling while the broader retail platform was moving away from a legacy PHP back-office monolith.",
      role: "Fullstack Software Developer",
      duration: "2020 – 2023",
      team: "Part of the Retail Engineering Team",
      challenge: "The loyalty domain had to evolve inside a regulated betting environment while still depending on legacy back-office workflows. The platform needed to support physical card activation, online account linking, cashback, raffle entries, voucher redemption, and operational auditability across retail and digital channels without creating inconsistent customer states.",
      approach: [
        "Implemented backend features in NestJS services around account activation, rewards, vouchers, and campaign mechanics while integrating with existing retail systems.",
        "Used NATS-based messaging for asynchronous communication between services, reducing direct coupling with legacy workflows and improving operational resilience.",
        "Applied Redis caching and careful database access patterns around high-read loyalty operations where repeated calculations or lookups could create avoidable load.",
        "Built APIs for physical card activation and online account linking with auditability in mind, because customer identity and reward state changes are sensitive in a regulated domain.",
        "Supported voucher and reward distribution flows for recurring perks, promotional campaigns, and birthday-related rewards.",
        "Contributed to monitoring and operational workflows using Grafana, Prometheus, Loki, CloudWatch, and Postman-based integration/regression checks."
      ],
      results: [
        {
          metric: "User Scale",
          value: "~1M",
          description: "Users supported across both in-store and online channels"
        },
        {
          metric: "Architecture",
          value: "Incremental Migration",
          description: "Loyalty capabilities were moved toward service-oriented components without a big-bang rewrite"
        },
        {
          metric: "Operations",
          value: "Observable",
          description: "Monitoring, logging, and regression checks improved visibility into production behavior"
        },
        {
          metric: "Delivery",
          value: "Cross-channel",
          description: "Supported loyalty workflows spanning retail card usage and online account access"
        }
      ],
      techDeepDive: [
        {
          heading: "Microservices Architecture",
          body: "The migration followed an incremental service extraction model rather than a single replacement of the PHP monolith. NestJS services were introduced around loyalty-specific responsibilities and integrated with existing systems through APIs and asynchronous messaging."
        },
        {
          heading: "Event-Driven Communication",
          body: "NATS was used to decouple customer and reward events from downstream processing. This helped isolate loyalty workflows such as card activation, reward updates, and campaign mechanics from direct synchronous dependencies wherever eventual consistency was acceptable."
        },
        {
          heading: "Security & Compliance",
          body: "Operating in a betting environment meant customer identity, reward balances, and operational actions needed careful handling. The work emphasized secure integration boundaries, role-aware back-office access, audit trails for sensitive state changes, and regression checks around critical flows."
        }
      ],
      keyTakeaways: [
        "Incremental migration is safer than big-bang replacement when product delivery and legacy operations must continue in parallel.",
        "Observability and regression checks are not optional when loyalty state crosses retail, online, and back-office systems.",
        "Event-driven systems require clear ownership of event contracts and state transitions.",
        "Cross-channel consistency demands careful idempotency design because duplicate scans, retries, and delayed events are normal operating conditions."
      ]
    }
  },

  {
    title: "DuePet mobile app",
    link: "",
    category: ["Startup", "Product Launch"],
    tech: ["Node.js", "MySQL", "API Design", "Architecture"],
    description: [
      "Designed and developed the server-side foundation for a pet management mobile app.",
      "Coordinated frontend delivery during development.",
      "Implemented client-driven features for pet profiles, reminders, records, and tracking workflows.",
      "Applied practical database design and operational practices for a mobile-first product.",
      "Delivered through a partnership with a UK-based web agency."
    ],
    caseStudy: {
      slug: "duepet",
      heroImage: "/projects/duepet.png",
      overview: "DuePet is a pet management mobile app focused on reminders, pet profiles, records, custom labels, and health or activity trackers. The case study covers the backend architecture and delivery coordination needed to support a mobile-first product with evolving client requirements.",
      role: "Backend Architecture & Team Lead",
      duration: "Client engagement",
      team: "Partnership with a UK-based web agency",
      challenge: "The project required a maintainable backend for a mobile app whose feature set evolved during delivery. The system needed to model pets, reminders, records, custom labels, and tracker-style data while keeping frontend implementation aligned with backend capabilities across a distributed team that I managed.",
      approach: [
        "Designed API and data boundaries around users, pet profiles, reminders, records, labels, and tracker entries rather than overfitting the backend to a single screen flow.",
        "Coordinated frontend work by translating changing client needs into backend contracts, delivery priorities, and implementation checkpoints.",
        "Used a relational data model for core entities and validation rules so recurring reminders, profile data, and tracker histories remained consistent.",
        "Kept the architecture modular enough to support new tracker types and client-requested features without rewriting existing flows.",
        "Applied deployment and operational practices appropriate for a small product team, prioritizing maintainability over premature complexity."
      ],
      results: [
        {
          metric: "Product Scope",
          value: "Mobile Backend",
          description: "Delivered server-side capabilities for pet profiles, reminders, records, and tracker workflows"
        },
        {
          metric: "Team Delivery",
          value: "Coordinated",
          description: "Aligned backend work with frontend delivery across a distributed client-agency setup"
        },
        {
          metric: "Maintainability",
          value: "Iterative",
          description: "Structured the backend so new app features could be added without destabilizing core data flows"
        }
      ],
      techDeepDive: [
        {
          heading: "Backend Architecture",
          body: "The backend acted as the stable contract between a changing product backlog and the mobile client. Core API boundaries were shaped around durable product concepts such as pets, reminders, records, labels, and tracker data, which made feature iteration easier to manage."
        },
        {
          heading: "Data Modeling",
          body: "The data model emphasized consistency for recurring reminders and historical tracker entries. This mattered because pet care data is cumulative: small modeling mistakes can become difficult to correct once users rely on reminders, records, and long-running histories."
        },
        {
          heading: "Delivery Coordination",
          body: "A key part of the work was not just implementation but translation between client requirements and frontend delivery. Clear API contracts and structured checkpoints reduced ambiguity for the frontend team while preserving room for client-driven changes."
        }
      ],
      keyTakeaways: [
        "Mobile products benefit from backend models built around stable domain concepts, not individual screens.",
        "Distributed delivery works better when API contracts and implementation priorities are explicit.",
        "Flexibility is useful only when paired with data integrity; fast-changing requirements should not produce unstable core records."
      ]
    }
  },

  {
    title: "International Student Database Program (ISP DB)",
    link: "https://www.ispdatabase.com/",
    category: ["Enterprise", "Legacy Software Migration"],
    tech: ["LAMP Stack", "Symfony 2", "PostgreSQL", "Razor ETL"],
    description: [
      "Migrated a student management platform from Microsoft Access to a LAMP stack web application.",
      "Designed and implemented PostgreSQL schemas for the new storage model.",
      "Developed data access methods in the Symfony 2 model layer.",
      "Managed ETL migration from heterogeneous source databases using Razor ETL.",
      "Focused on validation, reconciliation, and integrity-preserving data transfer."
    ],
    caseStudy: {
      slug: "isp-database",
      heroImage: "/projects/ispdb.jpg",
      overview: "ISP Database was a modernization and data-migration project for international student management workflows used by university clients. The work moved legacy Microsoft Access/VBA processes toward a web-based LAMP/Symfony platform while handling heterogeneous source databases.",
      role: "Software Developer & Data Migration Engineer",
      duration: "2014 - 2015",
      team: "RoundAssist",
      challenge: "The legacy system depended on Microsoft Access and VBA, which limited scalability, concurrent access, and integration options. Client data could come from SQL Server, MySQL, Oracle, or Access, so migration work had to account for inconsistent schemas, vendor differences, and the risk of data loss during cutover.",
      approach: [
        "Re-architected the application from a desktop-based Access solution to a web-based platform using a LAMP stack.",
        "Reverse-engineered Access forms and VBA behavior so core business logic could be reimplemented in PHP/Symfony.",
        "Designed relational schemas aligned with normalization principles while accounting for data imported from multiple database vendors.",
        "Implemented Symfony 2 model-layer data access with raw SQL where migration control, compatibility, or performance mattered more than ORM convenience.",
        "Owned ETL workflows with Razor ETL, extracting, transforming, validating, and loading heterogeneous client data into the new system.",
        "Handled database provisioning, schema deployment, migration support, and post-cutover data issue investigation."
      ],
      results: [
        {
          metric: "Migration",
          value: "Integrity-focused",
          description: "Client data was migrated with validation and reconciliation steps to preserve referential integrity"
        },
        {
          metric: "Architecture",
          value: "Access → Web",
          description: "Reduced dependency on desktop Access workflows by moving core functionality to a web platform"
        },
        {
          metric: "Compatibility",
          value: "Multi-source",
          description: "Supported migrations from Access, SQL Server, Oracle, and MySQL source environments"
        }
      ],
      techDeepDive: [
        {
          heading: "System Migration",
          body: "The migration required separating business rules from Access forms and VBA scripts before reimplementing them in PHP. This changed the operating model from desktop-bound workflows to a web application that could support more centralized access and maintenance."
        },
        {
          heading: "Data Migration Pipeline",
          body: "The ETL pipeline had to normalize data from Access, SQL Server, Oracle, and MySQL into a unified target schema. Validation and reconciliation were central to the work because mismatched source schemas and historical client data inconsistencies were expected."
        },
        {
          heading: "Raw SQL Trade-off",
          body: "Using raw SQL inside the Symfony model layer was a deliberate trade-off. It reduced abstraction during migration-heavy work and gave tighter control over complex queries, vendor-specific behavior, and transformation logic."
        }
      ],
      keyTakeaways: [
        "Legacy migrations require understanding the old system's behavior, not only its schema.",
        "Cross-database interoperability and data modeling are practical production concerns, not theoretical edge cases.",
        "Reliable ETL work depends on validation, reconciliation, and post-migration support.",
        "ORM abstractions are not always the right choice when migration control and query predictability are more important."
      ]
    }
  },
  {
    title: "Gibraltar Blockchain Exchange (GBX)",
    link: "https://gbx.global/",
    category: ["Enterprise", "Product Launch"],
    tech: ["Node.js", "Ethereum", "Smart Contracts", "Security"],
    description: [
      "Contributed backend and blockchain integration work for an institutional-grade token sale and cryptocurrency exchange initiative.",
      "Worked on Ethereum interaction, token-sale data visualization, and smart-contract testing during the ICO-era market."
    ],
    caseStudy: {
      slug: "gbx-exchange",
      heroImage: "/projects/GBX2.jpg",
      overview: "Gibraltar Blockchain Exchange (GBX) was an institutional-grade token sale and cryptocurrency exchange initiative built during the ICO-era market. My work focused on backend blockchain integration, Ethereum transaction flows, token metrics visualization, and smart-contract testing support.",
      role: "Backend Web Developer",
      duration: "2018 - 2019",
      team: "Udev Office",
      challenge: "The project operated in a speculative market where product direction changed quickly and Ethereum infrastructure still had practical latency, throughput, and reliability constraints. The engineering work had to handle asynchronous blockchain state, stakeholder-facing token metrics, and security-sensitive smart-contract interactions while the wider business model remained uncertain.",
      approach: [
        "Implemented backend services that interacted with Ethereum smart contracts through web3.js, including contract calls, transaction flows, and event subscriptions.",
        "Built D3.js visualizations for token distribution, funding progress, and transaction activity so non-technical stakeholders could inspect token-sale state.",
        "Contributed to Truffle, Mocha, and Chai test workflows around Zeppelin-Solidity contract patterns.",
        "Reduced redundant Ethereum node calls and handled asynchronous transaction states when working through Infura.",
        "Helped identify edge cases around smart-contract vulnerabilities, network reliability, and transaction lifecycle handling."
      ],
      results: [
        {
          metric: "Integration",
          value: "Web3",
          description: "Established core blockchain infrastructure and data visualization layer"
        },
        {
          metric: "Outcome",
          value: "MVP-stage",
          description: "The technical work supported an early platform that remained shaped by market volatility and changing direction"
        },
        {
          metric: "Security",
          value: "Tested",
          description: "Smart-contract interactions were supported by automated tests and review of transaction edge cases"
        }
      ],
      techDeepDive: [
        {
          heading: "Blockchain Integration",
          body: "The backend had to treat blockchain state as asynchronous and externally constrained. Contract calls, transaction submissions, event subscriptions, and Infura interactions were designed around delayed confirmations and unreliable timing assumptions."
        },
        {
          heading: "Data Visualization Layer",
          body: "D3.js was used to turn token-sale data into visual summaries of distribution, funding progress, and transaction activity. This mattered because stakeholders needed to understand contract state without reading raw blockchain data."
        },
        {
          heading: "Product Risk",
          body: "The project was technically valuable but commercially exposed to ICO market volatility. The case study is intentionally framed around engineering contribution and lessons learned rather than overstating product maturity."
        }
      ],
      keyTakeaways: [
        "Web3 infrastructure requires defensive handling of asynchronous state, node-provider limits, and transaction edge cases.",
        "Smart-contract testing and security review must be part of the normal delivery workflow, not a final-stage add-on.",
        "Strong technical execution cannot compensate for unstable market conditions or unclear product direction.",
        "High-uncertainty projects are useful for learning risk evaluation as much as implementation."
      ]
    }
  },
  {
    title: "Lockpost",
    link: "https://github.com/idshdx/lockpost",
    category: ["Open Source"],
    tech: ["PHP", "Symfony", "Twig", "Stimulus", "OpenPGP.js", "Docker"],
    description: [
      "Lightweight web application for secure message intake through shareable links.",
      "Abstracts PGP complexity for non-technical senders.",
      "Encrypts messages client-side with OpenPGP.js and signs forwarded payloads server-side."
    ],
    caseStudy: {
      slug: "lockpost",
      heroImage: "/projects/lockpost-logo.png",
      overview: "Lockpost is a lightweight secure message intake application that uses shareable links and browser-side OpenPGP encryption. The goal was to make encrypted communication easier for non-technical senders while keeping the server away from plaintext message content.",
      role: "Full-stack Developer (Solo)",
      duration: "Initial build plus iterative expansion phases",
      team: "Solo FOSS Project",
      challenge: "PGP-based secure communication usually assumes both parties understand key management and encryption workflows. Lockpost explored a simpler intake model: recipients generate a link tied to their public key, senders write a message in the browser, and the system forwards only encrypted content.",
      approach: [
        "Designed the end-to-end flow for public-key lookup, shareable link generation, browser-side message encryption, server-side signing, and email forwarding.",
        "Implemented OpenPGP.js encryption in the browser so message contents are encrypted before submission to the backend.",
        "Added server-side PGP signing and a verification interface so recipients can check message authenticity.",
        "Used a stateless design with no message persistence, no tracking, no cookies, and token-based access protected by symmetric encryption and integrity checks.",
        "Built the PHP/Symfony-based backend, Twig/Stimulus frontend, and local Docker stack with NGINX, PHP-FPM, and MailHog."
      ],
      results: [
        {
          metric: "Usability",
          value: "Simplified",
          description: "Abstracted PGP complexity into a simple user experience"
        },
        {
          metric: "Privacy",
          value: "No retention",
          description: "Designed the app so plaintext messages are not stored by the server"
        },
        {
          metric: "Security",
          value: "Client-side",
          description: "Encrypted messages in the browser before backend submission"
        }
      ],
      techDeepDive: [
        {
          heading: "Cryptographic Flow",
          body: "The recipient's public key is retrieved before link generation, and the sender's browser encrypts the message with OpenPGP.js before submission. The backend forwards encrypted payloads and can attach a server-side signature for authenticity verification."
        },
        {
          heading: "Architecture Decisions",
          body: "The application deliberately avoids message persistence, tracking, cookies, and analytics. Symfony is used selectively as a structural base rather than as a full-stack framework, reflecting the project's constrained academic origin and later FOSS expansion."
        },
        {
          heading: "Security Boundaries",
          body: "The project is framed as a practical secure-message intake experiment, not as an audited security product. The key design boundary is that plaintext should stay in the browser, while future work should include external validation of threat assumptions."
        }
      ],
      keyTakeaways: [
        "Security and usability can be aligned with careful abstraction.",
        "Security-sensitive projects should clearly document threat assumptions and validation limits.",
        "Small privacy-first tools benefit from minimizing persistence and reducing server-side exposure.",
        "Iterative expansion after an MVP can refine both the UX and the underlying security model."
      ]
    }
  },
  {
    title: "Frontend Modernization in Banking Ecosystem",
    link: "",
    category: ["Enterprise", "Legacy Software Migration"],
    tech: ["Angular 2", "jQuery", "single-spa", "RxJS"],
    description: [
      "Modernized legacy web client applications within a banking environment.",
      "Planned a transition from jQuery-heavy interfaces to Angular 2-based modular frontend systems.",
      "Architected a migration strategy and tested microfrontend orchestration using single-spa."
    ],
    caseStudy: {
      slug: "banking-frontend-modernization",
      heroImage: "/projects/ingbank3.jpg",
      overview: "A banking frontend modernization engagement focused on moving legacy jQuery-driven interfaces toward Angular 2 and exploring microfrontend orchestration with single-spa. The work emphasized incremental migration, lower coupling, and cross-team technical alignment.",
      role: "Contractor / Frontend Lead",
      duration: "2017 - 2018",
      team: "Extia (Banking Client)",
      challenge: "The existing frontend ecosystem relied on jQuery-heavy UI logic and iframe-based product integration. This created tight coupling between products, made cross-team UI changes difficult, and increased delivery risk in a banking environment where production disruption had to be minimized.",
      approach: [
        "Defined a phased jQuery-to-Angular 2 migration strategy so teams could replace high-impact modules incrementally rather than rewriting entire applications.",
        "Introduced RxJS and Angular component patterns as a path away from tightly coupled imperative UI code.",
        "Evaluated single-spa as a replacement for iframe-based product composition and built a working microfrontend proof of concept.",
        "Delivered an integration demo with two product teams to validate interoperability with minimal changes to existing codebases.",
        "Documented migration strategy, architecture notes, and integration guidelines for product teams, technical leads, and governance stakeholders."
      ],
      results: [
        {
          metric: "Architecture",
          value: "Migration path",
          description: "Established a practical route from jQuery-heavy frontends toward Angular 2 modules"
        },
        {
          metric: "Integration",
          value: "Microfrontends",
          description: "Validated a single-spa approach as an alternative to iframe-based UI composition"
        },
        {
          metric: "Alignment",
          value: "Documented",
          description: "Created technical guidance to help multiple teams evaluate and adopt the migration approach"
        }
      ],
      techDeepDive: [
        {
          heading: "Migration Strategy",
          body: "The migration strategy prioritized incremental replacement of high-impact jQuery modules with Angular 2 components. This reduced rewrite risk and gave teams a way to adopt newer patterns while preserving existing production flows."
        },
        {
          heading: "Microfrontend POC",
          body: "The single-spa proof of concept demonstrated how independently developed frontend applications could be orchestrated by a shared shell. The goal was not to declare microfrontends universally superior, but to validate a lower-coupling alternative to iframe composition for this ecosystem."
        },
        {
          heading: "Knowledge Sharing",
          body: "Because the technical change crossed team boundaries, documentation was part of the deliverable. Architecture notes and integration guidelines helped product teams and technical leaders evaluate the migration path without relying only on a demo."
        }
      ],
      keyTakeaways: [
        "Incremental migration safely reduces operational risk in large, critical banking systems.",
        "Microfrontend architecture can improve team autonomy, but only with strong ownership boundaries and governance.",
        "Early proof-of-concepts are useful when they test integration constraints, not only framework feasibility.",
        "Documentation is a delivery artifact when architecture decisions must be adopted by multiple teams."
      ]
    }
  }
];
