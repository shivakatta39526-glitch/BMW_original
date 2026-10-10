---
generator: pandoc
title: "-"
viewport: width=device-width, initial-scale=1.0, user-scalable=yes
---

# Task & Memory

## 1. Current Project Goal

Build a premium BMW-inspired interactive vehicle website based on the
existing `index.html` implementation.

The website should preserve the existing functionality while making the
experience polished, responsive, cinematic and presentation-ready.

## 2. Existing Functional Requirements

### Navigation

-   Fixed navbar
-   Desktop links
-   Mobile menu
-   Search button
-   Location action
-   Account action
-   Scroll-based navbar styling

### Hero

-   Full-screen vehicle hero
-   Main BMW positioning statement
-   Explore Models button
-   Build Your BMW button
-   Scroll indicator

### Models

Support vehicle exploration through: - All - Series - X - Z - M - BMW i

### Vehicle Cards

Each card should expose: - Image - Model - Category - Description -
Performance or electric range - Starting price - Horsepower - Explore -
Build Your BMW

### Vehicle Details

Detail experience must show: - Image - Category - Model name -
Description - Horsepower - Acceleration - Top speed / range - Build
action - Test drive action

### Configurator

Provide a multi-step experience: - Select model - Select exterior
color - Select wheels - Select interior - View summary

Maintain a visible total price and selected configuration.

### BMW M

Provide: - Performance-focused introduction - M model cards -
Performance metrics - Red accent styling

### BMW i

Provide: - Electric-focused introduction - i model cards - Range and
technology messaging - Cyan/electric accent styling

### Technology / Discover

Present premium BMW-style technology and interior experiences.

### Comparison

Allow comparison of up to three vehicles.

Minimum comparison fields: - Horsepower - 0--60 mph - Top speed -
Electric range - Starting price

### Search

Search should work against vehicle model names and categories.

### Test Drive

Provide a modal form and submission confirmation.

### Finance

Provide a calculator using: - Vehicle price - Down payment - Interest
rate - Term

Return estimated monthly payment.

### Interior

Provide interactive hotspots that reveal information.

## 3. Implementation Memory

Important existing implementation patterns: - Tailwind CSS is used for
utility styling. - Inter is the primary font. - Dark theme is the
foundation. - BMW blue, M red and i cyan are semantic accents. - Vehicle
data is stored in a JavaScript `models` array. - Configuration is stored
in `configuratorState`. - Model cards are rendered dynamically. -
Comparison rows are generated dynamically. - Search results are
generated dynamically. - Modals and overlays are controlled with CSS
classes and JavaScript. - IntersectionObserver controls fade-in
animations. - Navbar styling changes after scrolling.

## 4. Vehicle Data Memory

Vehicle objects support: - id - name - category - type - image -
description - performance - electricRange - price - colors - wheels -
interiors

Categories include: - Series - X - Z - M - i

## 5. Important UX Memory

The user should be able to move naturally through this journey:

Hero → Explore Models → Select Vehicle → View Details → Build Your BMW →
Compare / Test Drive / Finance

Search should provide a second route directly to a vehicle.

## 6. Quality Checklist

Before considering the project complete, verify: - Navigation works -
Mobile menu works - Search works - Model filters work - Model cards
render - Detail modal opens and closes - Configurator opens and closes -
Configurator steps work - Colors/wheels/interiors can be selected -
Price summary updates - Comparison works for up to three models - Test
drive form works - Finance calculator works - Interior hotspots work -
Scroll animations work - Navbar scroll behavior works - Mobile layout
has no horizontal overflow - Buttons have clear hover states - Text
remains readable over images

## 7. Future Enhancement Memory

Potential future improvements: - Replace demo vehicle data with verified
current specifications. - Add real dealer/location integration. - Add
backend form submission. - Add persistent saved configurations. - Add
real vehicle imagery and dynamic configurator previews. - Add
authentication/account functionality. - Add real finance APIs if
required. - Improve accessibility and keyboard navigation. - Optimize
image loading and performance.

## 8. Project Principle

Do not sacrifice the premium automotive experience for unnecessary
functionality. Every feature should support discovery, configuration,
comparison, purchase consideration or driving experience.
