# Sutro Restoration Project

A website for the Sutro Baths Restoration Initiative — a public-private partnership proposal to restore San Francisco's historic Sutro Baths through private capital investment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/acwints/sutro-restoration)

**Live Site**: [sutra.vercel.app](https://sutra.vercel.app)

## About the Project

The Sutro Baths were once the world's largest indoor swimming establishment, built in 1896 by Adolph Sutro. After a devastating fire in 1966, only ruins remain. This project proposes a Section 111 Historic Lease to restore the site through private investment while maintaining public access.

### Key Features

- **Zone A (Private Sanctuary)**: Luxury thermal spa generating revenue for maintenance
- **Zone B (Public Access)**: Free tidal pools, observation decks, and interpretive center
- **$0 Taxpayer Cost**: 100% privately funded restoration

## Tech Stack

This is a static website built with:

- HTML5
- CSS3 (vanilla, no frameworks)
- Vanilla JavaScript (minimal, for interactions)
- Google Fonts (Playfair Display, Inter)

No build process required — just open `index.html` in a browser.

## Getting Started

### Prerequisites

- A modern web browser
- (Optional) A local development server for testing

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/acwints/sutro-restoration.git
   cd sutro-restoration
   ```

2. **Open locally**
   ```bash
   # Option 1: Open directly
   open index.html

   # Option 2: Python server
   python3 -m http.server 8000
   # Visit http://localhost:8000

   # Option 3: Node server
   npx serve
   ```

### Project Structure

```
sutro-restoration/
├── index.html              # Main HTML file
├── styles.css              # All styles
├── images/
│   ├── historical/         # Historic Sutro Baths photos (NPS, public domain)
│   ├── current/            # Current ruins photos
│   ├── vision/             # AI renderings of restoration vision
│   └── IMAGE_SOURCES.md    # Image attribution and sources
├── README.md
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

## Adding Images

The site includes placeholder galleries for images. See [`images/IMAGE_SOURCES.md`](images/IMAGE_SOURCES.md) for:

- Recommended image sources (public domain/free)
- Required filenames and dimensions
- Attribution requirements

### Current Images Needed

| Folder | Files Needed | Source |
|--------|--------------|--------|
| `historical/` | ✅ Complete | NPS.gov (public domain) |
| `current/` | 4 images | Unsplash, Wikimedia |
| `vision/` | 6 images | AI renderings |

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Guide

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Security

For security concerns, please see our [Security Policy](SECURITY.md).

**Important**: Never commit sensitive data such as:
- API keys or tokens
- Personal information
- Credentials of any kind

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

## Acknowledgments

- **National Park Service** — Historical images (public domain)
- **Adolph Sutro** — Original visionary behind the Sutro Baths
- **San Francisco community** — For preserving this historic site's memory

## Contact

- **Project Website**: [sutra.vercel.app](https://sutra.vercel.app)
- **GitHub Issues**: [Report a bug or request a feature](https://github.com/acwints/sutro-restoration/issues)

---

*This project is not affiliated with the National Park Service or any government entity. It represents a private proposal for consideration.*
