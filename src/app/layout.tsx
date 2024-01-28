import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/layout/theme-provider";
import Navbar from "@/components/layout/Navbar";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Melp Business",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "grid grid-flow-rows-[auto,1fr] min-w-min",
          inter.className
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="m-10">{children} </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
