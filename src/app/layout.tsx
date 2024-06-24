import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "@/app/globals.css";
import { cn } from "@/lib/utils";
import { SideBarAvb } from "@/components/SidBarAvb";
import { ThemeProvider } from "@/components/ThemeProvider";
import { HamburguerMenu } from "@/components/ui/HamburguerMenuAvb";
import { Suspense } from "react";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "SIG AVB",
  description: "Dashboard AVB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let auth = true;
  return (
    <html lang="pt-br">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={<div>Loading...</div>}>
            {auth && <SideBarAvb children={children} />}
          </Suspense>
          <HamburguerMenu />
          {!auth && children}
        </ThemeProvider>
      </body>
    </html>
  );
}
