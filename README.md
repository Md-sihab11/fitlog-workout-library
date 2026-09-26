# FitLog-Workout-Library

FitLog is a simple and responsive workout library built with Next.js. Users can explore different workouts, view workout details, save workouts, and create a personal workout plan.

## 🔗 Live Link
[fit-log](https://fitlog-workout-library-pink.vercel.app/)

## 📁 Project Folder Structure

```text
fitlog/
├── public/                      # Static assets and icons
│   ├── assets/                  # Images and logos (banner, logo)
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/                         # Application source code
│   ├── app/                     # Next.js App Router (pages and layouts)
│   │   ├── my-plan/             # Personalized workout plan page
│   │   │   └── page.tsx
│   │   ├── workouts/            # Workout details dynamic routes
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css          # Global styling & Tailwind CSS imports
│   │   ├── layout.tsx           # Root layout with context & navigation
│   │   ├── loading.tsx          # Global loading UI
│   │   ├── not-found.tsx        # 404 page
│   │   └── page.tsx             # Home page
│   ├── components/              # Modular & reusable UI components
│   │   ├── footer.tsx           # Footer component
│   │   ├── hero.tsx             # Hero section component
│   │   ├── navbar.tsx           # Navigation bar component
│   │   ├── workoutAction.tsx    # Workout action buttons / cards
│   │   └── workoutLibrary.tsx   # Workout library grid & filters
│   ├── context/                 # React Context for global state
│   │   └── WorkoutContext.tsx   # Workout tracking & plan state
│   ├── lib/                     # Utilities & API service layer
│   │   └── api.ts               # Data fetching functions
│   └── types/                   # TypeScript interfaces & types
│       └── worktypes.ts         # Workout and exercise type definitions
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```
## 🛠️ Technologies Used

* Next.js
* React
* TypeScript
* Tailwind CSS
* Context API

## ✨ Key Features

1. **Workout Library**
   Explore a collection of workouts with useful information such as category, difficulty, duration, and equipment.

2. **Workout Details**
   View detailed information about individual workouts, including instructions and workout-related information.

3. **My Plan**
   Add workouts to a personal workout plan and manage the workouts selected for your routine.

4. **Save Workouts**
   Save workouts for quick access and keep track of workouts you want to do later.

5. **Responsive Design**
   The application is designed to provide a smooth experience across desktop, tablet, and mobile devices.

## 📌 Project Purpose

FitLog was built as a Next.js project to practice modern React and Next.js concepts, reusable components, state management, routing, and responsive UI development.
