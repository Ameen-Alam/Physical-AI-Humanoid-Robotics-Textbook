<!--
SYNC IMPACT REPORT - Constitution v1.0.0

Version Change: [INITIAL] → 1.0.0 (Initial ratification)

Modified Principles:
  - [NEW] I. Content Accuracy & Technical Rigor
  - [NEW] II. Educational Clarity & Accessibility
  - [NEW] III. Consistency & Standards (NON-NEGOTIABLE)
  - [NEW] IV. Docusaurus Structure & Quality
  - [NEW] V. Code Example Quality
  - [NEW] VI. Deployment & Publishing Standards

Added Sections:
  - Content Development Workflow
  - Quality Gates & Review Process

Removed Sections: None (initial version)

Templates Requiring Updates:
  ✅ spec-template.md - Aligned (user stories for chapters/sections)
  ✅ plan-template.md - Aligned (constitution check gates added)
  ✅ tasks-template.md - Aligned (phases match content workflow)

Follow-up TODOs: None
-->

# Physical AI Humanoid Robotics Textbook Constitution

## Core Principles

### I. Content Accuracy & Technical Rigor

Every technical claim, formula, code example, and research reference MUST be accurate and verifiable.

**Rules**:
- All mathematical equations and physics principles MUST be validated against authoritative sources
- Code examples MUST be tested and functional (no pseudocode unless explicitly marked)
- Citations REQUIRED for research findings, algorithms, and external concepts using standard academic format
- Technical claims require either: (a) citation, (b) derivation/proof, or (c) experimental validation
- Version specifications REQUIRED for all software dependencies and APIs
- No speculative or unverified claims about hardware capabilities, safety limits, or performance

**Rationale**: Inaccurate technical content in educational material damages learner trust and creates downstream errors in student implementations. Robotics combines physics, mathematics, and software - errors compound across domains.

### II. Educational Clarity & Accessibility

Content MUST progress logically from fundamentals to advanced topics with clear learning pathways.

**Rules**:
- Each chapter/section MUST declare explicit prerequisites (prior chapters or external knowledge)
- Complex concepts MUST be introduced via: (1) motivation/context, (2) simple example, (3) formal definition, (4) practical application
- Target audience explicitly defined (undergraduate, graduate, practitioners - specify per section if mixed)
- Learning objectives MUST be measurable and stated at chapter start
- Include at least one worked example per major concept
- Diagrams REQUIRED for spatial concepts, system architectures, and multi-step processes
- Glossary terms linked on first use in each chapter

**Rationale**: Humanoid robotics spans mechanical, electrical, and software domains. Without careful scaffolding, readers get lost in abstraction gaps. Clear progression enables self-directed learning.

### III. Consistency & Standards (NON-NEGOTIABLE)

Uniform terminology, formatting, and structure across all content.

**Rules**:
- Terminology consistency enforced via `docs/glossary.md` (single source of truth)
- Code formatting: Language-specific standards (e.g., PEP 8 for Python, ROS 2 conventions for robotics code)
- Chapter structure MUST follow template:
  1. Learning Objectives
  2. Prerequisites
  3. Content (Introduction → Core Concepts → Examples → Applications)
  4. Summary
  5. Exercises (at least 3: conceptual, computational, implementation)
  6. References
- Voice: Second person for tutorials ("you will implement"), third person for theory ("the system computes")
- Notation: Mathematical symbols defined in `docs/notation.md` and used consistently
- Units: SI units unless domain-specific convention (e.g., degrees for joint angles, explicitly noted)

**Rationale**: Inconsistency creates cognitive load. Students spend mental energy reconciling notation/terminology instead of learning concepts. Standards enable scalable collaboration.

### IV. Docusaurus Structure & Quality

Documentation site MUST be navigable, searchable, and maintainable.

**Rules**:
- One concept per page (granular, linkable content - max 2000 words per page)
- Sidebar organization: Hierarchical by complexity (Fundamentals → Intermediate → Advanced → Specialized Topics)
- Metadata REQUIRED: `title`, `description`, `keywords`, `sidebar_position` in every `.md` frontmatter
- Internal links use relative paths: `[text](../path/file.md)` not absolute URLs
- Assets in `/static/img/[chapter-name]/` with descriptive names: `inverse-kinematics-diagram.svg` not `fig1.png`
- Alt text MANDATORY for accessibility (describe diagram content, not "image of robot")
- Search optimization: Keywords in headings, first paragraph, and metadata

**Rationale**: Docusaurus builds static sites - poor organization creates fragile cross-references. Discoverability depends on metadata and search. Accessibility is non-negotiable for educational content.

### V. Code Example Quality

All code MUST be runnable, well-documented, and pedagogically sound.

**Rules**:
- Language specification in fenced blocks: ```python not ```
- Complete examples (not fragments) unless explicitly marked as "excerpt from [full file path]"
- Comments explain WHY not WHAT (assume reader knows language syntax)
- Dependencies listed with versions: `# Requires: numpy>=1.24.0, robotics-toolbox-python==1.1.0`
- Repository structure: `/examples/[chapter-name]/[example-name]/` with README explaining purpose and usage
- Test coverage: Each example includes validation script or test case
- Safety warnings: Hardware-interacting code MUST include safety comments (e.g., "ensure e-stop accessible")
- Prefer standard libraries and widely-adopted packages (ROS 2, NumPy, PyTorch) over obscure dependencies

**Rationale**: Students learn by running and modifying code. Non-functional examples break trust. Robotics code can control physical systems - safety context is critical. Version pinning prevents "works on my machine" issues.

### VI. Deployment & Publishing Standards

Published content MUST build successfully, load quickly, and meet quality gates.

**Rules**:
- `main` branch: Production-ready content only (deployed to GitHub Pages)
- Feature branches: `chapter/[name]` or `fix/[issue]` with PR-based review
- Build gates (MUST pass before merge):
  - Docusaurus build completes without errors or warnings
  - Broken links checker passes (internal and external links)
  - Spell check passes (technical terms in dictionary)
  - Images optimized (< 500KB per file, use `svgo` for SVGs)
- Performance targets:
  - Initial page load: < 3 seconds (Lighthouse)
  - Largest Contentful Paint (LCP): < 2.5s
  - Cumulative Layout Shift (CLS): < 0.1
- SEO requirements:
  - Open Graph tags for social sharing
  - Sitemap generated automatically
  - robots.txt configured
- Versioning: Major book revisions tagged as releases (v1.0, v2.0)
- Redirects: Deprecated URLs MUST redirect to updated content (maintain in `docusaurus.config.js`)

**Rationale**: GitHub Pages deployment is automated - build failures block publishing. Slow page loads harm user experience on all devices. Broken links damage credibility. Performance and SEO determine discoverability.

## Content Development Workflow

### Spec-Driven Chapter Creation

**Process**:
1. **Specification** (`/sp.specify`): Define chapter scope, learning objectives, prerequisites, key concepts
2. **Planning** (`/sp.plan`): Outline structure, identify diagrams needed, plan code examples, research sources
3. **Task Breakdown** (`/sp.tasks`): Decompose into writing tasks (intro, concept sections, examples, exercises)
4. **Implementation**: Write content following constitution principles
5. **Review**: Technical accuracy review + peer review for clarity
6. **Publishing**: Build validation → PR → Merge to main → Auto-deploy

**Artifacts**:
- `specs/[chapter-name]/spec.md` - Chapter requirements and learning objectives
- `specs/[chapter-name]/plan.md` - Content structure and resource plan
- `specs/[chapter-name]/tasks.md` - Granular writing tasks
- `history/prompts/[chapter-name]/` - AI collaboration records (PHRs)
- `history/adr/` - Architectural decisions (e.g., framework choice, chapter organization)

**Content Types**:
- **Theory Chapters**: Mathematical foundations, algorithms, proofs
- **Implementation Chapters**: Code walkthroughs, system integration
- **Application Chapters**: Case studies, real-world examples
- **Reference Chapters**: API docs, hardware specs, datasets

### Architectural Decision Records (ADR)

**Triggers** (suggest ADR creation when ALL three conditions met):
- **Impact**: Long-term consequences (e.g., choosing ROS 2 vs. custom middleware, simulation framework)
- **Alternatives**: Multiple viable options with significant tradeoffs
- **Scope**: Decision affects multiple chapters or overall book structure

**Examples of ADR-worthy decisions**:
- Selection of robotics framework/ecosystem (ROS 2, Isaac Sim, etc.)
- Chapter organization strategy (by subsystem vs. by complexity)
- Code language choice (Python vs. C++ for examples)
- Simulation vs. hardware-first pedagogical approach

**Process**: Suggest via "📋 Architectural decision detected: [brief]. Document reasoning? Run `/sp.adr [title]`" - wait for user consent.

## Quality Gates & Review Process

### Pre-Merge Gates (NON-NEGOTIABLE)

All pull requests MUST pass:
1. **Build Validation**: Docusaurus build succeeds without warnings
2. **Link Check**: No broken internal/external links
3. **Technical Review**: Domain expert validates accuracy (formulas, code, claims)
4. **Peer Review**: Another contributor checks clarity and consistency
5. **Accessibility Check**: Alt text present, heading hierarchy correct, contrast ratios meet WCAG AA
6. **Performance Check**: Lighthouse score ≥ 90 for performance, accessibility, SEO

### Content Review Criteria

**Technical Accuracy**:
- [ ] Formulas validated against cited sources
- [ ] Code examples tested and functional
- [ ] Hardware specifications current and cited
- [ ] Safety considerations addressed for physical systems

**Educational Quality**:
- [ ] Learning objectives measurable and addressed
- [ ] Prerequisites clearly stated
- [ ] Progression from simple to complex
- [ ] Examples clarify concepts (not just demonstrate syntax)

**Consistency**:
- [ ] Terminology matches glossary
- [ ] Notation matches standards document
- [ ] Chapter structure follows template
- [ ] Code formatting follows style guide

**Production Quality**:
- [ ] Images optimized and have alt text
- [ ] Metadata complete
- [ ] Cross-references accurate
- [ ] No placeholder text (TODO, TBD, etc.)

### Review Roles

- **Technical Reviewer**: Validates accuracy (robotics domain expert)
- **Peer Reviewer**: Checks clarity and educational value (target audience perspective)
- **Editor**: Enforces consistency and standards
- **Maintainer**: Final approval and merge authority

## Governance

**Constitution Authority**: This document supersedes all other development practices. All PRs, content reviews, and planning decisions MUST verify compliance with these principles.

**Amendment Process**:
1. Proposed changes documented in issue with rationale
2. Impact analysis on existing content and workflow
3. Team discussion and approval
4. Migration plan for existing content (if needed)
5. Version increment following semantic versioning
6. Update dependent templates and documentation

**Compliance Verification**:
- All PRs include checklist mapping changes to constitution principles
- Quarterly audits of published content for consistency drift
- Template updates propagated within 1 week of constitution amendment
- Violations require documented justification (complexity tracking in plan.md)

**Complexity Justification**: Any deviation from constitution principles (e.g., non-standard notation for domain-specific reasons, external dependencies, non-SI units) MUST be documented in relevant plan.md with:
- What principle is violated
- Why deviation necessary (specific requirement)
- What simpler alternative was rejected and why

**Runtime Guidance**: Use `CLAUDE.md` for AI assistant behavior and workflow execution. Constitution defines WHAT we build; CLAUDE.md defines HOW we collaborate with AI agents.

**Version**: 1.0.0 | **Ratified**: 2025-11-29 | **Last Amended**: 2025-11-29
