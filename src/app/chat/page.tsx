"use client";
import { useRouter } from "next/navigation";

export default function Chat() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold text-center text-laborit-text-gray-title">
        Chat page
      </h1>
      <p className="text-center text-laborit-text-gray-title">
        Esas pagina começa exibindo um tutorial de como usar o chat, quando a
        começa conversa, o chat é exibido.
      </p>
      <div>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.push("/")}
        >
          Go to home
        </button>
        <button
          className="bg-orange-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.push("/profile")}
        >
          Go to profile
        </button>
      </div>
    </div>
  );
}
