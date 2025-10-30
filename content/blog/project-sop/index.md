+++
title = "Project Standard Operating Procedure"
date = 2025-10-29
description = "Standard operating procedures for developing and maintaining the Zola blog project."

[taxonomies]
tags = ["meta", "zola", "project", "sop"]
+++

# Project Standard Operating Procedure (SOP)

## 1. Introduction

This document outlines the standard operating procedures for the Zola blog project. It serves as a guide for developers, contributors, and maintainers to ensure consistent development practices, code quality, and deployment processes.

## 2. Development Environment Setup

### Prerequisites
- Rust toolchain (latest stable version)
- Node.js (v18 or later) and npm
- Git
- Text editor or IDE (VS Code recommended)

### Initial Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yoloinfinity55/zolablog.git
   cd zolablog
   ```

2. Install Zola:
   ```bash
   cargo install zola
   ```

3. Install npm dependencies:
   ```bash
   npm install
   ```

4. Build CSS:
   ```bash
   npm run css:build
   ```

### Development Workflow
1. Start the Zola development server:
   ```bash
   zola serve
   ```

2. In a separate terminal, watch CSS changes:
   ```bash
   npm run css:watch
   ```

3. Open `http://127.0.0.1:1111` in your browser

## 3. Code Development Standards

### File Organization
- Follow the established Zola directory structure
- Place blog posts in `content/blog/` subdirectories
- Use `index.md` for content files
- Store images alongside content or in `static/`

### Front Matter Standards
All content files must include proper front matter:
```toml
+++
title = "Post Title"
date = 2025-10-29
description = "Brief description of the post"

[taxonomies]
tags = ["tag1", "tag2"]
+++
```

### Markdown Guidelines
- Use descriptive headings (H1 for title, H2+ for sections)
- Include alt text for all images
- Use code blocks with syntax highlighting
- Keep lines under 80 characters for readability

### CSS Development
- Use Tailwind CSS utility classes
- Custom styles go in `css/main.css`
- Follow mobile-first responsive design
- Test across different screen sizes

## 4. Version Control Procedures

### Branching Strategy
- `main`: Production-ready code
- `develop`: Integration branch for features
- Feature branches: `feature/feature-name`
- Bug fixes: `fix/issue-description`

### Commit Guidelines
- Use clear, descriptive commit messages
- Start with verb (Add, Fix, Update, Remove)
- Reference issue numbers when applicable
- Keep commits focused on single changes

Example commit messages:
```
Add: New blog post about Rust learning roadmap
Fix: Corrected math rendering in IRR calculation post
Update: Dependencies in package.json
```

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes and commit
3. Test locally (`zola serve`)
4. Push branch and create PR
5. Request review from maintainers
6. Address feedback and merge

## 5. Content Creation Process

### Blog Post Creation
1. Create new directory: `content/blog/post-slug/`
2. Add `index.md` with front matter and content
3. Add images to the post directory if needed
4. Test the post locally
5. Commit and push

### Content Quality Checklist
- [ ] Spelling and grammar checked
- [ ] Code examples tested and working
- [ ] Images optimized and properly sized
- [ ] Links verified and working
- [ ] Front matter complete and accurate
- [ ] Tags relevant and descriptive

### Image Guidelines
- Use JPG for photos, PNG for graphics
- Optimize images for web (under 500KB)
- Include descriptive alt text
- Use consistent naming conventions

## 6. Testing Procedures

### Local Testing
- Run `zola serve` and check all pages
- Test responsive design on different screen sizes
- Verify all links and navigation
- Check syntax highlighting in code blocks
- Test math rendering (KaTeX) and diagrams (Mermaid)

### Build Testing
- Run `zola build` to ensure no build errors
- Check generated `public/` directory
- Verify RSS feed generation
- Test sitemap.xml

### Cross-browser Testing
- Test on Chrome, Firefox, Safari, and Edge
- Verify mobile responsiveness
- Check accessibility features

## 7. Deployment Process

### Automated Deployment
- Push to `main` branch triggers GitHub Actions
- Workflow builds the site and deploys to GitHub Pages
- Monitor deployment status in Actions tab

### Manual Deployment (if needed)
1. Build the site:
   ```bash
   zola build
   ```

2. Verify build output in `public/` directory

3. Deploy to hosting platform

### Post-deployment Checks
- Verify site loads correctly
- Check all pages and functionality
- Test contact forms and interactive elements
- Monitor for any broken links

## 8. Maintenance Procedures

### Regular Maintenance Tasks
- Update dependencies monthly
- Review and update content for accuracy
- Monitor site performance and SEO
- Backup content and configuration

### Security Updates
- Monitor for Zola, theme, and dependency updates
- Apply security patches promptly
- Review third-party integrations regularly

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor page load times
- Optimize images and assets
- Minimize JavaScript and CSS bundles

## 9. Issue Management

### Bug Reports
- Use GitHub Issues for bug tracking
- Include steps to reproduce
- Provide browser and OS information
- Attach screenshots when relevant

### Feature Requests
- Describe the feature and its benefits
- Provide use cases and examples
- Consider implementation complexity

### Issue Resolution Process
1. Triage and label issues
2. Assign to appropriate team member
3. Create branch for fix/feature
4. Implement solution
5. Test and review
6. Merge and close issue

## 10. Documentation Updates

### When to Update Documentation
- After significant code changes
- When adding new features
- When processes change
- At least quarterly review

### Documentation Standards
- Keep README.md current
- Update this SOP as needed
- Document configuration changes
- Maintain changelog for releases

## 11. Communication Guidelines

### Team Communication
- Use GitHub for code-related discussions
- Slack/Discord for general communication
- Email for formal announcements

### Community Engagement
- Respond to comments and feedback promptly
- Engage with readers on social media
- Consider community contributions

## 12. Emergency Procedures

### Site Down
1. Check GitHub Pages status
2. Verify repository settings
3. Check recent commits for issues
4. Roll back if necessary
5. Communicate with users

### Data Loss
1. Check local backups
2. Restore from Git history
3. Verify data integrity
4. Update backup procedures

### Security Incident
1. Assess the threat
2. Isolate affected systems
3. Apply fixes
4. Notify affected parties
5. Review and improve security measures

## 13. Continuous Improvement

### Regular Reviews
- Monthly process review
- Quarterly technology assessment
- Annual goal setting

### Metrics to Track
- Site performance scores
- Development velocity
- User engagement metrics
- Error rates and uptime

### Learning and Training
- Stay updated with Zola developments
- Learn new web technologies
- Share knowledge with team members
- Attend relevant conferences/webinars

---

This SOP should be reviewed and updated regularly to reflect changes in technology, processes, and team needs. All team members are encouraged to suggest improvements and contribute to maintaining this document.
