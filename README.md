# Project Management Website

A modern, responsive React website for project management services, built with TypeScript and Tailwind CSS.

## Features

- **Modern Design**: Clean and professional design inspired by Green Aspects website
- **Responsive Layout**: Fully responsive design that works on all devices
- **TypeScript**: Built with TypeScript for better type safety and developer experience
- **Tailwind CSS**: Styled with Tailwind CSS for rapid development and consistent design
- **Component-Based**: Modular React components for easy maintenance and updates

## Sections

1. **Header**: Navigation with mobile menu
2. **Hero**: Compelling headline with call-to-action
3. **Services**: Project management services showcase
4. **Projects**: Recent work portfolio
5. **About**: Company information and statistics
6. **Contact**: Contact form and company details
7. **Footer**: Links and social media

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

Build the application for production:
```bash
npm run build
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary colors: Green theme
- Secondary colors: Gray theme

### Content
All content uses Lorem ipsum placeholder text. Replace with actual content:
- Update text in component files
- Replace placeholder images
- Update contact information

### Styling
Custom styles are defined in `src/index.css` using Tailwind's `@layer` directive.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- React Scripts

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── About.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx
├── index.tsx
└── index.css
```

## License

This project is for client use. All rights reserved. 