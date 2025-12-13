This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Vercel Blob Storage
# Get your token from: https://vercel.com/dashboard/stores
BLOB_READ_WRITE_TOKEN=your_blob_read_write_token_here

# Video Blob URL (set this after uploading your video)
# You can upload your video at /pages/admin/video-upload
# Then copy the blob URL and set it here
NEXT_PUBLIC_VIDEO_BLOB_URL=your_vercel_blob_video_url_here

# Email Configuration (if needed)
EMAIL_USER=your_email@example.com
EMAIL_APP_PASSWORD=your_app_password_here
```

### Setting up Vercel Blob for Video Storage

1. **Get your Blob token:**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard/stores)
   - Create or select a Blob store
   - Copy the `BLOB_READ_WRITE_TOKEN`

2. **Upload your video:**
   - Run `vercel link` and `vercel env pull` to sync environment variables
   - Start your dev server: `npm run dev`
   - Navigate to `/pages/admin/video-upload`
   - Upload your video file (max 4.5 MB for server uploads)
   - Copy the returned blob URL

3. **Set the video URL:**
   - Add the blob URL to your `.env.local` as `NEXT_PUBLIC_VIDEO_BLOB_URL`
   - Restart your dev server

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

**Note:** Make sure to add your environment variables in the Vercel dashboard under Project Settings > Environment Variables.