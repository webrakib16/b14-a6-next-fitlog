import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/Components/Shared/navbar";
import { WorkoutProvider } from "@/Context/WorkoutContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout tracking application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="min-h-full flex flex-col">
        <WorkoutProvider>
          <Navbar activePage="workouts" />

          {children}

          <ToastContainer position="top-right" autoClose={2000} />
        </WorkoutProvider>
      </body>
    </html>
  );
}