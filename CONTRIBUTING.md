# Contributing to Marketing Taxonomy AI

Thank you for wanting to contribute! This project is **community-driven** — every new type and example makes this taxonomy more valuable for marketers, researchers, and students worldwide.

## Table of Contents

- [Ways to Contribute](#ways-to-contribute)
- [Adding a New Marketing Type](#adding-a-new-marketing-type)
- [Adding Examples to Existing Types](#adding-examples-to-existing-types)
- [Suggesting Merges or Renames](#suggesting-merges-or-renames)
- [Contributing to the Web Explorer](#contributing-to-the-web-explorer)
- [PR Guidelines](#pr-guidelines)
- [Code of Conduct](#code-of-conduct)

---

## Ways to Contribute

### 1. Add Real-World Examples (Easy, High Impact)

Many marketing types need brand examples. If you know a great case study, add it!

**File**: `data/marketing-types.json`

Find the type by ID or name, and add to its `examples` array:

```json
{
  "id": 2,
  "name": "Affiliate Marketing",
  "examples": [
    {
      "brand": "Amazon Associates",
      "description": "World's largest affiliate program with 1M+ creators driving $10B+ annual sales."
    }
  ]
}
```

### 2. Add a New Marketing Type (Medium, High Impact)

Think a marketing type is missing? Add it!

### 3. Fix Errors (Easy)

Spotted a typo, wrong category, or incorrect status? Fix it!

---

## Adding a New Marketing Type

### Step 1: Check if it already exists

Search `data/marketing-types.json` first. Many types have multiple names (e.g., "Social Media Marketing" and "SMM").

### Step 2: Determine the classification

| Field | Options | Guidelines |
|-------|---------|------------|
| `id` | Next available number | Check the last ID in the JSON file and add 1 |
| `name` | String | Use the most commonly used name. Include acronym if well-known. |
| `category` | String | Look at existing categories for consistency. Create new ones only if necessary. |
| `tier` | `core` / `extended` / `emerging` | See tier definitions below |
| `status` | `Verified` / `Merged` / `Removed` / `Renamed` | New types should use `Verified` |
| `examples` | Array | Add at least one real-world example with brand and description |

### Tier Definitions

- **Core** (IDs 1-150): Well-established, widely recognized marketing types with extensive academic and industry literature
- **Extended** (IDs 151-196): Specialized, niche, or regional marketing types that are established but not universally recognized
- **Emerging** (IDs 197-228): New, evolving, or frontier marketing types (2020+) with growing industry adoption

### Step 3: Add to the JSON file

```json
{
  "id": 229,
  "name": "Your New Marketing Type",
  "category": "Appropriate Category",
  "tier": "emerging",
  "status": "Verified",
  "examples": [
    {
      "brand": "Real Brand Name",
      "description": "Specific, verifiable case study with measurable outcomes if possible."
    }
  ]
}
```

### Step 4: Submit a Pull Request

See [PR Guidelines](#pr-guidelines) below.

---

## Adding Examples to Existing Types

1. Find the type in `data/marketing-types.json` by searching for its name or ID
2. Add a new object to the `examples` array:

```json
{
  "brand": "Brand Name",
  "description": "What they did and what happened. Be specific and factual."
}
```

### Example Quality Guidelines

- **Be specific**: "Increased sales 30%" > "Improved results"
- **Be verifiable**: Use public, well-known case studies
- **Be concise**: 1-3 sentences max
- **Include numbers** when possible: revenue, growth %, users, views
- **Prefer diverse brands**: Don't add 5 Apple examples to one type

---

## Suggesting Merges or Renames

If you think two types should be merged or one should be renamed:

1. Open an [Issue](../../issues) with the title `[Merge Proposal]` or `[Rename Proposal]`
2. Explain your reasoning
3. Cite sources if possible

A maintainer will review and update the status field (`Merged` or `Renamed`).

---

## Contributing to the Web Explorer

The web explorer is a Next.js app. To contribute:

```bash
npm install
npm run dev
```

### Adding Features

- UI components use [shadcn/ui](https://ui.shadcn.com/)
- Charts use [Recharts](https://recharts.org/)
- Animations use [Framer Motion](https://www.framer.com/motion/)
- Follow existing code patterns

---

## PR Guidelines

### Title Format

- `Add: [type name]` — New marketing type
- `Examples: [type name]` — New examples for existing type
- `Fix: [description]` — Bug fix or correction
- `Feature: [description]` — New feature for the web explorer

### Commit Messages

```
Add: Agentic Marketing with Salesforce Agentforce example
Examples: Add Amazon and Netflix examples to Behavioral Marketing
Fix: Correct category for Phygital Marketing
Feature: Add dark mode toggle to explorer
```

### Before Submitting

- [ ] JSON is valid (run `python scripts/validate_json.py` or use a JSON linter)
- [ ] New types don't duplicate existing ones
- [ ] Examples are factual and verifiable
- [ ] Category names follow existing conventions
- [ ] IDs are sequential and don't conflict

---

## Code of Conduct

- Be respectful and constructive
- Don't add spam, promotional, or self-serving examples
- Don't add examples for your own company without independent verification
- Don't modify other contributors' examples without explanation
- Keep descriptions factual and neutral
- Avoid controversial political statements in examples

---

## Need Help?

- Open an [Issue](../../issues) with the `question` label
- Start a [Discussion](../../discussions)

Thank you for making marketing knowledge more accessible! 🎉