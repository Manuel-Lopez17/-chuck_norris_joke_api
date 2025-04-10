# 🥋 Chuck Norris Joke App

A simple app built with **Next.js 15.3**, **TypeScript**, and **Tailwind CSS** that lets you fetch random Chuck Norris jokes, add your favorites, rate them, and sort by rating.

> Made by Manuel Lopez

---

## 🚀 Features

- 🔀 Fetch jokes from the Chuck Norris API
- 💾 Save jokes to favorites (using `localStorage`)
- ⭐ Rate each favorite
- 📊 Sort by rating (asc/desc)
- 📋 Sticky table headers
- 🔔 Toast notifications for success & error
- 🧼 Prettier formatting support
- 🔥 Built with the new App Router (Next.js 15)

---

## 📦 Tech Stack

- Next.js 15.3
- TypeScript
- Tailwind CSS
- React Hot Toast
- LocalStorage
- pnpm (as package manager)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/Manuel-Lopez17/-chuck_norris_joke_api.git
cd chuck-norris-jokes
```

### 2. Install dependencies
```bash
pnpm install
```

#### 2.1 If you don't have pnpm installed

```bash
npm install -g pnpm
```

### 3. Run the development server

```bash
pnpm dev
```
---
## 🧪 Useful Scripts

```bash
pnpm dev       # Run the development server
pnpm build     # Create an optimized production build
pnpm lint      # Run ESLint
pnpm format    # Format all files using Prettier
```

---

## 📝 Notes About the Implementation

- The project uses localStorage to persist favorite jokes across sessions.
- Prevents duplicate jokes from being added.
- Automatically fetches a new joke after a successful addition.
- Toast messages appear for both success and error events.
- The favorite list uses a sticky table header when it overflows.
- Cleanly structured for scalability and readability.

---

## 👤 Author Implementation Notes

I chose this approach to clearly separate the responsibilities of each component and page.

I used **Tailwind CSS** because I have experience with it, and it significantly speeds up app development.

I added controls to prevent the same joke from being added more than once (in case the API returns it again), and included **toast notifications** to improve the user experience.

Additionally, I assigned **IDs to the jokes in the favorites list** to have better control and management over them.

This project uses **PNPM** as the package manager for its speed and performance benefits.



