# Setup Instructions for Mercy for Life Website

## Prerequisites Installation

Before you can run the website, you need to install Node.js and npm.

### Install Node.js on macOS

You have several options:

#### Option 1: Using Homebrew (Recommended)

1. Install Homebrew if you haven't already:
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Install Node.js:
```bash
brew install node
```

3. Verify installation:
```bash
node --version
npm --version
```

#### Option 2: Download from Node.js Website

1. Visit https://nodejs.org/
2. Download the LTS (Long Term Support) version for macOS
3. Run the installer
4. Follow the installation prompts

#### Option 3: Using nvm (Node Version Manager)

1. Install nvm:
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```

2. Close and reopen your terminal

3. Install Node.js:
```bash
nvm install --lts
nvm use --lts
```

## Running the Website

Once Node.js is installed:

1. Open Terminal and navigate to the project folder:
```bash
cd "/Users/ashleykissinger/Mercy for Life"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

The website will automatically reload when you make changes to the code!

## Building for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## Quick Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Sign in with GitHub
4. Click "Import Project"
5. Select your repository
6. Click "Deploy"

Vercel will automatically detect it's a Next.js project and configure everything for you!

---

**Need Help?** Check the main README.md for more details or contact the development team.
