# fabula Design Overview

This document outlines the main visualization concepts and design principles for fabula.

## Core Visualization Dimensions

### Characters

- **Character Network Graph**: Force-directed, interactive, node size by importance, edge color/style by relationship.
- **Character Arc Chart**: Line chart showing custom metrics (e.g., power, morality) over story time.
- **Screen Time Chart**: Pie or bar chart of character presence by chapter or overall.

### Plot

- **Story Timeline**: Horizontal, scrollable timeline of key events, with support for multiple narrative threads.
- **Scene Flowchart**: Flowchart of scenes and their sequence, supporting non-linear narratives.
- **Sentiment Arc**: Line chart of emotional tone (via NLP) across the story.

### Setting & Location

- **Interactive Map**: Custom map with event markers and character movement paths.
- **Location Flow Diagram**: Sankey diagram showing movement between locations.

### Themes & Motifs

- **Word Cloud**: Visualize most frequent words or phrases.
- **Concept Map**: Network of abstract concepts and their connections.

## Design Principles

- Clarity and usability for writers
- Interactive, explorable visualizations
- Modular, extensible architecture

For UI/UX guidelines, see `docs/uiux/README.md`.
