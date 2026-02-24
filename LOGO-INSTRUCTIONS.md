# Adding Your Logo to the Website

## Step 1: Generate Your Logo
Use the following prompt with an AI image generator (DALL-E, Midjourney, etc.):

```
A modern, clean logo for "Mercy for Life" - a Catholic pro-life ministry. The design should feature elegant typography with a minimalist icon combining a heart and cross or hands cradling life. Color palette: deep blue (#2563eb) and gold (#eab308) accents. Style: contemporary, professional, compassionate, with clean lines. The text "Mercy for Life" should be prominent, readable, and sophisticated. White background, suitable for web use. Flat design, vector-style illustration.
```

## Step 2: Save Your Logo
Save your generated logo as:
- `logo.png` or `logo.svg` (SVG preferred for better quality)
- Create a `public` folder in your project root if it doesn't exist
- Place the logo file in: `public/logo.png` or `public/logo.svg`

## Step 3: Update the Code
In `src/components/Navigation.tsx`, replace the Heart icon import and usage:

**Current:**
```tsx
import { Heart } from 'lucide-react';
// ...
<Heart className="h-9 w-9 text-primary-600 fill-primary-600" />
```

**Change to:**
```tsx
import Image from 'next/image';
// ...
<Image src="/logo.png" alt="Mercy for Life Logo" width={36} height={36} className="h-9 w-9" />
```

**Also update Footer.tsx** the same way (search for the Heart icon and replace it).

## Alternative: Keep Heart Icon
If you prefer to use the logo elsewhere but keep the heart icon, you can add the logo to other sections like the Hero component or create a separate logo component.
