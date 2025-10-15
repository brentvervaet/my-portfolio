# How to Create a Proper OG Image for Your Portfolio

## The Problem

Google is showing a random project screenshot (IT-Conference app) because:
1. Your current image (`brent-vervaet.webp`) is square (1378x1378)
2. OG images should be landscape (1200x630) for best results
3. Square images get cropped awkwardly on social media
4. Google prefers larger, properly-formatted images

## Quick Fix Options

### Option 1: Use Canva (Easiest - 5 minutes)

1. Go to [canva.com](https://canva.com)
2. Search for "Open Graph" template or create custom 1200x630px
3. Design includes:
   - Your name: **Brent Vervaet**
   - Title: **Full-Stack Developer**
   - Your photo (optional)
   - Website: brentvervaet.dev
   - Use your brand colors (teal theme)
4. Download as PNG or JPG
5. Save to: `/public/og-image.png`

### Option 2: Use Figma (More Control)

1. Create 1200x630px frame
2. Add background with gradient (teal theme)
3. Add your profile photo
4. Add text (large, readable font)
5. Export as PNG
6. Save to: `/public/og-image.png`

### Option 3: Automated with Vercel OG

Use [og-image.vercel.app](https://og-image.vercel.app/) to generate one dynamically.

## Design Tips

### Layout Example
```
┌────────────────────────────────────────────────┐
│                                                │
│  [Photo]    BRENT VERVAET                      │
│             Full-Stack Developer                │
│                                                │
│             React • Next.js • Swift • Java     │
│                                                │
│             brentvervaet.dev                   │
└────────────────────────────────────────────────┘
```

### Design Guidelines
- ✅ Use large, bold text (minimum 60px for name)
- ✅ High contrast (dark bg + light text or vice versa)
- ✅ Keep important content in center (edges get cropped)
- ✅ Use your brand colors (teal/dark from your site)
- ✅ Include your photo (optional but recommended)
- ✅ Add subtle branding elements
- ❌ Don't use small text
- ❌ Avoid busy backgrounds
- ❌ Don't put text near edges

## After Creating the Image

### 1. Save the file
```
/public/og-image.png  (or .jpg)
```

### 2. Update your metadata in `src/app/layout.tsx`

Change this:
```typescript
images: [
  {
    url: '/images/optimized/home/brent-vervaet.webp',
    width: 1378,
    height: 1378,
    alt: 'Brent Vervaet - Full-Stack Developer',
  },
],
```

To this:
```typescript
images: [
  {
    url: '/og-image.png',
    width: 1200,
    height: 630,
    alt: 'Brent Vervaet - Full-Stack Developer Portfolio',
  },
],
```

### 3. Clear Google's cache

After deploying, use these tools to refresh:
- [Google Search Console](https://search.google.com/search-console) - Request re-indexing
- [Facebook Debugger](https://developers.facebook.com/tools/debug/) - Clear cache
- [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 4. Test your OG image

- [opengraph.xyz](https://www.opengraph.xyz/)
- [socialsharepreview.com](https://socialsharepreview.com/)

## Current Status

✅ **Fixed:** Metadata dimensions now match actual image (1378x1378)
⏳ **Todo:** Create proper 1200x630 OG image for better social sharing

## Resources

- [Open Graph Protocol](https://ogp.me/)
- [Canva OG Templates](https://www.canva.com/search/templates?q=open%20graph)
- [Figma Community OG Templates](https://www.figma.com/community/search?resource_type=mixed&sort_by=relevancy&query=og%20image&editor_type=all)
