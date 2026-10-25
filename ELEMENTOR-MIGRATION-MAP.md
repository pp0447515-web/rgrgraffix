# Elementor-to-Next.js migration map

This is a translation guide, not a runtime dependency. The Next.js site uses its own semantic classes in `app/page.tsx`; the imported Elementor selectors (for example `.elementor-250 .elementor-element-450f5179`) cannot be applied directly because the original Elementor DOM and widgets are not present.

## Source files and what they tell us

| Imported file | Evidence in the CSS | Next.js destination |
| --- | --- | --- |
| `post-142.css` | Elementor global kit: global colors, Inter Tight typography scale, body and heading defaults | `app/globals.css` root variables, typography and base elements |
| `post-250.css` | Homepage document; slideshow hero, black overlay, card/gallery hover transitions, logo/image carousel breakpoints | `.hero`, `.project-card` / `.project-image`, `.client-ticker` / `.client-logos` |
| `post-265.css` | Header template; transparent overlaid header, 80px desktop nav, 1280px content, 340px logo shrinking to 280px on scroll, dark sticky background, mobile menu | `.site-header`, `.brand`, `.nav`, `.dropdown-menu`, `.menu-toggle` |
| `post-1131.css`, `post-1134.css`, `post-255.css`, `post-261.css`, `post-263.css`, `post-285.css`, `post-287.css`, `post-290.css`, `post-292.css`, `post-294.css`, `post-671.css`, `post-893.css` | Additional Elementor documents/sections with responsive containers, headings, backgrounds and service/gallery imagery | Use as reference when extending the matching About, Services, Projects and Contact sections; avoid importing selectors wholesale |
| `loop-1127.css` | Reusable loop/card styling, including border and corner radius | `.project-card` and other repeated cards as relevant |

## Styling decisions applied

- The original kit defines a dark `#111111` background, white headings, muted grey `#888888` body text, and a red `#FC2222` action color. Do not use yellow as a decorative/highlight color in the Next.js design; the presence of a yellow token in the global kit is not a reason to make it a prominent UI highlight.
- Use **Inter Tight** for body text and headings, matching the Elementor global typography kit. The exported kit sets body text to `1.125rem` with `1.6` line-height on desktop and reduces it to `1rem` on tablet/mobile. Global heading sizes start at H1 `4rem`, H2 `3rem`, H3 `2.5rem`, H4 `2.125rem`, H5 `1.5rem`, and H6 `1.25rem`, with responsive reductions at 1024px and 767px.
- Preserved the Next.js-specific 800ms image/overlay/content hover transitions and the responsive logo ticker (five logos on desktop, four at tablet widths, two on mobile).
- Added visible keyboard focus and reduced-motion handling without requiring Elementor JavaScript.

## Original media references to reconcile

The original CSS refers to WordPress uploads such as `/wp-content/uploads/2025/09/1-1.jpg` through `6-1.jpg`, `Untitled-design-10.jpg`, `Untitled-design-13.jpg`, `Untitled-design-14.jpg`, and other project-specific files. These are CSS background references, not all confirmed to exist in `public/images/`. The current Next.js page already uses local hero images `1.jpg`, `3.jpg`, `4.jpg`, `5.jpg`, `6.jpg`, `8.jpg` and local project images. Before replacing those with WordPress-specific gallery assets, copy only the selected, optimized image files into `public/images/` and update the page to reference the local paths. Do not import the full WordPress uploads directory.

## Important migration boundary

The repository contains the exported Elementor CSS files and a subset of media assets, but `app/page.tsx` is still a simplified hand-built single page. The CSS files describe multiple Elementor documents and depend on original section markup, widget structure, page text, and media assets. Reproducing every page faithfully requires the matching WordPress page/template content and uploads, not just applying the CSS files wholesale.

The CSS references include `Untitled-design-10.jpg`, `Untitled-design-13.jpg`, `Untitled-design-14.jpg`, `IMG_20200730_105059-scaled.jpg`, `20240916_165024-scaled.jpg`, `Safety-Signage.png`, and numbered `1-3.jpg`–`6-3.jpg` assets. Copy the exact required files from the WordPress backup into `public/images/` and map each page's original content before removing `original-elementor-css/`. Do not import the entire uploads directory into Git.
