import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import SplashScreen from "@/components/SplashScreen";
import { cookies } from "next/headers";

import dynamic from "next/dynamic";

const AppThemeProvider = dynamic(() => import("@/contexts/AppThemeProvider"), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Laborit chat",
  description: "Interaja com o chat da Laborit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const theme = cookies().get("__theme__")?.value || "system";

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${urbanist.variable} ${theme}`}
      suppressHydrationWarning
    >
      <body className="p-0 m-0">
        <AppThemeProvider attribute="class" defaultTheme={theme} enableSystem>
          <SplashScreen theme={theme} />
          <div className="bg-white dark:bg-laborit-dark-gray">
            <div>
              <main>{children}</main>
            </div>
          </div>
        </AppThemeProvider>
      </body>
    </html>
  );
}
