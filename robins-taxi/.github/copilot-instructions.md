# Copilot Instructions – PR Reviews & Code Standards

You are assisting with development and pull request reviews for a codebase primarily built with:

- Angular (standalone components)
- RxJS for async/state management
- Strong TypeScript typing
- Some React

Your goal is to produce and review **clean, scalable, production-quality code**.

---

# Core Principles

- Prefer **simple, readable, maintainable code**
- Avoid over-engineering
- Enforce **strong typing**
- Keep logic predictable and easy to debug
- Code should be understandable within seconds

---

# 🚨 High Priority Issues (Always Flag)

- Usage of `any` without justification
- Nested subscriptions (`subscribe` inside `subscribe`)
- Business logic inside components
- Large components/services with multiple responsibilities
- Complex template logic
- Missing error handling in async code
- Memory leaks (unhandled subscriptions)
- Duplicate logic
- Direct API calls inside components (should be abstracted)

---

# Angular Guidelines

## Components
- Keep components **thin**
- Only handle UI + orchestration
- Move logic to services or helpers when it grows

## Templates
- Must be clean and simple
- Avoid:
  - complex expressions
  - nested ternaries
  - repeated logic

## RxJS / Async
- Prefer:
  - `switchMap`, `map`, `combineLatest`
- Avoid:
  - nested subscriptions
  - mixing Promises and Observables unnecessarily

- Always handle:
  - loading
  - success
  - error states

- Prefer `async` pipe over manual subscriptions

## Services
- Handle business logic and API calls
- Avoid “god services”
- Keep responsibilities focused

## State
- Keep state minimal and predictable
- Avoid duplicated or derived state

---

# TypeScript Standards

- Avoid `any`
- Use:
  - interfaces
  - enums
  - union types
  - generics where appropriate

- Types should:
  - clearly describe data
  - prevent invalid states

---

# React Guidelines (Secondary)

## Components
- Keep small and focused

## Hooks
- Avoid messy `useEffect`
- Ensure correct dependencies
- Prefer derived state over effects

## State
- Avoid duplication
- Keep updates predictable

---

# Clean Code Rules

## Naming
- Use descriptive names
- Avoid:
  - `data`, `value`, `temp`

## Functions
- Single responsibility
- Short and readable

## Duplication
- Extract repeated logic when appropriate
- Avoid premature abstraction

## Conditionals
- Avoid deep nesting
- Prefer early returns

---

# Performance

Only flag real issues:

- unnecessary rerenders
- repeated heavy calculations
- duplicate API calls

Do NOT suggest premature optimization.

---

# Testing

Suggest tests when:
- business logic changes
- async logic changes
- bug fixes are introduced

Do not require tests for trivial UI changes.

---

# Review Comment Style

- Be concise and direct
- Explain **why**, not just **what**

### Good Examples:
- “This component is handling too much logic — consider moving this into a service.”
- “Nested subscriptions will make this harder to maintain — use switchMap instead.”
- “This should not use `any`; define a proper type.”

### Avoid:
- vague comments
- non-actionable feedback

---

# Severity

## 🔴 Blocker
- Bugs
- Bad async patterns
- Memory leaks
- Weak typing
- Poor architecture

## 🟡 Suggestion
- Readability improvements
- Naming
- Minor refactors

---

# What to Avoid

- Do not rewrite entire code unnecessarily
- Do not over-abstract
- Do not nitpick formatting
- Do not suggest patterns that reduce clarity

---

# Goal

Ensure all code is:

- Clean
- Typed
- Maintainable
- Consistent
- Scalable
