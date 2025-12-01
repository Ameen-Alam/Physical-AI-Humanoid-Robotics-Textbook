---
description: "Task list for Chapter Template System implementation"
---

# Tasks: Chapter Template System

**Input**: Design documents from `/specs/002-chapter-template-system/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: No formal test tasks included per specification - validation occurs via build-time schema validation and manual testing.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

This is a Docusaurus web application project:
- Components: `src/components/`
- Theme overrides: `src/theme/`
- Styles: `src/css/`
- Scripts: `scripts/`
- Templates: `.specify/templates/`
- Documentation: `docs/references/`
- Contracts: `specs/002-chapter-template-system/contracts/` (design docs)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and dependency verification

- [ ] T001 Verify Docusaurus 3.x and MDX are installed and configured
- [ ] T002 [P] Install required npm dependencies (ajv, gray-matter, glob) if not present
- [ ] T003 [P] Create src/components/ directory structure if not exists
- [ ] T004 [P] Create scripts/ directory if not exists

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [ ] T005 Create metadata validation script in scripts/validate-metadata.js
- [ ] T006 [P] Add prebuild script to package.json to run validation
- [ ] T007 [P] Copy JSON Schema from specs/002-chapter-template-system/contracts/chapter-metadata-schema.json to project root contracts/ directory
- [ ] T008 Create MDX component registration file in src/theme/MDXComponents.js
- [ ] T009 [P] Add base CSS structure for custom components in src/css/custom.css

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 2 - Display Learning Components (Priority: P1) 🎯 MVP

**Goal**: Readers can see learning objectives and prerequisites prominently displayed at the start of each chapter

**Independent Test**: Open any chapter with learning_objectives and prerequisites in frontmatter and verify both components render correctly above main content

### Implementation for User Story 2

- [ ] T010 [P] [US2] Create LearningObjectives component in src/components/LearningObjectives.tsx
- [ ] T011 [P] [US2] Create Prerequisites component in src/components/Prerequisites.tsx
- [ ] T012 [US2] Register LearningObjectives and Prerequisites in src/theme/MDXComponents.js
- [ ] T013 [US2] Add CSS styles for .learning-objectives class in src/css/custom.css
- [ ] T014 [US2] Add CSS styles for .prerequisites class in src/css/custom.css
- [ ] T015 [US2] Test LearningObjectives component by creating a test chapter in docs/test/
- [ ] T016 [US2] Test Prerequisites component with prerequisite links and time display

**Checkpoint**: At this point, User Story 2 should be fully functional - learning components display correctly

---

## Phase 4: User Story 1 - Create New Chapter from Template (Priority: P1) 🎯 MVP

**Goal**: Content authors can create a new chapter using a standardized template with all required sections

**Independent Test**: Copy template to docs/test/, fill in frontmatter and content, verify all sections present and validation passes

### Implementation for User Story 1

- [ ] T017 [US1] Create chapter template file in .specify/templates/chapter-template.md
- [ ] T018 [US1] Add frontmatter section with all 9 required fields to template
- [ ] T019 [US1] Add content type decision tree (HTML comments) at template top
- [ ] T020 [US1] Add component import statements to template
- [ ] T021 [US1] Add standard section structure (Introduction, Core Content, Exercises, Summary, References) to template
- [ ] T022 [US1] Add inline guidance comments for each content type variant (Tutorial, Concept, Hands-on Lab, Reference)
- [ ] T023 [US1] Add conditional section markers (e.g., <!-- [TUTORIAL] ... -->) throughout template
- [ ] T024 [US1] Add example content for each section showing proper usage
- [ ] T025 [US1] Test template by creating a sample Tutorial chapter in docs/test/tutorial-example.md
- [ ] T026 [US1] Test template by creating a sample Concept chapter in docs/test/concept-example.md
- [ ] T027 [US1] Verify metadata validation passes for template-created chapters

**Checkpoint**: At this point, User Stories 1 AND 2 should both work - authors can create chapters from template with learning components

---

## Phase 5: User Story 6 - Summarize Key Takeaways (Priority: P2)

**Goal**: Readers can review key concepts via a visually distinct Key Takeaways summary box

**Independent Test**: Add KeyTakeaways component to a chapter and verify it renders as a styled callout with checkmark icon

### Implementation for User Story 6

- [ ] T028 [P] [US6] Create KeyTakeaways component in src/components/KeyTakeaways.tsx
- [ ] T029 [US6] Register KeyTakeaways in src/theme/MDXComponents.js
- [ ] T030 [US6] Add CSS styles for .key-takeaways class in src/css/custom.css
- [ ] T031 [US6] Add checkmark icon styling for .key-takeaways::before pseudo-element
- [ ] T032 [US6] Update template in .specify/templates/chapter-template.md to include KeyTakeaways component in Summary section
- [ ] T033 [US6] Test KeyTakeaways component in docs/test/ chapter

**Checkpoint**: Key Takeaways component functional and integrated into template

---

## Phase 6: User Story 3 - Add Code Examples with Standards (Priority: P2)

**Goal**: Authors can add code examples with automatic syntax highlighting, line numbers, copy buttons, and line highlighting

**Independent Test**: Add various code blocks to a chapter using documented syntax and verify all features render correctly

### Implementation for User Story 3

- [ ] T034 [P] [US3] Document code block syntax highlighting in docs/references/code-standards.md
- [ ] T035 [P] [US3] Document showLineNumbers option with examples in docs/references/code-standards.md
- [ ] T036 [P] [US3] Document line highlighting syntax {1,4-6} with examples in docs/references/code-standards.md
- [ ] T037 [P] [US3] Document title="filename.ext" option with examples in docs/references/code-standards.md
- [ ] T038 [P] [US3] Document comment-based highlighting (// highlight-next-line) with examples in docs/references/code-standards.md
- [ ] T039 [US3] Add code block examples to chapter template in .specify/templates/chapter-template.md
- [ ] T040 [US3] Test all code block features by creating docs/test/code-examples.md with comprehensive examples

**Checkpoint**: Code standards documented and tested

---

## Phase 7: User Story 4 - Use Callouts for Important Information (Priority: P2)

**Goal**: Authors can use five callout types (note, tip, warning, danger, info) to highlight important content

**Independent Test**: Add each callout type to a chapter and verify correct styling, icons, and nesting behavior

### Implementation for User Story 4

- [ ] T041 [P] [US4] Document :::note callout with examples in docs/references/callout-guide.md
- [ ] T042 [P] [US4] Document :::tip[Custom Title] callout with examples in docs/references/callout-guide.md
- [ ] T043 [P] [US4] Document :::warning callout with examples in docs/references/callout-guide.md
- [ ] T044 [P] [US4] Document :::danger callout with examples in docs/references/callout-guide.md
- [ ] T045 [P] [US4] Document :::info callout with examples in docs/references/callout-guide.md
- [ ] T046 [US4] Document nested callouts with examples in docs/references/callout-guide.md
- [ ] T047 [US4] Add callout examples to chapter template in .specify/templates/chapter-template.md
- [ ] T048 [US4] Test all callout types in docs/test/callout-examples.md with nesting scenarios

**Checkpoint**: All five callout types documented and tested

---

## Phase 8: User Story 5 - Navigate Between Chapters (Priority: P3)

**Goal**: Readers can navigate sequentially using automatic prev/next links at chapter bottom

**Independent Test**: Navigate to any chapter and verify prev/next links appear correctly with adjacent chapter titles

### Implementation for User Story 5

- [ ] T049 [US5] Verify Docusaurus theme configuration enables automatic prev/next navigation in docusaurus.config.js
- [ ] T050 [US5] Document how to override prev/next links with pagination_prev/pagination_next in docs/references/navigation-guide.md
- [ ] T051 [US5] Add pagination override examples to chapter template in .specify/templates/chapter-template.md
- [ ] T052 [US5] Test prev/next navigation by creating a multi-chapter sequence in docs/test/

**Checkpoint**: Navigation functional and documented

---

## Phase 9: Migration - Apply Template System to Existing Chapters

**Purpose**: Migrate existing 9 chapter files to use the new template system components

**⚠️ CRITICAL**: This phase applies the template system infrastructure to actual content so readers see the upgraded layout

### Migration for Existing Chapters

- [X] T053 [P] [MIGRATION] Migrate docs/module-1-ros2/index.md to use LearningObjectives and Prerequisites components
- [X] T054 [P] [MIGRATION] Migrate docs/module-2-digital-twin/index.md to use LearningObjectives and Prerequisites components
- [X] T055 [P] [MIGRATION] Migrate docs/module-3-isaac/index.md to use LearningObjectives and Prerequisites components
- [X] T056 [P] [MIGRATION] Migrate docs/module-4-vla-humanoids/index.md to use LearningObjectives and Prerequisites components
- [X] T057 [P] [MIGRATION] Migrate docs/intro.md to use LearningObjectives component (no prerequisites for intro)
- [X] T058 [P] [MIGRATION] Migrate docs/setup/workstation.md to use Prerequisites component
- [X] T059 [P] [MIGRATION] Migrate docs/setup/edge-kit.md to use Prerequisites component
- [X] T060 [P] [MIGRATION] Migrate docs/setup/cloud.md to use Prerequisites component
- [X] T061 [MIGRATION] Run npm run build after all migrations to verify no errors
- [ ] T062 [MIGRATION] Visually inspect each migrated chapter to verify component rendering

**Checkpoint**: All existing chapters now use the new template system - readers see upgraded layout

---

## Phase 10: Polish & Cross-Cutting Concerns

**Purpose**: Additional components, comprehensive documentation, and final validation

- [ ] T063 [P] Create ExerciseBlock component in src/components/ExerciseBlock.tsx with progressive hints
- [ ] T064 Register ExerciseBlock in src/theme/MDXComponents.js
- [ ] T065 Add CSS styles for .exercise-block classes in src/css/custom.css
- [ ] T066 Add difficulty badge styles (.badge-beginner, .badge-intermediate, .badge-advanced) in src/css/custom.css
- [ ] T067 [P] Add dark mode CSS overrides for all components in src/css/custom.css
- [ ] T068 [P] Create comprehensive content style guide in docs/references/content-style-guide.md
- [ ] T069 [P] Document Bloom's Taxonomy verbs for learning objectives in docs/references/content-style-guide.md
- [ ] T070 [P] Document content type guidelines (when to use Tutorial vs Concept vs Lab vs Reference) in docs/references/content-style-guide.md
- [ ] T071 [P] Document voice and tone guidelines in docs/references/content-style-guide.md
- [ ] T072 Add ExerciseBlock examples to chapter template in .specify/templates/chapter-template.md
- [ ] T073 Update quickstart.md with final examples and troubleshooting guide in specs/002-chapter-template-system/quickstart.md
- [ ] T074 Create 4 complete example chapters (Tutorial, Concept, Hands-on Lab, Reference) in docs/examples/
- [ ] T075 Run npm run build to verify all validation passes for example chapters
- [ ] T076 Test all components in both light and dark modes
- [ ] T077 Verify keyboard navigation works for all interactive components
- [ ] T078 Update main README.md with link to template usage instructions
- [ ] T079 Create contracts/ directory symlink at project root pointing to specs/002-chapter-template-system/contracts/

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3-8)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (US2+US1 → US6 → US3 → US4 → US5)
- **Migration (Phase 9)**: Depends on US2 completion (components must exist) - CRITICAL for visible upgrade
- **Polish (Phase 10)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 2 (P1) - Phase 3**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 1 (P1) - Phase 4**: Depends on US2 components existing (uses LearningObjectives and Prerequisites in template)
- **User Story 6 (P2) - Phase 5**: Can start after Foundational - No dependencies on other stories
- **User Story 3 (P2) - Phase 6**: Can start after Foundational - Documentation only, no code dependencies
- **User Story 4 (P2) - Phase 7**: Can start after Foundational - Documentation only, no code dependencies
- **User Story 5 (P3) - Phase 8**: Can start after Foundational - Configuration only, no code dependencies

### Within Each User Story

- Component creation before registration
- Registration before testing
- CSS styles in parallel with components
- Documentation can happen in parallel with implementation
- Template updates after components are tested

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel (T002, T003, T004)
- All Foundational tasks marked [P] can run in parallel (T006, T007, T009)
- Within US2: T010 and T011 can run in parallel (different components)
- Within US2: T013 and T014 can run in parallel (different CSS classes)
- Within US3: T034-T038 can all run in parallel (different documentation sections)
- Within US4: T041-T045 can all run in parallel (different callout types)
- Within Polish: T053, T058-T061, T064 can run in parallel (different files)
- US6, US3, US4, US5 can be worked on in parallel by different team members after US1+US2 complete

---

## Parallel Example: User Story 2

```bash
# Launch both component implementations together:
Task: "Create LearningObjectives component in src/components/LearningObjectives.tsx"
Task: "Create Prerequisites component in src/components/Prerequisites.tsx"

# Launch both CSS styling tasks together:
Task: "Add CSS styles for .learning-objectives class in src/css/custom.css"
Task: "Add CSS styles for .prerequisites class in src/css/custom.css"
```

---

## Parallel Example: Foundational Phase

```bash
# These tasks can all start at the same time:
Task: "Add prebuild script to package.json to run validation"
Task: "Copy JSON Schema from specs/ to project root contracts/"
Task: "Add base CSS structure for custom components in src/css/custom.css"
```

---

## Implementation Strategy

### MVP First (User Stories 1 & 2 + Migration)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 2 (Learning Components)
4. Complete Phase 4: User Story 1 (Chapter Template)
5. **Complete Phase 9: Migration (CRITICAL)** - Apply components to existing chapters
6. **STOP and VALIDATE**: Test creating a chapter from template AND verify existing chapters show new components
7. Deploy/demo if ready

**Rationale**: US1 and US2 provide infrastructure, but **migration makes it visible to readers**. Without migration, the upgrade appears incomplete. This is the true minimum viable product.

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 2 → Test independently (components render)
3. Add User Story 1 → Test independently (template works)
4. **Add Migration → Apply to existing chapters → Deploy/Demo (MVP!)** ⚠️ CRITICAL
5. Add User Story 6 → Test independently (Key Takeaways) → Deploy/Demo
6. Add User Stories 3, 4, 5 in parallel (documentation + config) → Deploy/Demo
7. Add Polish → Final release
8. Each story adds value without breaking previous stories

**IMPORTANT**: Migration phase is when the upgrade becomes visible to end users. Infrastructure alone (US1+US2) is not sufficient for a deployable MVP.

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 2 (Learning Components)
   - Developer B: User Story 6 (Key Takeaways)
   - Developer C: User Stories 3 & 4 (Documentation)
3. Developer A then completes User Story 1 (needs US2 components)
4. Developer D: User Story 5 + Polish (ExerciseBlock, Style Guide)
5. Stories complete and integrate independently

---

## Task Summary

**Total Tasks**: 79

**Tasks per User Story**:
- Setup: 4 tasks
- Foundational: 5 tasks (BLOCKING)
- User Story 2 (P1): 7 tasks - Display Learning Components
- User Story 1 (P1): 11 tasks - Create Chapter Template
- User Story 6 (P2): 6 tasks - Key Takeaways Component
- User Story 3 (P2): 7 tasks - Code Examples Standards
- User Story 4 (P2): 8 tasks - Callout Guidelines
- User Story 5 (P3): 4 tasks - Navigation Configuration
- **Migration: 10 tasks - Apply template system to existing 9 chapter files (CRITICAL)**
- Polish: 17 tasks - ExerciseBlock, Style Guide, Examples, Final Validation

**Parallel Opportunities**:
- 26 tasks marked [P] can run in parallel within their phase
- User Stories 3, 4, 5, 6 can be developed in parallel after foundational phase
- **All 8 migration tasks (T053-T060) can run in parallel - different files**

**Suggested MVP Scope**:
- Phases 1-4 + Migration (Setup + Foundational + US2 + US1 + Migration) = 37 tasks
- Delivers core value: standardized chapter template with learning components APPLIED to existing chapters
- Estimated: 2-3 days for single developer, 1-2 days with parallel execution
- **Migration phase is CRITICAL** - without it, readers still see old layout despite infrastructure being built

---

## Notes

- [P] tasks = different files, no dependencies within phase
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Build validation (npm run build) should pass after each component is complete
- Manual testing involves creating test chapters in docs/test/ and verifying rendering
- No automated tests per specification - validation is via JSON Schema at build time
- All CSS must work in both light and dark modes
- All components must be SSR-compatible (no client-only blocking features)
