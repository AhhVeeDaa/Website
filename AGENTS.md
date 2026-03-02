# AGENTS.md

Purpose

Standardise agent behavior, tool access, and process for making multi-file and structural changes in this repository. This file defines the minimal rules agents and contributors must follow.

Rules

- /plan required before multi-file changes
  - Run a lightweight /plan in Copilot CLI (or use Shift+Tab plan mode) that outlines files to change, rationale, risks, and rollback plan.

- Draft PR required for edits to main branch
  - By default, create a draft PR for review. Exception: direct commits to main are allowed only with explicit repository owner confirmation (single-line confirmation in the chat).

- Tone guardrails
  - Do NOT use the term "portfolio" anywhere in copy.
  - Avoid over-explanation; prefer declarative, terse lines.
  - Prioritise declarative identity and infrastructure/founder positioning.

- Structural change requirements
  - Any structural change (layout, global styles, metadata, hero, or navigation) MUST include:
    - Rationale (1–2 lines)
    - Risk assessment (brief)
    - Rollback plan (how to revert)

- PR requirements
  - Every PR must include the /plan output (or a plan summary), and reference AGENTS.md.

- Enforcement
  - Prefer CI or code review to enforce rules. If unavailable, reviewers should verify the PR includes rationale, risks, and rollback.

Contact

Repository owner: @AhhVeeDaa

Minimal and precise. No extra process nor verbosity.