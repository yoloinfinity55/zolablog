+++
title = "Project Specification"
date = 2025-10-02
description = "A specification for this Zola blog project."

[taxonomies]
tags = ["meta", "zola", "project"]
+++

# Project Specification: Zola Blog

## 1. Overview

This project is a personal blog created using the Zola static site generator and the "zolarwind" theme. The blog serves as a platform for publishing articles on various technical topics.

## 2. Technical Stack

*   **Static Site Generator:** Zola
*   **Theme:** zolarwind
*   **Deployment:** GitHub Pages

## 3. Project Structure

The project follows the standard Zola directory structure:

*   `content/`: Contains the markdown content for the blog posts and pages.
*   `themes/`: Contains the "zolarwind" theme.
*   `public/`: The output directory for the generated static site.
*   `config.toml`: The main configuration file for the Zola site.
*   `.github/workflows/deploy.yml`: GitHub Actions workflow for deploying the site to GitHub Pages.

## 4. Content

The blog features articles on a range of technical subjects, including:

*   Internal Interest Rate Calculation
*   Diagrams with Mermaid
*   Game of Fifteen
*   Rust in AI
*   Rust Learning Roadmap
*   Tail Recursion

## 5. Deployment

The blog is deployed to GitHub Pages via a GitHub Actions workflow. The workflow is triggered by a push to the `main` branch.
