# fabula - UI/UX Visual Design Specifications

## 1. Introduction

This document defines the core visual design specifications for the User Interface (UI) and User Experience (UX) of the fabula application—a next-generation, AI-powered story visualization and analysis platform for writers and creators. These guidelines ensure a consistent, high-quality, and brand-aligned experience across all modules and platforms, including web and mobile.

All team members involved in fabula UI/UX design and development must familiarize themselves with and follow the principles and rules outlined in this document. Our goal is to deliver a focused, empowering, and delightful creative environment that leverages advanced visualization, AI-driven insights, and seamless workflows to help storytellers bring their ideas to life.

---

## 2. Logo Usage in UI

This section details the specific usage guidelines for the fabula logo in various application scenarios. The fabula logo is a core element of our brand identity and must be used consistently to reinforce recognition and trust. The logo should always reflect fabula’s creative, AI-driven, and story-centric positioning.

### NOTE: Logo File Storage Convention

All logo assets for UI/UX guidelines and preview are stored in:

`docs/uiux/assets/logo/`

**Naming convention:**

* `logo-app-512.svg` / `logo-app-512.png` (App Icon)
* `logo-splash-256.svg` (Splash Screen)
* `logo-navbar-32.svg` / `logo-navbar-48.svg` (Navbar/Sidebar)
* `logo-about-128.svg` / `logo-about-256.svg` (About Page)

> For each scenario, prefer SVG for scalability. PNG is optional for fallback. If color variants exist, use suffixes like `-dark`.

**Note:**

* If the actual logo files are not yet available, use placeholder images or color blocks in the HTML preview and update with real assets later.
* This directory is for design guideline and preview purposes. For production, copy assets to the appropriate `src/shared/assets/logo/` directory.
* Ensure all assets are optimized for web use (e.g., SVGs should be minified, PNGs should be compressed).

### 2.1. Application Icon

* Use `logo-app-512.svg` (primary, 512x512px, rounded 96px, brand blue #2563EB, white "F" or fabula mark)
* Optional: `logo-app-512.png` for fallback
* Store in `docs/uiux/assets/logo/`

### 2.2. In-app Branding Elements

* **Splash Screen Logo**: `logo-splash-256.svg` (256x256px, rounded 48px)
* **Navbar/Sidebar Logo**: `logo-navbar-32.svg` (32x32px, rounded 6px), `logo-navbar-48.svg` (48x48px, rounded 10px)
* **About Page Logo**: `logo-about-128.svg` (128x128px, rounded 24px), `logo-about-256.svg` (256x256px, rounded 48px)

### 2.3. Logo Don'ts

* Do not stretch, distort, or rotate the logo.
* Do not change the logo color (use only brand blue and white).
* Do not add shadows, outlines, or gradients.
* Do not overlay other elements on the logo.

> All logo assets for preview and documentation are stored in `docs/uiux/assets/logo/`. For production, copy to `src/shared/assets/logo/`.

## 3. Color Palette for UI - V2.0

This section defines the core color palette for the fabula application interface. The palette is designed to support fabula’s unique features—such as story structure visualization, creative workflow management, and AI-assisted insights—while maintaining clarity, focus, and a non-intrusive creative environment. All color choices and usage must reinforce fabula’s brand as an innovative, AI-powered, and creativity-focused platform.

### 3.1. Core Principles

* **Clarity & Focus**: The color system creates a calm, distraction-free workspace that keeps the user’s attention on their story and creative process.
* **Accessibility**: All color choices strictly adhere to WCAG AA contrast standards for readability and inclusivity.
* **Professionalism & Trust**: The palette reflects the reliability and intelligence of a creative “second brain.”
* **AI Distinction**: Unique accent colors are reserved for AI-generated or suggested content, making machine assistance visually clear but never overwhelming.
* **Story Visualization**: Colors are selected to support visual storytelling, relationship mapping, and narrative structure clarity.

### 3.2. Brand & Identity Colors

* **Brand Primary**: Brand Blue - `#2563EB`
  * **Usage**: Primary actions, navigation highlights, key selections, and global focus indicators.
  * **Rationale**: Blue signals technology, intelligence, and trust. Its use is limited to the most important interactions, guiding users through critical decisions and navigation.

* **AI Accent**: AI Purple - `#8B5CF6`
  * **Usage**: Only for AI-generated or suggested content (e.g., AI tags, summaries, or connections in story graphs).
  * **Rationale**: Purple evokes creativity and “magic,” visually separating AI “thinking” from user-driven actions.

### 3.3. Expanded Neutral Scale

Neutral colors form the backbone of the fabula interface, covering over 90% of the visual area. A cool gray scale (based on Tailwind Slate) is used for a layered, breathable, and professional look.

| Usage            | Name/Tailwind Level       | Light Mode Value   | Dark Mode Value    |
|------------------|---------------------------|--------------------|--------------------|
| Base Background  | bg-base / Slate 50        | `#F8FAFC`          | bg-base-dark / Slate 950 |
| Subtle Background| bg-subtle / Slate 100     | `#F1F5F9`          | bg-subtle-dark / Slate 900 |
| UI Background    | bg-ui / Slate 200         | `#E2E8F0`          | bg-ui-dark / Slate 800 |
| UI Hover         | bg-ui-hover / Slate 300   | `#CBD5E1`          | bg-ui-hover-dark / Slate 700 |
| Subtle Border    | border-subtle / Slate 200 | `#E2E8F0`          | border-subtle-dark / Slate 800 |
| Default Border   | border-default / Slate 300| `#CBD5E1`          | border-default-dark / Slate 700 |
| Primary Text     | text-primary / Slate 900  | `#1E293B`          | text-primary-dark / Slate 100 |
| Secondary Text   | text-secondary/ Slate 500 | `#64748B`          | text-secondary-dark/ Slate 400 |
| Disabled Text/Elements | disabled / Slate 400 | `#94A3B8`          | disabled-dark / Slate 600 |

* **Rationale**:
  * **Layered Structure**: Multiple background and border levels allow for complex, information-dense layouts without visual clutter.
  * **Consistent Feedback**: UI hover and active states are clearly defined for predictable, accessible interactions.

### 3.4. Standard Functional Colors

| Usage   | Name       | Light Mode Value | Dark Mode Value |
|---------|------------|------------------|-----------------|
| Success | Success Green | `#16A34A`    | `#22C55E`       |
| Error/Danger | Error Red | `#DC2626`    | `#EF4444`       |
| Warning | Warning Yellow | `#D97706`   | `#F59E0B`       |

* **Rationale**: Aligns with user expectations for feedback and reduces the learning curve.

### 3.5. Semantic & Status Colors

* **Rationale**:
  * **Story Workflow Visualization**: Status colors help users quickly assess story progress, task states, and deadlines.
  * **Visual Weight**: Completed/canceled items use neutral grays to fade into the background, keeping focus on active work. Urgent states use red for immediate attention.
  * **Subtle Differentiation**: Canceled items may use reduced opacity or lighter gray for clarity in retrospectives.

### 3.6. Secondary Accent Colors

* **Accent-Teal**: `#14B8A6`
* **Accent-Amber**: `#F59E0B`
* **Accent-Pink**: `#EC4899`

* **Rationale**:
  * **Data Visualization**: Used for differentiating nodes, tags, or clusters in story graphs and creative maps.
  * **Tagging**: Provides a harmonious set of tag colors for categorization without visual chaos.
  * **Assignment Rule**: New tags are auto-assigned a color from the accent palette in sequence (Teal → Amber → Pink), ensuring balance and distinction by default.

### 3.7. Color Usage Philosophy Summary

* **Neutrals as the Backbone**: Most of the interface uses neutral colors to keep the focus on content.
* **Brand Blue as the Guide**: Reserved for the most important actions and navigation.
* **AI Purple as the Insight**: Clearly marks AI-generated or suggested content.
* **Semantic Colors for Status**: Status and workflow colors provide instant visual cues.
* **Accent Colors as Exceptions**: Used sparingly for categorization and data visualization, never for general UI elements.

## 4. Typography for UI

This section defines the typographic system for fabula. The goal is to create a clear distinction between interface typography (for UI elements) and content typography (for the user's stories, notes, and creative documents), ensuring optimal readability, strong hierarchy, and a focused writing environment tailored for storytellers and creators. Typography in fabula must support multilingual creative writing, AI-generated content, and complex story structures, while maintaining a modern, accessible, and brand-aligned visual identity.

### 4.1. Core Philosophy

Our typographic approach is guided by three principles that directly support fabula’s mission as a story visualization and analysis platform:

* **Readability is Paramount**: All choices are made to reduce eye strain and improve comprehension, making long-form reading and writing effortless and comfortable for creative work.
* **Hierarchy Creates Clarity**: A clear, consistent type scale allows users to intuitively navigate both the application’s structure and their own story content.
* **Focus Through Separation**: UI typography is clean and functional, while content typography is optimized for immersive reading and can be customized by the user for their creative process.
* **Support for Story Visualization**: The typographic system must work seamlessly with visual story elements, outlines, and relationship maps, ensuring clarity in both narrative and structure.

### 4.2. Font Families (Updated)

#### UI Fonts ("Chrome")

UI fonts are used for all non-content areas of the application, such as menus, buttons, settings, and labels. Their primary goal is to be clear, efficient, and unobtrusive, allowing users to focus on the content.

##### **A. Latin Fonts**

* **Recommended Font**: Figtree
* **License**: SIL Open Font License 1.1 (completely free for commercial use)
* **Source**: Google Fonts
* **Reasons for Recommendation**:
  * **Modern and Friendly**: Figtree is a highly modern sans-serif font that strikes a perfect balance between geometric precision and humanistic warmth. It is professional and clear while avoiding the coldness of purely geometric fonts.
  * **High Readability**: With a large x-height and open character forms, it performs excellently even at small sizes, which is critical for UI elements.
  * **Popular yet Unique**: As a recent favorite on Google Fonts, Figtree brings a fresh, refined modernity to fabula, distinguishing it from overused fonts like Inter or Roboto.
  * **Rich Weights**: Offers a wide range of weights from Light to Black, fully meeting the needs of various UI levels and states.

##### **B. Chinese Fonts**

* **Recommended Font**: Alibaba PuHuiTi 2.0
* **License**: Alibaba PuHuiTi Free Commercial License (completely free for commercial use, with broad coverage)
* **Source**: Alibaba Cloud official, Alibaba-PuHuiTi GitHub
* **Reasons for Recommendation**:
  * **Designed for Commercial Use**: Officially released by Alibaba, it is explicitly promised to be free for commercial use, solving the biggest pain point of Chinese font licensing.
  * **Modern and Clean**: The font design is modern, neutral, and clean, with clear structures and stable proportions, making it highly suitable for UI interfaces.
  * **Space Efficiency**: Its slightly narrower glyphs allow more information to fit within limited UI space while maintaining clarity, improving information density and interface utilization.
  * **Weight Variety**: Provides five standard weights, aligning well with Figtree's weight system.

##### **C. Pairing Latin and Chinese Fonts**

Figtree and Alibaba PuHuiTi 2.0 form a harmonious pairing:

* **Style Consistency**: Both are modern sans-serif fonts, offering a unified and professional appearance.
* **Baseline and Weight Alignment**: With CSS adjustments, their baselines and visual weights can be matched for a seamless bilingual UI.

#### Content Fonts ("Canvas")

Content fonts are used in the main writing and reading areas, where user stories, notes, and creative documents are displayed. The focus is on long-form readability and user comfort, with options for customization.

##### **A. Default: Clarity and Universality**

* **Latin Font**: Inter
  * **License**: SIL Open Font License 1.1
  * **Rationale**: Inter is the industry standard for screen readability, with a neutral design and excellent legibility for diverse content.
* **Chinese Font**: Source Han Sans / Noto Sans SC
  * **License**: SIL Open Font License 1.1
  * **Rationale**: Co-developed by Google and Adobe, these fonts offer rigorous design, clear glyphs, and broad character coverage, making them ideal for extended reading.

##### **B. Immersive Reading: Long-form and Narrative**

* **Latin Font**: Source Serif Pro
  * **License**: SIL Open Font License 1.1
  * **Rationale**: A classic serif font optimized for screen reading, providing elegance and improved flow for long-form content.
* **Chinese Font**: Source Han Serif / Noto Serif SC
  * **License**: SIL Open Font License 1.1
  * **Rationale**: Designed as the serif counterpart to Source Han Sans, offering a harmonious and elegant reading experience for mixed-language content.

##### **C. Structured Thinking: Technical and Outlined Content**

* **Latin Font**: JetBrains Mono
  * **License**: SIL Open Font License 1.1
  * **Rationale**: Designed for developers and technical writers, with clear character differentiation and programming ligatures, ideal for structured notes and code.
* **Chinese Font**: Source Han Sans / Noto Sans SC
  * **Rationale**: In monospaced scenarios, these fonts provide stable, clear glyphs that complement JetBrains Mono’s technical style.

##### **D. User Customization**

fabula allows users to select their preferred content font from the above options, supporting individual creative workflows and reading comfort.

### 4.3. The Typographic System

#### A. The Master Type Scale

Our system is built on a harmonious, responsive scale. The values below are the foundation for both interface and content typography.

| Name          | Desktop Spec (px) | Mobile Spec (px) | Weight       | Semantic Tag |
|---------------|--------------------|------------------|--------------|--------------|
| **Heading 1** | 32px / 40px       | 28px / 36px      | Bold (700)   | `<h1>`       |
| **Heading 2** | 24px / 32px       | 22px / 30px      | SemiBold (600)| `<h2>`      |
| **Heading 3** | 20px / 28px       | 18px / 26px      | SemiBold (600)| `<h3>`      |
| **Body (Default)** | 16px / 26px   | 16px / 26px      | Regular (400)| `<p>`       |
| **Body Small**| 14px / 22px       | 14px / 22px      | Regular (400)| `<small>`   |
| **Label**     | 12px / 16px       | 12px / 16px      | Medium (500) | `<label>`   |

* **Enhancement Rationale**: The scale has been slightly refined for better rhythm. More importantly, we've added the corresponding semantic HTML tag to reinforce accessibility and ensure the visual hierarchy matches the document's structural hierarchy. For implementation, using fluid typography techniques (like CSS `clamp()`) is recommended for smoother scaling between breakpoints.

#### B. Application: Interface Typography (The "Chrome")

This applies to all UI elements surrounding the content editor. The goal is to be functional, clear, and unobtrusive.

* **Page/View Titles**: Use Heading 2.
* **Section/Card Titles**: Use Heading 3.
* **Button Text**: Use Body Small with Medium (500) weight.
* **Input Field Text**: Use Body Small.
* **Form Labels, Metadata, Tooltips**: Use Label.

* **Enhancement Rationale**: This new section explicitly defines how the master scale applies to the UI. This separation prevents ambiguity and ensures the application's "chrome" has a consistent, functional feel, distinct from the user's creative "canvas."

#### C. Application: Content Typography (The "Canvas")

This is the core of the fabula content experience. It defines the visual representation of the user's text within the editor and reading areas.

* **Headings**: Markdown or outline headings (e.g., `#`, `##`, `*`, `**`) map directly to Heading 1, Heading 2, etc., following the master type scale.
* **Paragraphs**: Default text uses the Body (Default) style for optimal readability.
* **Inline Formatting**:
  * **Bold (`**text**` or `*text*`)**: Rendered with Bold (700) weight.
  * **Italic (`_text_` or `/text/`)**: Rendered with an italic style.
  * **Code/Verbatim (`` `text` ``)**: Rendered using JetBrains Mono with a subtle background color (`bg-subtle`).
  * **Strikethrough (`~~text~~` or `+text+`)**: Rendered with a line-through decoration.
* **Readability Controls (User-configurable)**: fabula empowers users to tailor their writing environment:
  * **Content Font Choice**: Users can select from the default font sets (JetBrains Mono for structure, Inter for clarity, Source Serif Pro for immersive reading) or add custom fonts.
  * **Line Length (Measure)**: Adjustable max-width for the text column (e.g., Narrow, Medium, Wide), ensuring optimal line length (45–75 characters) for comfortable reading.
  * **Line Height**: Adjustable line spacing (Compact, Default, Relaxed) to suit personal preference.

* **Enhancement Rationale**: This section directly addresses the needs of a modern writing and analysis tool:
  * **Semantic Rendering**: Specifies how Markdown and outline syntax are visually translated, supporting fabula's core creative and analytical workflows.
  * **User Empowerment**: Readability controls allow users to shape their own focused creative environment, fully aligning with fabula's mission to empower storytellers and thinkers.

### 4.4. Paragraphs, Lists & Spacing

To ensure structured content is clean and scannable:

* **Paragraph Spacing**: A `0.75em` margin between paragraphs creates clear separation without excessive whitespace.
* **List Indentation**: Nested lists (ordered and unordered) use a `24px` indentation.
* **List Item Spacing**: A `0.25em` margin between list items provides slight breathing room.
* **List and Paragraph Vertical Rhythm**: `<ul>` and `<ol>` elements should have a `margin-block: 0.75em;` to visually separate lists from adjacent paragraphs.
* **Default Line Length for Content**: The main content area (Canvas) should set a `max-width` so that, at the default font size, each line contains 65–75 characters (the optimal measure for reading comfort). This ensures a balanced reading rhythm, even before user customization.

* **Enhancement Rationale**: Using relative units (`em`) for spacing within content allows the layout to scale proportionally if the user changes the base font size, maintaining a harmonious vertical rhythm. Setting a default line length provides an excellent reading experience out of the box, while still allowing users to adjust for personal preference.

### 4.5. Typographic Principles Summary

* **System over Whim**: A single, harmonious type scale governs all text.
* **Separate Concerns**: The UI's typography is distinct from the content's typography. The UI is for function; the content is for focus.
* **Defaults are Smart, Customization is Empowering**: Provide excellent, thoughtful defaults, but give users meaningful control over their personal reading and writing space.
* **Structure is Visual**: The visual hierarchy of text directly reflects its semantic structure, aiding comprehension and accessibility.

## 5. Design Tokens and `@theme` Usage

This section explains how fabula manages design tokens using Tailwind CSS and the `@theme` syntax, ensuring a consistent, scalable, and brand-aligned UI across the platform. All design tokens are defined and applied with fabula’s AI-driven, story visualization, and creative empowerment goals in mind, supporting diverse creative scenarios and future theme/brand expansion.

### 5.1. What are Design Tokens?

Design tokens are platform-agnostic, reusable variables that capture fabula’s core design decisions—such as color, typography, and spacing. Centralized management of these tokens ensures visual consistency, flexible theming, and accelerates both design and development workflows. This is essential for a unified experience across all story visualization, AI interaction, and creative tools in fabula.

### 5.2. Defining and Organizing Tokens

All design tokens are defined in the `theme.css` file within the `@theme` block. This approach allows tokens to be referenced in both Tailwind utility classes and custom CSS, providing a single source of truth for all core design values.

**Example:**

```css
@theme {
  /* Brand & AI Colors */
  --color-primary: #2563EB;         /* fabula Brand Blue */
  --color-ai-accent: #8B5CF6;       /* AI Insight Purple */
  --color-success: #16A34A;
  --color-error: #DC2626;
  --color-accent-teal: #14B8A6;
  --color-accent-amber: #F59E0B;
  --color-accent-pink: #EC4899;

  /* Typography */
  --font-ui: 'Figtree', ui-sans-serif, system-ui, sans-serif;
  --font-content: 'Inter', 'Source Han Sans', sans-serif;

  /* Spacing */
  --spacing-1: 4px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-6: 24px;
  --spacing-8: 32px;
}
```

> **Note:** All token names must follow fabula’s semantic and brand-aligned naming conventions to support future expansion (e.g., multi-brand skins, AI themes).

### 5.3. Using Tokens in Practice

#### In HTML (with Tailwind utility classes)

```html
<div class="bg-[var(--color-primary)] text-[var(--color-ai-accent)] p-[var(--spacing-4)]">
  fabula story visualization example
</div>
```

#### In Custom CSS

```css
.story-node {
  background-color: var(--color-accent-teal);
  color: var(--color-primary);
  padding: var(--spacing-4) var(--spacing-6);
  font-family: var(--font-ui);
}
```

### 5.4. Token Management and Maintenance

* **Centralized Management**: All tokens are defined and maintained only in the `@theme` block of `theme.css` to avoid fragmentation and duplication.
* **Extending and Updating**: Add or update tokens exclusively in `@theme`, and always update the design documentation accordingly.
* **Sync with Tailwind**: After changing tokens, rebuild to ensure Tailwind utility classes and custom CSS use the latest values.
* **Brand and Theme Expansion**: The token system is the foundation for fabula’s future multi-brand, multi-theme (e.g., AI themes, dark mode, creative skins) support.

### 5.5. Best Practices

* Always use tokens instead of hardcoded values in components and styles.
* Regularly review and optimize tokens to ensure alignment with fabula’s brand, product positioning, and evolving user needs.
* All token names should be clear and semantic for team understanding and maintainability.
* When adding or changing tokens, document the rationale and usage scenarios in the design system documentation to keep the team aligned.

---

## 6. Iconography System

This section defines the style, sizing, color, and management of icons in the fabula application. A consistent, intuitive iconography system is a silent language that guides users, enhances creative workflows, and reduces cognitive load—especially in complex, AI-driven story visualization environments.

### 6.1. Icon Style

* **Style**: Line icons, clean, modern, and minimalist—matching fabula’s focus on clarity and creative empowerment.
* **Stroke Weight**: 1.5px for optimal visibility and elegance.
* **Corners & Endpoints**: Rounded, harmonizing with fabula’s typography and border-radius system.

**Rationale:**
Line icons provide a lightweight, unobtrusive visual language that never competes with user content or story visualizations. The 1.5px stroke and rounded details create a friendly, professional, and approachable feel, supporting fabula’s creative brand.

### 6.2. Icon Sizing

Icons are designed on a 4px base grid for perfect alignment with fabula’s spacing system.

| Size      | Dimensions | Usage                                                                 |
|-----------|------------|----------------------------------------------------------------------|
| **Small** | 16px       | Inline with text, status indicators in lists.                        |
| **Medium**| 20px       | Default for most interactive elements (buttons, toolbars, lists).    |
| **Large** | 24px       | Prominent actions, primary navigation.                               |
| **X-Large** | 32px/48px | Section headers, empty-state illustrations (used sparingly).         |

**Rationale:**
A standardized sizing scale ensures visual rhythm and predictability, supporting fabula’s information-dense, tool-rich creative environment.

### 6.3. Icon Colors

Icon colors are derived directly from fabula’s color palette for consistency and accessibility.

| State                | Color Token       | Hex Value   |
|----------------------|-------------------|-------------|
| **Default**          | text-secondary    | `#64748B`   |
| **Hover/Focus**      | text-primary      | `#1E293B`   |
| **Active/Selected**  | Brand Blue        | `#2563EB`   |
| **Disabled**         | disabled          | `#94A3B8`   |
| **AI-Suggested**     | AI Accent         | `#8B5CF6`   |
| **Functional**       | Success, Error, Warning | See functional color tokens |

**Rationale:**
This mapping provides clear, non-verbal feedback and instantly distinguishes AI-generated suggestions from user actions—critical for trust and clarity in AI-driven workflows.

### 6.4. Icon Library & Assets

* **Primary Library**: Lucide ([lucide.dev](https://lucide.dev))
* **Format**: SVG (Scalable Vector Graphics)
* **Implementation**: All icons are imported and used as React components via the official `lucide-react` package, enabling tree-shaking, dynamic theming, and easy customization (size, color, strokeWidth).

**Rationale:**
Lucide’s style, licensing, and breadth perfectly match fabula’s needs for a modern, scalable, and accessible icon system.

### 6.5. Usage Principles

* **Consistency**: Each action is always represented by the same icon (e.g., editing is always a pencil).
* **Clarity Over Art**: Icons must communicate function quickly and clearly. If ambiguous, pair with a text label.
* **Label When in Doubt**: For complex or fabula-specific actions, always use an icon with a concise text label.
* **Alignment**: Use Flexbox with `align-items: center` for perfect vertical alignment of icons and text.
* **Clickability**: All interactive icons must have a minimum clickable area of 44x44px for accessibility.
* **State Communication**: Use distinct icons for toggles (e.g., chevron-right for collapsed, chevron-down for expanded).
* **Minimal Animation**: Animations should be purposeful and subtle (e.g., gentle rotation on state change).

### 6.6. Core Icon Mapping

To ensure consistency, here is the mapping of fabula’s core features to Lucide icons:

| Feature / Action       | Lucide Icon Name   | Rationale                                                                 |
|-----------------------|--------------------|--------------------------------------------------------------------------|
| **Character**         | user               | Represents a story character.                                            |
| **Relationship**      | link-2             | Represents relationships/links in story graphs.                          |
| **Timeline**          | timeline           | Visualizes story progression.                                            |
| **Map / Location**    | map-pin            | Represents locations or settings.                                        |
| **Theme / Motif**     | tag                | Represents themes, motifs, or tags.                                      |
| **AI Assistant**      | sparkles           | Evokes “magic” or intelligent assistance.                                |
| **Settings**          | settings-2         | Application settings.                                                    |
| **Add / Create**      | plus-circle        | Adding new entities or elements.                                         |
| **Edit**              | pencil             | Editing an entity.                                                       |
| **Delete**            | trash-2            | Deleting an entity.                                                      |
| **Expand / Collapse** | chevron-down / chevron-right | Expandable/collapsible UI elements.                           |

---

## 7. Spacing & Layout

This section defines the spatial system of the fabula interface, purpose-built to support creative flow, story visualization, and AI-driven analysis. fabula’s layout is inspired by the metaphor of a creative workspace: interactive elements and narrative content are organized as “cards” floating above a unified background, creating a clear sense of depth, focus, and organization. This system enables users to interact with discrete pieces of information—characters, timelines, relationships—without losing the context of their broader story universe.

### 7.1. Base Unit & Spacing Scale

* **Base Unit**: 4px. All spacing, padding, and margin values are multiples of this unit, supporting a modular, grid-based design that adapts to both dense story maps and immersive writing.
* **Spacing Scale (Tokens)**: Spacing is managed via design tokens and Tailwind classes for consistency and maintainability. All tokens are defined in the design system and referenced throughout the UI.

| Token        | Value (px) | Tailwind Class   | Primary Usage                                                        |
|--------------|------------|------------------|----------------------------------------------------------------------|
| **space-1**  | 4px        | p/m-1, gap-1     | Micro-spacing (e.g., inside tags, between icon and text)             |
| **space-2**  | 8px        | p/m-2, gap-2     | Tight grouping (e.g., icon + label, compact controls)                |
| **space-3**  | 12px       | p/m-3, gap-3     | Dense list items, vertical rhythm in compact lists                   |
| **space-4**  | 16px        | p/m-4, gap-4     | Default element spacing, form fields, button padding                 |
| **space-6**  | 24px        | p/m-6, gap-6     | Default card/component padding, spacing between major UI blocks      |
| **space-8**  | 32px        | p/m-8, gap-8     | Section-level spacing, desktop page margins                          |
| **space-12** | 48px        | p/m-12, gap-12   | Large vertical spacing between major page sections                   |
| **space-16** | 64px        | p/m-16, gap-16   | Hero/splash layouts, marketing page vertical rhythm                  |

* **Design Rationale**: A tokenized, 4px-based scale eliminates arbitrary values, making the UI more predictable and easier to maintain. This system supports fabula’s focus on clarity, creative flow, and a calm, distraction-free workspace. Spacing tokens are used consistently across all story visualization modules, ensuring that relationship maps, timelines, and creative notes feel visually harmonious.

### 7.2. Layout Grids (The Background)

fabula uses a responsive, 12-column grid system to organize “floating cards” and content in a structured, visually aligned manner. This grid adapts to the needs of both immersive writing and complex story visualization.

* **Grid System**: 12-column responsive grid for maximum flexibility in arranging story elements, AI insights, and creative tools.
* **Gutter Width**: space-6 (24px) between columns, ensuring clear separation without visual clutter.
* **Page Margins**:
  * **Desktop**: space-8 (32px)
  * **Tablet**: space-6 (24px)
  * **Mobile**: space-4 (16px)

* **Design Rationale**: The 12-column grid is the industry standard for flexible, information-dense layouts. Responsive gutters and margins ensure fabula adapts gracefully to all screen sizes, supporting both immersive writing and complex story visualization. The grid system is foundational for arranging character networks, timelines, and AI-generated insights in a way that feels both powerful and approachable.

### 7.3. Card Internals (Padding & Content Spacing)

To ensure every “card” in fabula feels consistent and scannable, internal spacing rules are standardized:

* **Default Card Padding**: space-6 (24px) on all sides.
* **Card Header/Footer Padding**: py-4 (16px) vertically, px-6 (24px) horizontally for a balanced, compact feel.
* **Spacing Between Internal Elements**:
  * Between a card’s title (`<h3>`) and its body content: space-4 (16px).
  * Between vertically stacked elements (paragraphs, form groups): space-4 (16px).
  * Between items in a list within a card: space-3 (12px).

* **Design Rationale**: Standardizing card internals makes the UI highly predictable and easy to scan, reducing cognitive load and supporting fabula’s mission of empowering creative focus. These rules apply to all core modules—character cards, relationship overviews, AI suggestion panels, and more.

---

## 8. Visual Style & Effects

This section defines the core visual treatments that give fabula its distinct look and feel. Our philosophy is one of Subtle Sophistication: effects are used not for decoration, but to provide clarity, define hierarchy, and create a tactile, responsive experience. All styles are designed to be clean, modern, and supportive of a focused workflow for storytellers and creative thinkers.

### 8.1. Z-Axis Hierarchy & Shadows

fabula employs a clear, shallow Z-axis model to create depth and focus without visual clutter. There are three primary elevation layers, each with a specific role and shadow treatment:

* **Layer 1: Canvas (z-index: 0)**
  * The application background. No elevation, no shadow.
* **Layer 2: Workspace (z-index: 10)**
  * The main interactive layer for cards, editors, and primary UI. Uses a soft, medium shadow (`shadow-md`):
    * `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);`
  * Purpose: Subtly lifts content above the background, supporting focus and separation.
* **Layer 3: Moment (z-index: 20)**
  * For transient, high-priority UI (modals, popovers, command palette). Uses a larger, more diffuse shadow (`shadow-xl`):
    * `box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);`
  * Purpose: Clearly signals temporary, focused interaction above all other content.

**Design Rationale:**

A shallow, well-defined Z-axis keeps the interface clean and predictable. Shadows are used only to communicate elevation and focus, never as decoration. This supports fabula’s mission of providing a distraction-free, creative workspace. All elevation rules are applied consistently across story cards, AI panels, and modal dialogs.

### 8.2. Border Radius

fabula’s border radius system is designed for a modern, approachable, and creative interface. Three levels are used:

* **Small (`rounded-md`, 6px):** For tags, labels, and inline elements.
* **Medium (`rounded-xl`, 12px):** Default for cards, inputs, and most containers.
* **Large / Pill (`rounded-full`, 9999px):** For primary buttons, avatars, and elements requiring a friendly, prominent appearance.

**Design Rationale:**

Generous, consistent radii create a welcoming, contemporary feel and reinforce fabula’s focus on creative flow. The system ensures visual harmony across all UI elements, from story nodes to AI suggestion chips.

### 8.3. Strokes / Borders

Borders in fabula are minimal and purposeful, used to define boundaries and support clarity, not for decoration.

* **Default Weight:** 1px solid
* **Focus Weight:** 2px solid (for focus rings, meeting accessibility requirements)
* **Color:** Use `border-default` for standard borders, `border-subtle` for dividers
* **Style:** Always solid, never dashed or dotted

**Design Rationale:**

Minimal borders reduce visual noise and keep the interface clean. Focus rings are prominent and accessible, ensuring keyboard navigation is always clear. These rules apply to all interactive elements, including story cards, input fields, and AI controls.

### 8.4. Dividers

Dividers are used to group related content within cards or components.

* **Style:** 1px solid line, horizontal or vertical
* **Color:** Always use the lightest border color (`border-subtle`)

**Design Rationale:**

Dividers should be subtle and unobtrusive, providing gentle visual guidance without drawing attention away from content or creative tasks. This is especially important in dense story maps and relationship diagrams.

### 8.5. Glassmorphism / Blur Effects

**Not Used.**

**Design Rationale:**

fabula avoids glassmorphism and blur effects to maintain clarity, performance, and text readability. The visual language is crisp, layered, and focused, supporting a distraction-free creative environment.

## 9. Interaction States

This section defines the visual feedback for all interactive UI elements across different states. A clear, consistent, and responsive state system is essential for providing user confidence and creating a smooth, tactile experience. Our approach is to make interactions feel tangible, as if the user is physically manipulating the elements on screen.

### 9.1. Core Principles

* **Immediate & Obvious Feedback**: Every user action—a hover, a click, a keypress—must receive an immediate and unambiguous visual response. There should be no doubt that the application has registered the input.
* **Physicality & Depth**: Interaction states should leverage our Z-axis model. Hovering can gently "lift" an element, while pressing can "push" it down, creating a satisfying, tangible feel.
* **Clarity for Accessibility**: The focus state must be distinct and highly visible, ensuring the application is fully navigable via keyboard. It is not an aesthetic choice; it is a functional requirement.
* **Consistency Builds Intuition**: The same interaction patterns will be used for similar components across the entire application, allowing users to build muscle memory and use the tool intuitively.
* **Accessibility & Reduced Motion**: The system must respect the user's operating system preference for reduced motion. When `prefers-reduced-motion` is enabled, all decorative or non-essential animations (such as element slide-ins, fades, or background transitions) should be disabled, retaining only essential transitions that communicate state changes (such as color fades for feedback). This ensures an inclusive experience for users who are sensitive to motion or have vestibular disorders.

### 9.2. State Definitions & Visual Specifications

Here we define the six core interaction states and how they apply to our primary components.

#### A. Default

* **Purpose**: The element's normal, resting state.
* **Visuals**: As defined in the Visual Style & Effects section. Buttons are `rounded-full`, cards are `rounded-xl`, and they rest at Layer 2 (`shadow-md`).

#### B. Hover

* **Purpose**: To signal interactivity and invite the user to click. It answers the question, "Can I click this?"
* **Visuals**:
  * **Background**: The background color subtly darkens. (e.g., Brand Blue becomes a darker shade; `bg-subtle` becomes `bg-ui`).
  * **Transform**: A slight upward translation: `transform: translateY(-2px)`.
  * **Shadow**: The shadow grows slightly larger and softer to enhance the "lifted" effect: `shadow-md` -> `shadow-lg`.

#### C. Focus

* **Purpose**: To clearly indicate the currently active element for keyboard navigation. This is critical for accessibility.
* **Visuals**:
  * **Outline**: A 2px solid outline using Brand Blue is applied.
  * **Offset**: The outline has an offset of 2px so it sits outside the element's border and does not interfere with its shape. `outline-offset: 2px`.
  * **Note**: If an element is both hovered and focused, it will display both the hover state visuals (lifted transform, darker background) and the focus ring.
  * **Focus State Consistency**: By default, focus is indicated with a 2px outline. For elements that already have a border (such as input fields or secondary buttons), it is acceptable to use a thicker or color-changed border to indicate focus, in order to avoid double outlines and maintain visual clarity.

#### D. Active / Pressed

* **Purpose**: To provide instant confirmation that a click or tap has been registered by the system.
* **Visuals**:
  * **Background**: The background color becomes its darkest shade.
  * **Transform**: The "lift" from the hover state is removed, and the element is slightly pushed down: `transform: translateY(1px)`. This creates a satisfying "click" motion.
  * **Shadow**: The shadow is significantly reduced or removed entirely (`shadow-sm` or `shadow-none`) to reinforce the "pressed in" effect.

#### E. Selected / Checked

* **Purpose**: To indicate a persistent, chosen state (e.g., the currently active page in a sidebar, a checked item).
* **Visuals**:
  * **For Buttons/Tabs**: The element remains in its "active" color state (e.g., solid Brand Blue background) but without any transform or shadow effects. The text weight might increase to `SemiBold`.
  * **For List Items/Cards**: A clear visual marker is applied. The most effective pattern is a 2px vertical accent bar on the left side of the item, using Brand Blue. The item's background may also change to a very light, subtle blue (`bg-blue-50` / `color-primary-lightest`).

#### F. Disabled

* **Purpose**: To clearly communicate that an element is not currently interactive.
* **Visuals**:
  * **Opacity**: Reduced to 0.5.
  * **Cursor**: The CSS `cursor: not-allowed` property is applied.
  * **Effects**: All hover, focus, and active state effects are removed. The element is visually and functionally inert.

## 10. Core Component Visual Specifications

This section provides detailed, fabula-specific visual specifications for all core UI components. It is a practical guide for applying the design system’s principles—color, typography, spacing, and interaction—to create a consistent, intuitive, and beautiful user interface. Each component is a direct manifestation of fabula’s brand and product philosophy.

### 10.1. Buttons

Buttons are the primary interactive elements for user-initiated actions. Fabula uses distinct button variants to communicate visual hierarchy and intent.

#### Anatomy & Variants

* **Primary Button**: The most important, positive action on a view (e.g., “Save Note”, “Create Project”). Only one per view is recommended.
* **Secondary Button**: For less critical or alternative actions (e.g., “Cancel”, “Add filter”).
* **Tertiary / Ghost Button**: For low-emphasis actions, often in toolbars or for minor operations (e.g., “Sort”, “More options”).
* **Destructive Button**: For dangerous or irreversible actions (e.g., “Delete”). This variant is based on the Secondary Button, but uses Error Red for border and text. On hover, the background becomes a very light red, providing a clear visual cue for destructive actions.

#### Specifications

| Property         | Primary Button          | Secondary Button        | Tertiary / Ghost Button | Destructive Button        |
|------------------|-------------------------|--------------------------|--------------------------|---------------------------|
| **Height**       | 40px                   | 40px                    | 40px                    | 40px                     |
| **Background**   | Brand Blue (#2563EB)   | bg-ui (#E2E8F0)         | transparent             | transparent               |
| **Text Color**   | white                  | text-primary (#1E293B)  | text-primary (#1E293B)  | Error Red                 |
| **Border**       | none                   | 1px solid border-default| none                    | 1px solid Error Red       |
| **Border Radius**| rounded-full (9999px)  | rounded-full (9999px)   | rounded-full (9999px)   | rounded-full (9999px)     |
| **Padding**      | px-6 (24px)            | px-6 (24px)             | px-4 (16px)             | px-6 (24px)               |
| **Font Style**   | 14px SemiBold          | 14px SemiBold           | 14px SemiBold           | 14px SemiBold             |
| **Icon Size**    | 20px (if present)      | 20px (if present)       | 20px (if present)       | 20px (if present)         |
| **Icon Margin**  | 8px (space-2)          | 8px (space-2)           | 8px (space-2)           | 8px (space-2)             |

#### Interaction States

All buttons follow fabula’s global interaction state rules:

* **Hover**: Lifts up (`translateY(-2px)`) with a `shadow-lg` and darker background.
* **Focus**: Displays a 2px Brand Blue focus ring with a 2px offset.
* **Active/Pressed**: Pushes down (`translateY(1px)`) with `shadow-none` and the darkest background shade.

### 10.2. Form Elements

Input fields are fundamental to fabula. Their design prioritizes clarity, readability, and a clear indication of state.

#### Input Anatomy

* **Label**: 12px Medium text label above the input.
* **Input Area**: Main text entry field.
* **Helper/Error Text**:

#### Input Specifications

| Property         | Value                   |
|------------------|-------------------------|
| **Height**       | 40px                   |
| **Background**   | bg-ui (#E2E8F0)        |
| **Text Color**   | text-primary (#1E293B) |
| **Border**       | 1px solid border-default (#CBD5E1) |
| **Border Radius**| rounded-xl (12px)      |
| **Padding**      | px-4 (16px)            |
| **Font Style**   | 14px Regular           |

#### Input Interaction States

* **Focus**: Border becomes 2px solid Brand Blue. No separate focus ring is needed as the border itself serves this purpose.
* **Error State**: Border becomes 1px solid Error Red, and helper text also uses Error Red.

### 10.2.1. Checkboxes & Radio Buttons

Checkboxes and radio buttons are designed for clarity and accessibility：

* **Box/Dot Size**: 20px
* **Border**: 1px solid border-default
* **Checked State**: Background is Brand Blue (#2563EB), with a white checkmark (checkbox) or dot (radio)
* **Shape**: Checkboxes are square with 4px radius; radios are circular
* **Focus State**: 2px Brand Blue outline or border
* **Spacing**: 8px between control and label

### 10.2.2. Select / Dropdown Menus

Select and dropdown menus are visually consistent with input fields：

* **Trigger**: Same style as input fields (bg-ui, border-default, rounded-xl, 40px height)
* **Menu**: Layer 3 shadow-xl, Layer 2 background, rounded-xl, min-width matches trigger
* **Menu Item**: 40px height, hover bg-ui-hover, selected uses Brand Blue text
* **Focus State**: 2px Brand Blue outline or border

### 10.2.3. Toggles / Switches

Toggles and switches provide a clear on/off state：

* **Track**: 36px x 20px, bg-ui when off, Brand Blue when on
* **Slider**: 16px diameter, white, shadow-sm
* **Border Radius**: Full (pill shape)
* **Transition**: Smooth transform for slider movement
* **Focus State**: 2px Brand Blue outline or border

### 10.2.4. Sliders

Sliders are used in fabula for adjusting values such as timeline zoom, AI suggestion thresholds, or creative parameter tuning. Their design emphasizes clarity, precision, and seamless integration with story visualization and AI-driven workflows.

* **Track Height**: 4px
* **Track Color**: bg-ui by default, Brand Blue for the active segment
* **Thumb Size**: 20px diameter, Brand Blue, shadow-sm for focus
* **Border Radius**: Full (pill shape)
* **Label/Value Display**: Always show current value above or beside the thumb for precise control
* **Focus State**: 2px Brand Blue outline on thumb
* **Interaction**: Supports keyboard and touch input for accessibility

**Design Rationale:**
Sliders must be easy to manipulate and visually unobtrusive, supporting both quick adjustments and fine-tuning. In story timelines or AI parameter panels, they provide immediate, tactile feedback and reinforce fabula’s creative empowerment mission.

---

### 10.3. Cards

Cards are the primary containers for content, features, and functionality, forming the “Workspace” layer of fabula’s Z-axis model. They are used for story elements (characters, events, locations), AI insights, and creative tools.

#### Card Specifications

| Property         | Value                   |
|------------------|-------------------------|
| **Background**   | bg-subtle (#F1F5F9)    |
| **Border Radius**| rounded-xl (12px)      |
| **Padding**      | space-6 (24px)         |
| **Shadow**       | shadow-md              |

* **Header/Footer**: py-4 (16px) vertically, px-6 (24px) horizontally
* **Internal Spacing**: space-4 (16px) between stacked elements, space-3 (12px) between list items

#### Card Interaction States

Cards are typically not interactive. If a card acts as a link or button (e.g., in a file grid or story map), it adopts the full hover/focus/active states: lifting on hover and depressing on click, following fabula’s global interaction rules.

**Design Rationale:**
Cards provide a modular, visually distinct way to organize story elements, AI suggestions, and creative tools. Their consistent structure and spacing reduce cognitive load and support fabula’s mission of empowering creative focus.

---

### 10.4. Tags / Badges

Tags are used for metadata such as categories, priorities, or task statuses from fabula’s Semantic & Status color palette. They are essential for organizing and visualizing complex story structures and AI-generated insights.

#### Tag Specifications

| Property         | Value                   |
|------------------|-------------------------|
| **Background**   | Contextual (e.g., status-todo, priority-high) |
| **Text Color**   | Must provide sufficient contrast with background |
| **Border Radius**| rounded-full (9999px)  |
| **Padding**      | py-1 (4px), px-3 (12px)|
| **Font Style**   | 12px SemiBold          |

* **Icon Support**: Tags may include a small icon (16px) for visual context (e.g., AI, character, location)
* **Spacing**: 8px between tags in a group

**Design Rationale:**
Tags enable quick scanning, filtering, and categorization of story elements and AI outputs. Their pill shape and color coding reinforce fabula’s visual language and support creative organization.

---

### 10.5. Modals

Modals are “Moment” layer components, used for focused tasks that require blocking user interaction with the main workspace. They are used for actions such as editing story elements, confirming AI actions, or displaying critical insights.

#### Modal Anatomy

* **Overlay**: Semi-transparent backdrop covering the entire viewport (`rgba(0, 0, 0, 0.5)`)
* **Modal Card**: Main dialog window, follows Card specifications (bg-base, rounded-xl, shadow-xl)
* **Header**: Contains the title (`<h2>`) and optional close button (X icon)
* **Content**: Modal body, supports rich content and interactive elements
* **Footer / Action Bar**: Contains action buttons (e.g., Primary and Secondary buttons)

#### Modal Specifications

| Property         | Value                   |
|------------------|-------------------------|
| **Overlay BG**   | rgba(0, 0, 0, 0.5)     |
| **Modal Card BG**| bg-base (#FFFFFF)      |
| **Border Radius**| rounded-xl (12px)      |
| **Shadow**       | shadow-xl              |
| **Padding**      | space-8 (32px)         |

* **Focus Management**: Modals must trap focus and be fully keyboard accessible
* **Z-Index**: Always above workspace content (Layer 3)
* **Animation**: Subtle fade/scale in, respecting reduced motion preferences

**Design Rationale:**
Modals provide a focused, distraction-free space for critical actions and information. Their design ensures clarity, accessibility, and seamless integration with fabula’s creative and AI-driven workflows.
