# Personal website design review

September 6, 2026

**Recommendation: Personal (8.8/10). Editorial (8.7/10) is the close alternative if visual presence matters more than a compact reading experience.** These are rubric-based design judgments informed by browser checks, not ratings from a user study. Treat differences smaller than 0.5 as a preference decision. The original remains available as the comparison baseline.

## Criteria and thresholds

The audience is a visitor assessing Hong Kun's engineering work, including a recruiter or potential colleague. AWS work takes priority; pre-AWS projects belong in a secondary archive.

| Criterion | Weight | What earns a strong score |
|---|---:|---|
| Clarity | 25% | Name, software engineering role, AWS Step Functions, and location appear in the initial screen at 1440 and 390 px. AWS work begins before 900 px on desktop and 844 px on a typical phone. |
| Navigation | 20% | Work, experience, résumé and contact are available directly. Every AWS case opens in one click and has a clear return path. Main navigation targets are at least 44 px high. |
| Work and credibility | 20% | Six visible AWS case summaries explain individual contributions and bounded outcomes. Detailed pages distinguish personal ownership from team contributions. Earlier projects are secondary. |
| Readability and accessibility | 15% | Main work, experience and case prose is at least 16 px. No horizontal overflow at 320, 390 or 1440 px. Visible keyboard focus and a functioning skip link. Normal text contrast at least 4.5:1, large text 3:1. |
| Warmth and personal fit | 10% | Natural color portrait, straightforward first-person writing, comfortable spacing, and no forced whimsy. |
| Visual craft | 10% | Consistent type hierarchy, alignment, spacing and responsive composition. A recognizable visual approach that supports the content. |

The contrast and reflow references come from [WCAG 2.2](https://www.w3.org/TR/WCAG22/). The 16 px prose, 44 px navigation height and first-screen placement rules are project design targets; they are not all WCAG AA requirements.

A score of 8 means the site meets the functional requirements with minor design tradeoffs. A 9 means it also feels especially coherent and well suited to its owner. A broken primary link, unreadable content or phone overflow would cap a revised design below 8 until fixed. Visual fit remains subjective even when the functional checks pass.

Scores use the weighted average of the six integer criterion ratings. Rounding to one decimal makes the calculation inspectable, not precise measurement of taste.

## Before this revision

Based on the running pages, source review and captured desktop views. This baseline follows the earlier AWS content expansion.

| Design | Clarity | Navigation | Work | Readability | Warmth | Craft | Weighted score |
|---|---:|---:|---:|---:|---:|---:|---:|
| Personal | 8 | 7 | 9 | 7 | 5 | 7 | **7.5** |
| Editorial | 6 | 7 | 9 | 7 | 3 | 8 | **6.9** |
| Collection | 7 | 7 | 9 | 8 | 6 | 7 | **7.5** |
| Workspace | 9 | 8 | 9 | 7 | 4 | 6 | **7.7** |
| Typography | 6 | 7 | 9 | 6 | 3 | 7 | **6.6** |
| Original | 5 | 8 | 6 | 8 | 4 | 5 | **6.2** |

## After this revision

| Design | Clarity | Navigation | Work | Readability | Warmth | Craft | Weighted score |
|---|---:|---:|---:|---:|---:|---:|---:|
| Personal | 9 | 9 | 9 | 9 | 8 | 8 | **8.8** |
| Editorial | 8 | 9 | 9 | 9 | 8 | 9 | **8.7** |
| Collection | 8 | 9 | 9 | 9 | 7 | 8 | **8.5** |
| Workspace | 9 | 9 | 9 | 9 | 6 | 7 | **8.5** |
| Typography | 8 | 9 | 9 | 8 | 6 | 8 | **8.2** |

## What held each design back

**Personal:** The small, desaturated circular photo looked formal and remote. Work titles were weaker than surrounding prose, and secondary text was faint. It now has a larger rectangular color photo, warmer paper color, stronger work headings, darker metadata and larger navigation targets. It is the best balance of individual character and professional clarity. Its remaining limitation is modest visual drama and a fairly long reading page.

**Editorial:** The four-line introduction and oversized monochrome portrait pushed the AWS work below the first screen. The headline is now two lines on desktop, the color portrait occupies less space, and the mobile portrait sits beside the heading. Body text is larger. It has the strongest typography, although it still spends more space on presentation than Personal or Workspace.

**Collection:** The large location headline and bright yellow treatment pulled attention from the work. The headline now names the role and AWS, yellow is muted, and the portrait is smaller. On phones it sits beside the name rather than adding a large block below the introduction. The grid is useful for browsing; the overall tone remains closer to a conventional portfolio.

**Workspace:** The structure was already efficient. Small labels, simulated window styling and grayscale photography made it feel like an internal tool. The photo is now in color, window shadows are removed, panel labels use readable sans-serif text, and mobile navigation uses plain labels. Case-study prose no longer uses small monospaced type. It is excellent for scanning but still less personal than the two leading options.

**Typography:** Neon green, a giant decorative asterisk, oversized lettering and grayscale photography made presentation dominate. The green is softer, the asterisk is removed, the name is smaller, and a color portrait now appears near the introduction. Work summaries are larger. The mobile photo/name overlap introduced during revision was caught visually and fixed. It remains the most severe option because the dark palette and all-caps name are central to the design.

**Original:** Clear conventional navigation, but a long promotional headline, many boxes and repeated focus labels consume the first screen. Earlier experience competes with AWS, and the selected work section begins around 2,901 px down at 1440 px wide. Its AWS case selection is also narrower than the previews. It would need changes to hierarchy, content and tone to reach the requested standard. It is retained as the original reference, rather than counted as a sixth revised design.

## Measured improvement

Top edge of the AWS work section, measured from the top of each page. Desktop viewport: 1440 × 1000. Phone viewport: 390 × 844. Smaller numbers mean less scrolling before the work.

| Design | Desktop before | Desktop after | Phone after |
|---|---:|---:|---:|
| Personal | 571 px | 509 px | 559 px |
| Editorial | 931 px | 653 px | 594 px |
| Collection | 754 px | 589 px | 634 px |
| Workspace | 472 px | 477 px | 561 px |
| Typography | 767 px | 643 px | 555 px |

## Verification

- Five homepages checked at 1440, 390 and 320 px wide: no horizontal overflow, six AWS case links, five career entries and one secondary archive link each. No pre-AWS project names in the main page content.
- Main navigation targets measured at least 44 px high. Work and career prose measured at least 16 px.
- All 30 AWS case pages checked at the same three widths: 90 layout checks, no horizontal overflow and case prose at least 16 px.
- 42 unique internal links returned successful responses, including the résumé and archive links. All five archives contain five earlier projects.
- Exercised skip-to-content, Work navigation and comparison-menu navigation on all five designs at all three sizes. No browser JavaScript errors.
- axe-core 4.13.0 checks for WCAG A/AA tags reported zero violations across 15 homepage checks and five representative case pages at 320 px. These automated checks are not a complete accessibility certification.
- Two types of contrast checks required manual review: Editorial's decorative arrow (12.93:1) and Personal's italic monogram (7.51:1). Both have adequate contrast against the solid page background; the narrow-screen monogram was visually checked for overlap.
- Astro check: 0 errors, 0 warnings, 0 hints. Production build: 81 pages generated successfully.

No real-user usability study, screen-reader session, cross-browser testing or production performance measurement was performed. The scores should not be read as evidence of recruiting conversion or accessibility certification.

## Local previews

- [Personal](http://localhost:4321/redesigns/letter/)
- [Editorial](http://localhost:4321/redesigns/journal/)
- [Collection](http://localhost:4321/redesigns/scrapbook/)
- [Workspace](http://localhost:4321/redesigns/desktop/)
- [Typography](http://localhost:4321/redesigns/poster/)
- [Original](http://localhost:4321/)
- [Comparison gallery](http://localhost:4321/redesigns/)
