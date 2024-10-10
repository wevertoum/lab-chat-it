import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import ToggleTheme from "@/components/ToggleTheme";
import ThemeProviderCtx from "@/contexts/ThemeProvider";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" suppressHydrationWarning>
      <body className="p-0 m-0">
        <ThemeProviderCtx>
          <div className={"bg-laborit-light-gray dark:bg-laborit-dark-gray"}>
            <div>
              <div className="absolute top-2 right-2">
                <ToggleTheme />
              </div>
              <main className={`${poppins.className}`}>{children}</main>
            </div>
          </div>
        </ThemeProviderCtx>
      </body>
    </html>
  );
}
