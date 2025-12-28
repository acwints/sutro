# Security Policy

## Overview

The Sutro Restoration Project takes security seriously. This document outlines our security practices and how to report vulnerabilities.

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| Latest  | :white_check_mark: |

As a static website, we maintain only the latest version deployed to production.

## Reporting a Vulnerability

### Do NOT

- Open a public GitHub issue for security vulnerabilities
- Disclose the vulnerability publicly before it's addressed
- Access or modify data that doesn't belong to you

### Do

1. **Email**: Send details to the repository owner via GitHub (click on profile for contact)
2. **Include**:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fixes (optional)

### Response Timeline

- **Acknowledgment**: Within 48 hours
- **Initial Assessment**: Within 7 days
- **Resolution**: Depends on severity, typically within 30 days

## Security Best Practices for Contributors

### What NOT to Commit

Never commit any of the following:

```
# Credentials & Secrets
*.env
*.env.local
*.env.*.local
.env*
secrets.*
credentials.*
*.pem
*.key
*.p12

# API Keys
**/api-key*
**/apikey*

# Database
*.sql
*.sqlite
*.db

# IDE & Editor
.idea/
.vscode/settings.json
*.sublime-workspace

# OS Files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Dependencies (if using any)
node_modules/
```

### Before Committing

1. **Review your changes**: `git diff --staged`
2. **Check for secrets**: Search for patterns like `password`, `secret`, `key`, `token`
3. **Verify no personal data**: Names, emails, addresses
4. **Test locally**: Ensure no console errors

### If You Accidentally Commit Secrets

1. **Don't panic**, but act quickly
2. **Rotate the secret immediately** (change passwords, regenerate API keys)
3. **Remove from git history**:
   ```bash
   # For recent commits
   git reset --soft HEAD~1

   # For older commits, use git filter-branch or BFG Repo-Cleaner
   ```
4. **Force push** (coordinate with maintainers first)
5. **Notify maintainers** about the incident

## Security Considerations for This Project

### Current Security Posture

This is a **static website** with:

- No server-side code
- No database
- No user authentication
- No form submissions (mailto: links only)
- No third-party JavaScript (except Google Fonts)

### Potential Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| XSS via user content | No user-generated content |
| Dependency vulnerabilities | No npm dependencies |
| Third-party script injection | Only Google Fonts (trusted) |
| Image hotlinking abuse | Images served from same origin |

### Content Security

- All images should be from verified sources
- External links should be verified
- No inline JavaScript in HTML (kept in script tags)

## Third-Party Services

| Service | Purpose | Data Shared |
|---------|---------|-------------|
| Vercel | Hosting | Access logs (IP, user agent) |
| Google Fonts | Typography | Standard font requests |
| GitHub | Source code | Public repository |

## Updates to This Policy

This security policy may be updated periodically. Check the commit history for changes.

## Acknowledgments

We appreciate security researchers who help keep this project safe. Contributors who report valid vulnerabilities will be acknowledged (with permission) in our README.

---

*Last updated: December 2024*
