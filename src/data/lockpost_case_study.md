# Lockpost — Secure Message Intake via Shareable Links

**Role:** Full-stack developer (solo)  
**Timeline:** Initial build (few days) + 2 iterative expansion phases (each a few days)  
**Project type:** Academic project extended into a hobby / FOSS application  
**Repository:** https://github.com/idshdx/lockpost  
**Live demo:** [Add link if deployed]

---

## Overview

Lockpost is a lightweight web application designed to enable secure message intake through shareable links. The goal is to remove friction from encrypted communication by allowing non-technical users to send confidential information without needing to understand PGP workflows.

The system generates a unique link tied to a recipient’s public key. Messages are encrypted client-side before submission and then signed server-side before being forwarded via email.

---

## Problem Statement

Secure communication tools typically require both sender and receiver to be familiar with encryption tools such as PGP. This creates usability friction and limits adoption in real-world scenarios where simplicity and speed are critical.

Lockpost addresses this gap by abstracting cryptographic complexity while preserving strong security guarantees.

---

## Solution

The application introduces a streamlined flow:

1. A user inputs an email associated with a public PGP key
2. The system retrieves the public key from key servers
3. A unique, time-bound shareable link is generated
4. The sender accesses the link and writes a message
5. The message is encrypted in-browser using the recipient’s public key
6. The backend signs the encrypted payload
7. The message is forwarded via email to the recipient

An additional verification interface allows recipients to validate the authenticity of the message using the server’s signature.

---

## Architecture & Technical Decisions

**Backend:** PHP (Symfony-based, selectively used)  
**Frontend:** Twig + Stimulus + OpenPGP.js + Bootstrap  
**Infrastructure:** Docker, NGINX, PHP-FPM, MailHog  

Key architectural characteristics:

- Stateless design (no message persistence)
- No tracking, cookies, or analytics
- Client-side encryption using OpenPGP.js
- Token-based access using symmetric encryption + integrity validation
- Server-side PGP signing for authenticity verification

Note: Symfony is used primarily as a structural base rather than leveraging its full ecosystem. The stack was not optimized for the use case but was retained to meet initial constraints.

---

## My Contribution

End-to-end ownership:

- System design and architecture
- Cryptographic flow (key retrieval, encryption, signing, verification)
- Backend implementation
- Frontend implementation
- Token generation and validation logic
- Email delivery pipeline
- Local development and containerization setup

---

## Results

- Delivered a functional secure message intake system within a constrained timeframe
- Successfully abstracted PGP complexity into a simple UX flow
- Built a privacy-first application with no data retention
- Established a working foundation for a security-focused FOSS project

[Add metrics if available: usage, performance, coverage, etc.]

---

## What I Learned

- Identified the importance of clear project specifications and expected outcomes early in development
- First experience recording and presenting a technical project; highlighted gaps in presentation skills and the need for improvement
- Reinforced interest in privacy-first and security-oriented application design
- Gained practical exposure to cryptographic workflows and threat assumptions
- Learned to actively seek external validation for security-related design decisions

---

## Challenges

[Add if desired]
- Balancing simplicity with security guarantees
- Working with a stack that was not ideal for the problem space
- Managing cryptographic operations in the browser reliably

---

## Future Work

- UI/UX improvements to reduce friction and improve clarity
- Deploy a live, publicly accessible instance
- Refine security assumptions and potentially conduct external audits
- Optimize or reconsider parts of the tech stack

---

## Key Takeaways

- Security and usability can be aligned with careful abstraction
- Even small projects can benefit from a privacy-first design mindset
- Iterative expansion post-MVP is effective for refining both product and technical direction

---

## Optional Additions

[Insert screenshots]  
[Insert architecture diagram]  
[Insert demo walkthrough video]  

