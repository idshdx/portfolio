import type { Interest } from './types';

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
