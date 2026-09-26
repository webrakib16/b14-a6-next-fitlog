# 🏋️ FitLog

> A dark-themed workout library and workout planning application built with Next.js.

FitLog is a simple and modern workout companion where users can explore workouts, view detailed exercise information, add workouts to today's plan, save workouts for later, and manage their workout routine.

---

## 🌐 Live Website

🔗 **Live Demo:** https://b14-a6-next-fitlog.vercel.app/

🔗 **GitHub Repository:** https://github.com/webrakib16/b14-a6-next-fitlog

---

## 📌 About The Project

FitLog is built to make workout planning simple and organized.

Users can browse a workout library, check complete workout details, add exercises to today's plan, save exercises for later, and manage their selected workouts from the **My Plan** page.

The project follows a dark gym-focused UI with a simple and responsive design.

---

## ✨ Key Features

### 🏋️ Workout Library

- Browse available workouts
- View workout images
- See targeted muscle groups
- View equipment information
- See duration, calories, and rating
- Click any workout to view its full details

### 📋 Today's Plan

- Add workouts to today's plan
- View all planned workouts
- See total exercises
- See total workout minutes
- See total calories
- Mark workouts as done
- Remove workouts from the plan

### 💾 Save For Later

- Save workouts for later
- View saved workouts from the Saved tab
- Remove saved workouts
- Saved workout count is displayed in the Navbar

### 🔎 Workout Details

Each workout has a dedicated details page containing:

- Workout name
- Workout image
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Workout instructions

### ↕️ Workout Sorting

Workouts in My Plan can be sorted by:

- Duration
- Calories
- Rating

The default sorting option is **Duration**.

### 🔔 Toast Notifications

Toast notifications are shown when users:

- Add a workout to today's plan
- Save a workout
- Mark a workout as done
- Remove a workout
- Remove a saved workout

---

## 🛠️ Technologies Used

- **Next.js**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **DaisyUI**
- **Context API**
- **React Toastify**
- **REST API**

---

## 🧩 Main Concepts Used

This project uses the following concepts:

- Next.js App Router
- React Components
- Props
- State Management
- `useState`
- `useEffect`
- Event Handling
- Conditional Rendering
- Array Methods
- JSON Data Handling
- Data Fetching
- Routing
- Dynamic Routing
- Context API
- Client Components
- Server Components
- Tailwind CSS
- DaisyUI

---

## 📂 Project Structure

```text
FitLog/
│
├── public/
│
├── src/
│   │
│   ├── app/
│   │   ├── my-plan/
│   │   │   └── page.tsx
│   │   │
│   │   ├── workouts/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── assets/
│   │   ├── banner.png
│   │   └── logo.png
│   │
│   ├── Components/
│   │   └── Shared/
│   │       ├── banner.tsx
│   │       ├── footer.tsx
│   │       ├── navbar.tsx
│   │       ├── workouts.tsx
│   │       └── WorkoutActions.tsx
│   │
│   ├── Context/
│   │   └── WorkoutContext.tsx
│   │
│   └── types/
│       └── workout.ts
│
├── package.json
├── README.md
├── tsconfig.json
└── next.config.ts
```

---

## 🚀 Getting Started

First, clone the repository:

```bash
git clone https://github.com/webrakib16/b14-a6-next-fitlog.git
```

Then, go to the project directory:

```bash
cd b14-a6-next-fitlog
```

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Then open:

```text
http://localhost:3000
```

in your browser to see the result.

---

## 🔗 API

### FitLog API

#### All Workout Data

```text
https://api.abcz.workers.dev/api/fitlog
```

#### Single Workout Details

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

---

## 👨‍💻 Author

**Rakib**

🔗 GitHub: https://github.com/webrakib16