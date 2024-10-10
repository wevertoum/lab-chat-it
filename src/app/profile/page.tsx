"use client";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold text-center text-laborit-text-gray-title">
        Profile page
      </h1>
      <p className="text-center text-laborit-text-gray-title">
        pagina com as profile, pagina que exibe o footer e possibilita ir para
        settings e afins
      </p>
      <div>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.push("/profile/preferences")}
        >
          go to preferences
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.push("/chat")}
        >
          Back to chat
        </button>
      </div>
    </div>
  );
}
