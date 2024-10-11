"use client";
import { defaultBgClass } from "@/app/utils/constants";
import { useEffect, useState } from "react";
import LogoChatIcon from "./icons/LogoChat";

interface Props {
  theme: string;
}

const SplashScreen = ({ theme }: Props) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div
        className={`splash-screen fixed inset-0 flex flex-col items-center justify-between  z-50 ${defaultBgClass}`}
      >
        <div className="pt-10" />
        <div className="flex-grow flex items-center justify-center">
          <LogoChatIcon size={100} theme={theme} />
        </div>

        <div className="flex flex-col items-center pb-10">
          <h1 className="text-2xl text-black">BrainBox</h1>
          <p className="text-sm text-laborti-text-secondary">Version 1.0</p>
        </div>
      </div>
    );
  }

  return null;
};

export default SplashScreen;
