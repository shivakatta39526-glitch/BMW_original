---
generator: pandoc
title: "-"
viewport: width=device-width, initial-scale=1.0, user-scalable=yes
---

# PRD & Architecture

## 1. Product Overview

### Product

BMW Ultimate Driving Machine --- a premium, interactive BMW vehicle
showcase and configuration website.

### Purpose

Create a cinematic automotive experience where users can: - Discover BMW
vehicle models. - Filter models by family. - View vehicle details and
performance information. - Configure a selected BMW. - Compare up to
three vehicles. - Search models. - Explore BMW M and BMW i
experiences. - Explore technology and interior features. - Request a
test drive. - Calculate estimated vehicle finance payments.

## 2. Target Experience

The site should feel like a premium automotive brand experience rather
than a generic business dashboard. The primary qualities are: - Luxury -
Performance - Precision - Technology - Minimalism - Cinematic
presentation - Strong visual hierarchy

## 3. Information Architecture

### Global Navigation

-   Models
-   Build Your BMW
-   BMW M
-   BMW i
-   Technology
-   Discover
-   Offers
-   Search
-   Location / dealer
-   Account
-   Mobile menu

### Main Sections

1.  Hero
2.  Model Explorer
3.  BMW M
4.  BMW i
5.  BMW X family
6.  Z4
7.  Build Your BMW configurator
8.  Vehicle detail experience
9.  Interior experience / hotspots
10. Technology / Discover
11. Vehicle comparison
12. Test drive
13. Finance calculator
14. Offers / dealer actions
15. Footer

## 4. Vehicle Data Architecture

Vehicle records are represented as JavaScript objects containing: - id -
name - category - type - image - description - performance - hp -
acceleration - topSpeed - electricRange - price - colors - wheels -
interiors

Supported categories: - Series - X - Z - M - BMW i

## 5. Core Components

### Navigation

Fixed navigation with responsive desktop and mobile layouts. Navigation
changes appearance after scrolling.

### Hero

Full-screen cinematic vehicle image with: - BMW positioning - Headline -
Supporting statement - Explore Models CTA - Build Your BMW CTA - Scroll
indicator

### Model Explorer

Responsive model grid with category filters: - All - Series - X - Z -
M - BMW i

Each vehicle card supports: - Vehicle image - Category - Model name -
Performance/range highlight - Description - Starting price -
Horsepower - Explore action - Build action

### Vehicle Detail

A modal/detail experience showing: - Large vehicle image - Category -
Model - Description - Horsepower - Acceleration - Top speed or electric
range - Build action - Test drive action

### Configurator

A multi-step configuration experience supporting: 1. Model 2. Exterior
color 3. Wheels 4. Interior 5. Summary

The configuration state maintains: - Selected model - Selected color -
Selected wheel - Selected interior - Calculated price

### Comparison

Users can select up to three models. Comparison displays: - Horsepower -
0--60 mph - Top speed - Electric range - Starting price

### Search

Full-screen search overlay. Search results are filtered by: - Model
name - Category

### Test Drive

Modal form for requesting a test drive. Submission gives a confirmation
message and resets the form.

### Finance Calculator

Finance modal accepts: - Vehicle price - Down payment - Interest rate -
Loan term

It calculates an estimated monthly payment using standard loan-payment
logic.

### Interior Hotspots

Interactive points over an interior image reveal feature information
when clicked.

## 6. State Management

Primary UI state: - currentFilter - selectedModel - configuratorState -
search query - comparison selections - active modal/overlay - active
configurator step

## 7. Interaction Architecture

Required interactions: - Smooth anchor navigation - Mobile menu
open/close - Search overlay open/close - Model filtering - Model detail
open/close - Configurator open/close - Configurator step switching -
Configurator option selection - Comparison updates - Test-drive modal -
Finance calculation - Interior hotspot interaction - Scroll-triggered
animations - Navbar scroll state

## 8. Responsive Architecture

### Desktop

-   Full navigation
-   Multi-column model grid
-   Two-column feature sections
-   Large cinematic imagery

### Tablet

-   Reduced grid columns
-   Flexible spacing
-   Responsive typography

### Mobile

-   Hamburger navigation
-   Full-screen mobile menu
-   Single-column content
-   Horizontally scrollable M cards where appropriate
-   Touch-friendly controls
-   Responsive modals and configurator

## 9. Technical Foundation

The existing implementation uses: - HTML - CSS - JavaScript - Tailwind
CSS CDN - Google Fonts / Inter - Unsplash image URLs

The implementation is client-side and does not require a backend for the
current demo functionality.

## 10. Data / Content Rule

Vehicle specifications and prices in the demo data are presentation
data. They should not automatically be treated as official current BMW
specifications. If the site is presented publicly, clearly distinguish
demo/estimated information from verified official information.
