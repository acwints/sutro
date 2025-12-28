# Contributing to Sutro Restoration Project

Thank you for your interest in contributing to the Sutro Restoration Project! This document provides guidelines and best practices for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Style Guidelines](#style-guidelines)
- [Commit Messages](#commit-messages)
- [Pull Request Process](#pull-request-process)
- [Security](#security)

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment. We expect all contributors to:

- Be respectful and considerate in all communications
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Accept responsibility for mistakes and learn from them

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/sutro-restoration.git
   cd sutro-restoration
   ```
3. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Bugs

Before submitting a bug report:
1. Check existing [issues](https://github.com/acwints/sutro-restoration/issues) to avoid duplicates
2. Use a clear, descriptive title
3. Include:
   - Browser and version
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable

### Suggesting Features

Feature requests are welcome! Please:
1. Check existing issues first
2. Describe the feature and its benefit
3. Consider how it fits with the project's goals

### Contributing Code

#### Areas Where Help is Needed

- **Accessibility improvements** (ARIA labels, keyboard navigation)
- **Performance optimization** (image loading, CSS)
- **Responsive design** fixes
- **Browser compatibility** testing
- **Content updates** (with sources)
- **Image contributions** (properly licensed)

#### What We're NOT Looking For

- Major framework additions (React, Vue, etc.) — we prefer vanilla JS
- Third-party CSS frameworks — we maintain custom styles
- Features unrelated to the Sutro Baths restoration mission

## Style Guidelines

### HTML

```html
<!-- Use semantic elements -->
<section id="about" class="section section-about">
  <div class="container">
    <h2>About</h2>
    <p>Content here...</p>
  </div>
</section>

<!-- Include alt text for all images -->
<img src="images/example.jpg" alt="Descriptive alt text">

<!-- Use proper indentation (4 spaces) -->
```

### CSS

```css
/* Use CSS custom properties for colors */
.element {
    color: var(--color-ocean);
    background: var(--color-warm-white);
}

/* Follow existing naming conventions */
.section-name { }
.section-name-element { }
.section-name-element--modifier { }

/* Mobile-first responsive design */
@media (max-width: 768px) {
    /* Mobile styles */
}
```

### JavaScript

```javascript
// Use vanilla JavaScript only
// Prefer const/let over var
const element = document.querySelector('.element');

// Use descriptive variable names
const mobileMenuButton = document.querySelector('.mobile-menu-btn');

// Add comments for complex logic
```

## Commit Messages

Follow these conventions for clear commit history:

```
type: short description (max 72 chars)

Optional longer description explaining the change
in more detail if needed.

Closes #123
```

### Types

- `feat:` — New feature
- `fix:` — Bug fix
- `docs:` — Documentation changes
- `style:` — Formatting, CSS changes (no logic change)
- `refactor:` — Code restructuring
- `perf:` — Performance improvements
- `test:` — Adding tests
- `chore:` — Maintenance tasks

### Examples

```
feat: add lightbox for gallery images

fix: mobile menu not closing on link click

docs: update README with deployment instructions

style: improve button hover states
```

## Pull Request Process

1. **Update documentation** if your changes affect it
2. **Test your changes** across browsers (Chrome, Firefox, Safari)
3. **Test responsive design** at various screen sizes
4. **Ensure no console errors** in browser developer tools
5. **Fill out the PR template** completely

### PR Checklist

- [ ] Code follows the style guidelines
- [ ] Self-reviewed my code
- [ ] Tested on mobile and desktop
- [ ] No sensitive data included
- [ ] Updated documentation if needed
- [ ] Linked related issues

### Review Process

1. A maintainer will review your PR
2. Changes may be requested — this is normal!
3. Once approved, a maintainer will merge your PR
4. Your contribution will be deployed automatically

## Security

### Do NOT Commit

- API keys, tokens, or secrets
- Personal information
- Credentials
- `.env` files
- Database connection strings

### Reporting Security Issues

See [SECURITY.md](SECURITY.md) for our security policy. Do NOT open public issues for security vulnerabilities.

## Image Contributions

When contributing images:

1. **Verify licensing** — only public domain or properly licensed images
2. **Provide attribution** — update `images/IMAGE_SOURCES.md`
3. **Optimize images** — max 1920px width, compressed JPG/WebP
4. **Use descriptive filenames** — `historical-interior-1900.jpg`

## Questions?

- Open a [GitHub Discussion](https://github.com/acwints/sutro-restoration/discussions)
- Check existing issues and documentation

---

Thank you for contributing to preserving and sharing the history of San Francisco's Sutro Baths!
