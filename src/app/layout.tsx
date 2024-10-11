import type { Metadata } from "next";
import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import ToggleTheme from "@/components/ToggleTheme";
import ThemeProviderCtx from "@/contexts/ThemeProvider";
import SplashScreen from "@/components/SplashScreen";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  weight: ["300", "400", "500", "600", "700", "800", "900"], // Customize weight if needed
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
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${urbanist.variable}`}
      suppressHydrationWarning
    >
      <body className="p-0 m-0">
        <ThemeProviderCtx>
          <SplashScreen />
          <div className="bg-laborit-light-gray dark:bg-laborit-dark-gray">
            <div>
              <div className="absolute top-2 right-2">
                <ToggleTheme />
              </div>
              <main>{children}</main>
            </div>
          </div>
        </ThemeProviderCtx>
      </body>
    </html>
  );
}
