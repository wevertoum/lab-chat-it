"use client";
import ToggleTheme from "@/components/ToggleTheme";
import PageContainer from "@/components/PageContainer";
import { useRouter } from "next/navigation";

export default function Preferences() {
  const router = useRouter();

  return (
    <PageContainer title="Preferences">
      <div className="flex flex-col items-center justify-center py-2">
        <h1 className="text-2xl font-bold text-center text-laborit-text-gray-title">
          Preferences page
        </h1>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.push("/profile/preferences/edit-information")}
        >
          go to edit-information page
        </button>
        <button
          className="bg-green-500 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={() => router.push("/profile/preferences/invite-friends")}
        >
          go to invite-friends page
        </button>
        <ToggleTheme />
      </div>
    </PageContainer>
  );
}
