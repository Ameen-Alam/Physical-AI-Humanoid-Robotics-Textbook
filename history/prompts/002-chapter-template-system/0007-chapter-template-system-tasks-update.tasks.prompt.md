---
id: 0007
title: Chapter Template System Tasks Update
stage: tasks
date: 2025-12-01
surface: agent
model: claude-sonnet-4-5
feature: 002-chapter-template-system
branch: 004-ch01-ros2-architecture
user: system
command: /sp.tasks 002-chapter-template-system
labels: ["tasks", "migration", "template-system", "gap-fix"]
links:
  spec: specs/002-chapter-template-system/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/002-chapter-template-system/tasks.md
tests:
  - Task format validation (checklist syntax)
  - Task count verification (79 total)
  - Migration phase addition validation
---

## Prompt

002-chapter-template-system

## Response snapshot

Updated tasks.md for feature 002-chapter-template-system to include critical **Migration Phase** (Phase 9) that applies the template system to existing 9 chapter files.

**Key Updates**:
1. **Added Phase 9: Migration** - 10 new tasks (T053-T062) to migrate existing chapters to use new components
   - T053-T060: Migrate 8 chapter files in parallel (module indexes, intro, setup guides)
   - T061-T062: Build validation and visual inspection
2. **Updated task counts**: 69 → 79 tasks total
3. **Updated MVP scope**: Now includes Migration phase (37 tasks vs 27) - critical for visible upgrade
4. **Updated dependencies**: Migration depends on US2 completion, blocks final deployment
5. **Updated implementation strategy**: Emphasizes migration is when upgrade becomes visible to readers

**Rationale**: Analysis revealed that while infrastructure (templates, components, CSS) was built, existing chapters were NOT updated to use it. Migration phase closes this gap.

**Task Format**: All tasks follow required checklist format:
- `- [ ] T### [P?] [Story?] Description with file path`
- Migration tasks marked with [P] for parallel execution (different files)
- Migration tasks marked with [MIGRATION] label for traceability

**Total Tasks**: 79
- Setup: 4 | Foundational: 5 | US2: 7 | US1: 11 | US6: 6 | US3: 7 | US4: 8 | US5: 4 | **Migration: 10** | Polish: 17

## Outcome

- ✅ Impact: Added critical missing migration phase - closes gap between infrastructure built and system applied
- 🧪 Tests: Task format validation passed, all 79 tasks follow checklist syntax
- 📁 Files: Updated specs/002-chapter-template-system/tasks.md
- 🔁 Next prompts: /sp.implement 002-chapter-template-system to execute tasks, starting with migration phase
- 🧠 Reflection: Original tasks.md focused on building system but didn't account for applying it to existing content. Migration phase is essential for MVP - infrastructure alone doesn't deliver visible value.

## Evaluation notes (flywheel)

- Failure modes observed: Task generation initially missing migration/adoption phase; spec didn't explicitly call out existing content migration as deliverable
- Graders run and results (PASS/FAIL): Manual validation PASS - all task IDs sequential, checkboxes present, file paths included
- Prompt variant (if applicable): /sp.tasks with explicit feature name (002-chapter-template-system)
- Next experiment (smallest change to try): Execute Phase 9 (Migration) first to validate component integration before building remaining features
