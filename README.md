# Mercy for Life Website

A modern, professional website for Mercy for Life, a pro-life ministry affiliated with St. Thomas the Apostle Church in Phoenix, Arizona.

## Features

- 🎯 **Hero Section** - Compelling headline with mission statement and call-to-action
- 📧 **Email Signup** - Newsletter subscription with form validation
- 🙏 **Rosary Schedule** - Weekly prayer times and locations with Google Maps integration
- ℹ️ **About Section** - Information about Mercy for Life and church affiliation
- 🎯 **Mission Section** - Core values and vision statement
- 🤝 **Get Involved** - Multiple ways to support the ministry
- 📅 **Events Calendar** - Upcoming gatherings and special events
- 📚 **Resources** - Links to pro-life organizations and pregnancy support services
- 📬 **Contact Form** - Easy way to get in touch
- 📱 **Responsive Design** - Mobile-friendly and accessible

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
mercy-for-life/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navigation.tsx   # Header navigation
│       ├── Hero.tsx         # Hero section
│       ├── EmailSignup.tsx  # Newsletter signup
│       ├── RosarySchedule.tsx # Prayer times
│       ├── Mission.tsx      # Mission statement
│       ├── About.tsx        # About section
│       ├── GetInvolved.tsx  # Ways to help
│       ├── Events.tsx       # Upcoming events
│       ├── Resources.tsx    # Helpful links
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer
├── public/                  # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Customization

### Email Integration

To integrate with an email service like Mailchimp or ConvertKit:

1. Sign up for an email service provider
2. Get your API key
3. Update the form submission handlers in:
   - `src/components/EmailSignup.tsx`
   - `src/components/Contact.tsx`

### Contact Information

Update contact details in:
- `src/components/Contact.tsx` - Email and phone
- `src/components/Footer.tsx` - Footer contact info

### Social Media

Add your social media links in:
- `src/components/Footer.tsx`

### Events

Update events in:
- `src/components/Events.tsx`

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

This Next.js app can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## SEO

The site includes:
- Semantic HTML
- Meta tags for SEO
- Descriptive page titles
- Accessible markup
- Fast loading times

## Support

For questions or issues, contact the Mercy for Life team at info@mercyforlife.org

## License

© 2026 Mercy for Life. All rights reserved.
