# The Wild Oasis — Customer Website

## 📖 Project Overview

**The Wild Oasis** is a modern booking platform built with **Next.js**, **Supabase**, and **Tailwind CSS**.  
It allows users to browse and reserve luxury cabins with a smooth and responsive UI.

This project demonstrates advanced Next.js features such as:

- Server & Client Components
- Dynamic Routing
- Server Actions
- State Management with Context API
- Authentication with NextAuth
- Optimized Image Loading with `next/image`
- Incremental Static Regeneration (ISR)
- Error Handling & Loading States

---

## 🚀 Features

- Browse cabins with optimized images
- View detailed cabin pages
- Book cabins with a date selector
- Authentication via Google OAuth
- Profile management and reservation history
- Responsive design with Tailwind CSS
- Optimized performance with caching and SSR
- Custom error handling and loading states

---

## 🛠 Tech Stack

- **Next.js 15** — React Framework with App Router and Server Actions
- **React 19** — UI library
- **Supabase** — Database & authentication backend
- **NextAuth.js** — Authentication
- **Tailwind CSS** — Styling
- **date-fns** — Date utilities
- **Heroicons** — UI icons
- **react-day-picker** — Date picker component

---

## 📁 Project Structure

```
app/
├── _components/
│   ├── Cabin.js
│   ├── ReservationForm.js
│   ├── UpdateButton.js
│   └── ReservationContext.js
├── cabins/
│   ├── [cabinId]/
│   │   ├── page.js
│   │   ├── layout.js
│   │   └── loading.js
│   └── page.js
├── layout.js
├── page.js
└── globals.css
```


---

## ⚙ Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/the-wild-oasis.git
```

Install dependencies

```bash
npm install
```

Create a .env.local file and add the following:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

Run the project

```bash
npm run dev
```

## 🖥 Usage

- Navigate to / to see the home page with a list of cabins.

- Click on a cabin to view details and book.

- Authenticate via Google to make a reservation.

- Manage profile and view reservation history.

## 🛠 Implementation Highlights

### Next.js Features

- Dynamic Routes: [cabinId] pages for cabin details

- generateStaticParams for static site generation

- Server Actions for secure booking and profile updates

- Streaming UI with Suspense for faster loading

### State Management

- Context API for reservation state

- Custom hooks for shared state

### Authentication

- NextAuth.js with Google provider

- Middleware to protect authenticated routes

### Styling

- Tailwind CSS for responsive design

- Custom themes and utility classes

### Performance Optimization

- next/image with remotePatterns for optimized images

- Partial pre-rendering with ISR

- Cache control for data fetching

## 📌 Scripts

```bash
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "prod": "next build && next start"
}
```

## 📦 Dependencies

@heroicons/react — Icons

@supabase/supabase-js — Supabase client

date-fns — Date utilities

next — React framework

next-auth — Authentication

react & react-dom — React libraries

react-day-picker — Date picker

tailwindcss — Styling framework

