import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/navbar/navbar";
import clsx from "clsx";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booker",
  description: "This is Booker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html className={inter.className} lang="en">
        <body className="flex justify-center text-slate-800">
          <Toaster position="top-right" />
          <div
            className={clsx(
              "flex justify-center max-w-[1280px] pt-20 min-h-screen pb-4 w-full px-6"
            )}
          >
            {children}
          </div>
          <Navbar />
        </body>
      </html>
    </ClerkProvider>
  );
}
