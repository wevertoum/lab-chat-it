"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold text-center text-laborit-text-gray-title">
        On-Boarding 01
      </h1>
      <p className="text-center text-laborit-text-gray-title">
        pagina com carousel de onboarding e possibilidade de skip para chat
      </p>
      <p className="text-center text-laborit-text-gray-title">
        navegar para chat quando o carousel chega no final
      </p>
      <button
        className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => router.push("/chat")}
      >
        chat page
      </button>
    </div>
  );
}
