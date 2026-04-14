# International Student Database Program (ISP Database)

## Overview
**Project Type:** Data Migration & Web Application Modernization  
**Client / Organization:** Canadian Universities (B2B clients)  
**Timeline:** [Placeholder – add duration]  
**Role:** Software Developer / Data Migration Engineer / Support Engineer  
**Tech Stack:** LAMP (Linux, Apache, MySQL/PHP), PostgreSQL, Symfony 2, Razor ETL, Microsoft Access, VBA

The International Student Database Program (ISP Database) is a platform designed to manage international student data across multiple institutions. The project focused on modernizing a legacy Microsoft Access-based system into a scalable, web-based architecture capable of handling multi-database environments.

**Note:** The platform is not publicly accessible. Internal tools, scripts, and database migration workflows were used during development and deployment.

---

## Problem Statement
The legacy system was built on Microsoft Access, which introduced multiple constraints:
- Limited scalability and performance
- Difficult integration with modern systems
- Fragmented data across multiple client-specific databases (SQL Server, MySQL, Oracle, Access)
- High risk of data inconsistency during operations

Additionally, each client (universities) used different database vendors, requiring a flexible and vendor-agnostic migration strategy.

---

## Objectives
- Migrate the legacy Access application to a web-based LAMP architecture
- Normalize and redesign the data model for relational databases
- Ensure seamless and integrity-preserving data migration
- Support heterogeneous database systems (SQL Server, Oracle, MySQL, Access)
- Build a maintainable MVC-based backend using Symfony 2

---

## Solution

### 1. System Migration (Access → LAMP)
Re-architected the application from a desktop-based Microsoft Access solution to a web-based platform using a LAMP stack.

Key actions:
- Decoupled business logic from Access forms and VBA scripts
- Reimplemented core logic in PHP
- Enabled multi-user concurrent access via web interface

---

### 2. Database Redesign & Normalization
Designed and implemented a new relational schema aligned with normalization principles.

Key aspects:
- Unified schema to accommodate multiple source database formats
- Designed for portability across different RDBMS systems
- Applied normalization to reduce redundancy and improve consistency

---

### 3. Data Access Layer (Symfony 2)
Implemented the model layer using Symfony 2 following MVC principles.

Key decisions:
- Used raw SQL queries instead of ORM/query builder for better control and performance during migration
- Built custom data access methods for complex queries and transformations

---

### 4. Data Migration Pipeline (Razor ETL)
Owned the full data migration lifecycle using Razor ETL.

Process:
- Extracted data from Microsoft Access, SQL Server, Oracle, and MySQL
- Transformed heterogeneous schemas into a unified format
- Loaded validated data into the new storage system

Focus areas:
- Referential integrity preservation
- Cross-database compatibility handling
- Data validation and reconciliation

---

### 5. DevOps & Deployment Execution
Handled operational aspects of migration and deployment.

Responsibilities:
- Executed client data migrations into new environments
- Managed database provisioning and schema deployment
- Ensured successful cutover with minimal disruption

---

## Challenges
- First exposure to a full-scale enterprise migration project
- Reverse-engineering legacy Microsoft Access + VBA logic
- Handling inconsistencies across SQL Server, Oracle, MySQL, and Access
- Learning Symfony 2 and LAMP stack within delivery constraints
- Ensuring zero data loss across multiple client migrations
- Balancing development, migration, and support responsibilities

---

## Results
- Successfully migrated client data into the new system with full integrity preservation
- Delivered a vendor-agnostic migration approach supporting multiple database systems
- Enabled centralized, scalable data management for university clients
- Reduced dependency on legacy Access-based workflows

**Metrics:**  
[Placeholder – number of clients migrated]  
[Placeholder – total records migrated]  
[Placeholder – migration success rate / error rate]

---

## Impact
- Standardized data handling across heterogeneous client environments
- Improved reliability and maintainability of the platform
- Enabled future extensibility for additional integrations

---

## Key Learnings
- Cross-database interoperability (SQL Server, Oracle, MySQL, Access)
- Data modeling and normalization in real-world systems
- ETL pipeline design and execution
- Practical DevOps skills in deployment and migration
- Trade-offs between ORM vs raw SQL in high-control scenarios
- Working with legacy technologies (VBA) alongside modern frameworks

---

## Additional Responsibilities
- Acted as support engineer for multiple university clients
- Diagnosed and resolved data-related issues post-migration
- Assisted clients during onboarding and transition phases

---

## Personal Reflection
This was the first large-scale project I worked on, requiring rapid upskilling across multiple domains: backend development, database design, ETL processes, and DevOps.

Despite initial complexity, the experience established a strong foundation in data migration and system modernization, which became a recurring theme in later work.

---

## Optional Additions (to enhance portfolio)
- Sample DBA / migration scripts [Recommended]
- Architecture diagram [Placeholder]
- Data flow diagram (ETL pipeline) [Placeholder]
- Before vs After schema comparison [Placeholder]

