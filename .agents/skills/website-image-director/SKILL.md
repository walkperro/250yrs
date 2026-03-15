---
name: website-image-director
version: "1.0.0"
description: "Generate premium website image prompts for Nano Banana and Gemini with structured JSON planning, optimized prose prompts, and revision objects."
argument-hint: "hero image for luxury pet service, edit homepage portrait, reference-driven about page photo"
user-invocable: true
---

# Website Image Director

Create premium website image prompts for Nano Banana Pro and Gemini image workflows.

Use this skill when the user wants:
- homepage hero imagery
- about page portraits
- services section visuals
- testimonial portraits
- CTA section images
- image edits
- reference-driven prompt construction

## Goals
- Produce website-ready prompts that feel premium, cohesive, and conversion-friendly.
- Optimize for luxury realism, sharp facial detail, and cohesive editorial style.
- Keep outputs reusable through a structured JSON planning layer.

## Supported Workflows
- `generate` — create a new image from scratch
- `edit` — refine or transform an existing image
- `generate_with_references` — combine reference images with a new scenario

## Non-Negotiable Rules
- Always return:
  1. a structured JSON planning object
  2. a final optimized prose prompt
  3. an optional revision object
- For edits, always separate:
  - `edit.change[]`
  - `edit.preserve[]`
- Default quality targets:
  - luxury realism
  - sharp facial detail
  - cohesive editorial style
  - believable lighting
  - website-safe composition
- Prioritize usable website compositions over experimental art direction.
- Preserve negative space when the section needs text overlay.

## Required Inputs To Infer Or Ask For
When possible, infer these from the user request. If critical information is missing, ask briefly.

- `section`: `hero`, `about`, `services`, `testimonial`, or `cta`
- `workflow`: `generate`, `edit`, or `generate_with_references`
- `subject`
- `brand tone`
- `environment`
- `aspect ratio`
- `text overlay needs`
- `references` if applicable

## Section Defaults

### Hero
- premium, aspirational, emotionally strong
- room for headline and CTA copy
- clean focal hierarchy

### About
- warm, human, credible
- authentic but elevated
- trust-building body language

### Services
- demonstrate service in action
- polished environment and readable composition
- competence, care, and premium detail

### Testimonial
- portrait-driven trust and confidence
- natural smile or calm expression
- premium but believable realism

### CTA
- visually simple and conversion-focused
- deliberate whitespace
- bold focal point with minimal distraction

## Output Format

Return exactly these sections in order:

### 1. JSON Plan
Return a valid JSON object.

### 2. Final Prompt
Return one optimized prose prompt derived from the JSON plan.

### 3. Optional Revision
Return either:
- a revision JSON object with deltas, or
- `null` if no revision is needed yet

## Canonical JSON Shape

```json
{
  "task": "generate",
  "verb": "Create",
  "section": "hero",
  "goal": "premium website image",
  "subject": {
    "primary": "...",
    "secondary": [],
    "attributes": []
  },
  "action": "...",
  "scene": {
    "location": "...",
    "environment": "...",
    "time_of_day": "..."
  },
  "composition": {
    "shot_type": "...",
    "framing": "...",
    "angle": "...",
    "depth": "..."
  },
  "style": {
    "visual_direction": "luxury realism",
    "editorial_reference": "premium editorial photography",
    "mood": "..."
  },
  "lighting": {
    "setup": "...",
    "quality": "...",
    "priority": "sharp facial detail"
  },
  "camera": {
    "lens": "...",
    "aperture": "...",
    "rendering": "..."
  },
  "materials": [],
  "references": [],
  "text_overlay_zone": {
    "placement": "...",
    "purpose": "...",
    "keep_clean": true
  },
  "edit": {
    "change": [],
    "preserve": []
  },
  "constraints": {
    "aspect_ratio": "...",
    "must_have": [],
    "avoid": []
  }
}
```

## Workflow Rules

### Generate
- Build around subject, action, scene, composition, style, lighting, and website use case.
- Reserve copy space when relevant.
- Use premium commercial photography language.

### Edit
- Keep the base image logic intact.
- Always define edits with:
  - `edit.change[]`
  - `edit.preserve[]`
- Be explicit about what must remain identical.

### Reference-Driven
- Use `references[]` with a clear `role` for each image.
- Good roles include:
  - `subject`
  - `style`
  - `wardrobe`
  - `product`
  - `environment`
  - `composition`
- Explain how each reference should influence the result.

## Prompt Optimization Rules
- Prefer believable premium photography over generic AI aesthetics.
- Prioritize realistic skin texture, natural hands, clean eyes, and refined material detail.
- Use concise, controlled direction instead of bloated prose.
- For humans, specify posture, expression, wardrobe, framing, and environment.
- For web usage, include negative space and overlay planning.
- Avoid cheap stock-photo energy unless requested.

## Revision Rules
- Use revisions only for deltas from the approved direction.
- Keep successful elements locked in `revision.preserve[]`.
- Change one major visual dimension at a time where possible.

## Response Template

```md
## JSON Plan
{valid JSON}

## Final Prompt
{optimized prose prompt}

## Optional Revision
{revision JSON object or null}
```

## Example Behavior

If the user says:
`Create a homepage hero for a luxury dog walking service in Beverly Hills.`

You should:
- choose `section = hero`
- choose `task = generate`
- build a JSON plan with luxury realism and headline-safe negative space
- write a polished final prompt for Nano Banana or Gemini
- optionally provide a revision object for alternate lighting, framing, or wardrobe refinements
