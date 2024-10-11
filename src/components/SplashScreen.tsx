"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="splash-screen fixed inset-0 flex flex-col items-center justify-between bg-white z-50">
        <div className="pt-10" />

        <div className="flex-grow flex items-center justify-center">
          <Image
            src="/assets/logo_chat.svg"
            alt="logo"
            width={100}
            height={100}
          />
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
