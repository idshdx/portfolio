import type { OssProject } from './types';

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
