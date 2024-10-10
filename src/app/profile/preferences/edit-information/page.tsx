"use client";
import { useRouter } from "next/navigation";

export default function EditInformation() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold text-center text-laborit-text-gray-title">
        Edit Information page
      </h1>
      <button
        className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
        onClick={() => router.push("/profile/preferences")}
      >
        back to preferences
      </button>
    </div>
  );
}
