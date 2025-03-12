# Personal Research Blog

A minimalist Jekyll-based blog for sharing research insights, technical discussions, and academic observations.

## Features

- Clean and responsive design
- Dark/Light mode toggle
- Blog post categorization
- Markdown support for easy content creation
- Resume/CV integration
- Contact page

## Tech Stack

- Jekyll 3.9.5
- GitHub Pages
- SCSS for styling
- JavaScript for theme toggling

## Local Development

### Prerequisites

- Ruby (2.7.0 or higher)
- RubyGems
- Bundler

### Setup

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd researcher
   ```

2. Install dependencies
   ```bash
   bundle install
   ```

3. Run the development server
   ```bash
   bundle exec jekyll serve
   ```

4. Visit `http://localhost:4000` in your browser

## Creating Blog Posts

Add new blog posts to the `_posts` directory using the following format:

```markdown
---
layout: post
title: "Your Post Title"
date: YYYY-MM-DD
categories: [category1, category2]
---

Your content here...
```

## Deployment

This site is configured to deploy automatically to GitHub Pages. Simply push your changes to the main branch:

```bash
git add .
git commit -m "Your commit message"
git push origin main
```

## Customization

- Edit `_config.yml` to update site settings
- Modify styles in `_sass` directory
- Update layout templates in `_layouts` directory

## License

This project is open source and available under the [MIT License](LICENSE).