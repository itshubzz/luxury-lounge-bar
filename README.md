# Connect Prime Lounge Bar - Digital Menu

A modern, responsive digital menu web application for Connect Prime Lounge Bar in North Macedonia. This project provides a QR code-scannable menu solution that allows customers to browse menu items, view prices, and contact the restaurant directly from their mobile devices.

## 🎯 Project Overview

Connect Prime is a digital menu platform designed to enhance the dining experience by providing a contactless, accessible, and multilingual menu interface. Customers can scan a QR code at their table to instantly access the full menu on their smartphones.

## 🚀 What Problem Does This Solve?

### Key Problems Addressed:

1. **Contactless Menu Access**
   - Eliminates the need for physical menus, reducing contact points and improving hygiene
   - Especially valuable in post-pandemic dining environments

2. **Easy Menu Updates**
   - Update menu items, prices, and descriptions instantly without printing new menus
   - No waste from outdated printed materials

3. **Multi-Language Support**
   - Serves a diverse customer base with native language support
   - Supports Albanian (Shqip), English, and Macedonian (Македонски)
   - Language preference is saved in browser localStorage

4. **Improved Customer Experience**
   - Modern, elegant UI with smooth animations
   - Responsive design that works perfectly on all devices
   - Direct call-to-action buttons for easy ordering

5. **Accessibility & Performance**
   - Fast loading times with Next.js optimization
   - SEO-friendly structure
   - Accessible design with proper ARIA labels

## ✨ Features

- 📱 **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- 🌍 **Multi-Language Support** - Albanian, English, and Macedonian translations
- 🎨 **Modern UI/UX** - Beautiful gradient backgrounds, smooth animations, and elegant typography
- 📞 **Direct Contact** - One-tap calling functionality
- 🏷️ **Organized Menu Categories** - Breakfast, Sandwiches, Pizza, Burgers, Pasta, Grill, Salads, and Extras
- 💾 **Persistent Language Preference** - Remembers user's language choice
- ⚡ **Fast Performance** - Built with Next.js 16 for optimal speed and SEO

## 🛠️ Tech Stack

- **Framework**: [Next.js 16.0.10](https://nextjs.org/) (React 19.2.0)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Fonts**: Geist Sans & Geist Mono (via Next.js)
- **Deployment**: Optimized for Vercel

## 📋 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## 📁 Project Structure

```
connect_prime/
├── app/
│   ├── page.tsx          # Main homepage with hero and menu sections
│   ├── layout.tsx        # Root layout with metadata and providers
│   └── globals.css        # Global styles and animations
├── components/
│   └── language-provider.tsx  # Language context and state management
├── lib/
│   └── translations.ts    # All translations for 3 languages
├── public/
│   └── images/
│       └── logo.jpg       # Company logo
└── package.json
```

## 🔧 Configuration

### Updating Menu Items

Edit `lib/translations.ts` to update menu items, prices, and descriptions. Changes are organized by language, so update all three language variants (sq, en, mk) to maintain consistency.

### Updating Contact Information

The phone number is currently set to a placeholder: `+3897*******`. To update it:

1. Open `lib/translations.ts`
2. Find the `phoneNumber` field in each language section (sq, en, mk)
3. Update the `ctaSecondary` field in the `hero` section for each language
4. Replace `+3897*******` with the actual phone number

### Adding New Languages

1. Add the language code to the `LanguageCode` type in `lib/translations.ts`
2. Add translations object to the `translations` record
3. Add the language option to the language selector in `app/page.tsx`

## 🎨 Customization

### Styling

The project uses Tailwind CSS v4. Main styling files:
- `app/globals.css` - Global styles, animations, and CSS variables
- Component-level Tailwind classes in `app/page.tsx`

### Colors & Theme

The color scheme uses a dark blue palette (`#0A0F51`) with gold accents (`#c8aa6e`). Modify CSS variables in `globals.css` to change the theme.

## 🚀 Deployment

### Deploy on Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new):

1. Push your code to GitHub
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build

### Build for Production

```bash
npm run build
npm start
```

## 📱 Usage

1. **For Restaurant Owners**: 
   - Deploy the application
   - Generate a QR code pointing to your deployed URL
   - Place QR codes on tables
   - Update menu items in `lib/translations.ts` as needed

2. **For Customers**:
   - Scan the QR code at the table
   - Browse menu categories and items
   - Switch languages using the flag buttons
   - Call directly using the phone button

## 🔒 Security

- Next.js 16.0.10 (patched for CVE-2025-66478)
- All dependencies are up to date
- No sensitive data stored client-side

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

## 📝 License

This project is private and proprietary.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
