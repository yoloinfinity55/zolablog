+++
title = "Project Specification"
date = 2025-10-02
description = "A specification for this Zola blog project."

[taxonomies]
tags = ["meta", "zola", "project"]
+++

# Project Specification: Zola Blog

## 1. Overview

This project is a personal blog created using the Zola static site generator and the "zolarwind" theme. The blog serves as a platform for publishing articles on various technical topics, including programming, algorithms, and web development. The site is optimized for performance, accessibility, and modern web standards.

## 2. Objectives

* Provide a clean, responsive platform for sharing technical knowledge
* Demonstrate proficiency in static site generation and modern web technologies
* Maintain a professional online presence for the author

## 3. Technical Stack

* **Static Site Generator:** Zola (Rust-based, fast and secure)
* **Theme:** zolarwind (custom theme with Tailwind CSS integration)
* **Styling:** Tailwind CSS v4 for utility-first CSS framework
* **Build Tool:** npm scripts for CSS compilation
* **Deployment:** GitHub Pages with GitHub Actions CI/CD
* **Version Control:** Git with GitHub repository

## 4. Project Structure

The project follows the standard Zola directory structure with additional customizations:

* `config.toml`: Main configuration file defining site settings, theme, and build options
* `content/`: Markdown content for blog posts and static pages
  * `blog/`: Individual blog post directories with `index.md` files
  * `pages/`: Static pages like About, Privacy, Terms
* `themes/zolarwind/`: Custom theme with templates, CSS, and assets
* `static/`: Static assets like CSS, images, and JavaScript
* `css/`: Source CSS files for Tailwind compilation
* `templates/`: Custom Zola templates (overrides theme defaults)
* `.github/workflows/`: GitHub Actions workflow for automated deployment
* `package.json`: npm configuration for CSS build scripts

## 5. Features

### Core Features
* Responsive design with mobile-first approach
* Syntax highlighting for code blocks using Zola's built-in highlighter
* RSS feed generation for blog posts
* Tag-based categorization and pagination
* Search functionality (disabled in current config)
* Social media integration
* Multilingual support (English default, with i18n resources)

### Content Features
* Markdown-based content authoring
* Front matter support for metadata (TOML format)
* Image optimization and banner support
* Mermaid diagram integration for technical illustrations
* KaTeX math rendering support
* Custom shortcodes for enhanced content

### Development Features
* Live reload during development (`zola serve`)
* CSS hot-reload with Tailwind watch mode
* Automated deployment on push to main branch
* GitHub Pages hosting with custom domain support

## 6. Dependencies

### Runtime Dependencies
* Zola: Static site generator
* GitHub Pages: Hosting platform

### Development Dependencies
* Node.js and npm: For CSS build tools
* Tailwind CSS: Utility-first CSS framework
* GitHub Actions: CI/CD pipeline

### Theme Dependencies
* zolarwind theme: Includes KaTeX, Mermaid, and other JavaScript libraries

## 7. Development Setup

### Prerequisites
* Rust (for Zola installation)
* Node.js and npm
* Git

### Installation Steps
1. Clone the repository: `git clone https://github.com/yoloinfinity55/zolablog.git`
2. Install Zola: `cargo install zola` or use pre-built binaries
3. Install npm dependencies: `npm install`
4. Build CSS: `npm run css:build`

### Development Workflow
1. Start Zola server: `zola serve`
2. Watch CSS changes: `npm run css:watch` (in separate terminal)
3. Make changes to content or templates
4. Commit and push to trigger deployment

## 8. Content Management

### Blog Posts
* Located in `content/blog/` subdirectories
* Each post has its own directory with `index.md`
* Front matter includes title, date, description, and tags
* Supports images in post directories

### Static Pages
* Located in `content/pages/`
* Used for About, Privacy, Terms, etc.

### Assets
* Images stored alongside content or in `static/`
* CSS compiled from `css/main.css` to `static/css/generated.css`

## 9. Deployment

### Automated Deployment
* Triggered by push to `main` branch
* Uses GitHub Actions workflow in `.github/workflows/deploy.yml`
* Builds site with `zola build`
* Deploys to GitHub Pages

### Manual Deployment
* Run `zola build` to generate `public/` directory
* Push generated files to hosting platform

## 10. Configuration

### Site Configuration (`config.toml`)
* Base URL: https://yoloinfinity55.github.io/zolablog/
* Theme: zolarwind
* Taxonomies: tags with pagination
* Markdown settings: syntax highlighting enabled
* Extra variables: title, description, navigation menus, social links

### Theme Configuration
* Customizable via theme's `config.toml`
* Supports i18n for multiple languages
* Extensive customization options for layout and styling

## 11. Performance and Optimization

* Static site generation ensures fast loading times
* Tailwind CSS with purging minimizes CSS bundle size
* Image optimization through Zola's asset processing
* Minimal JavaScript for interactive features
* SEO-friendly with proper meta tags and structured data

## 12. Maintenance and Future Enhancements

### Current Content Topics
* Financial calculations (IRR/NPV)
* Data visualization (Mermaid diagrams)
* Game development (Game of Fifteen)
* Programming languages (Rust, AI applications)
* Algorithm explanations (Tail recursion)
* Web development tutorials (Eleventy, static sites)

### Potential Improvements
* Add search functionality
* Implement commenting system
* Add analytics tracking
* Expand multilingual support
* Create custom themes or theme variants
* Add more interactive elements

## 13. License and Attribution

* Theme: zolarwind (open source)
* Content: Copyright © 2025 Yolo Infinity
* Repository: https://github.com/yoloinfinity55/zolablog
