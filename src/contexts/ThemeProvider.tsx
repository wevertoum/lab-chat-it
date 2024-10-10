"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect } from "react";

type Props = {
  children: string | React.JSX.Element | React.JSX.Element[];
};

const ThemeProviderCtx = ({ children }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderCtx;
