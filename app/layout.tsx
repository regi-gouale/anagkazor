import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/src/features/themes/theme.provider";
import { AppHeader } from "@/src/features/layout/header";
import { AppFooter } from "@/src/features/layout/footer";
import clsx from "clsx";

const popins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Anagkazor | Mon profil missionnaire",
  description: "Découvrez mon profil missionnaire",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body className={clsx(popins.className, "bg-secondary h-full")}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="flex flex-col h-full">
            <div className="w-full">
              <AppHeader />
            </div>
            <div className="flex-1 max-w-2xl m-auto py-8 w-full">
              {children}
            </div>
            <div className="w-full mx-auto">
              <AppFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
