import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/Components/Shared/navbar";
import Footer from "@/Components/Shared/footer";
import { WorkoutProvider } from "@/Context/WorkoutContext";

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
      <body className="flex min-h-screen flex-col">
        <WorkoutProvider>
          <Navbar activePage="workouts" />

          <main className="flex-1">
            {children}
          </main>

          <Footer />
        </WorkoutProvider>
      </body>
    </html>
  );
}