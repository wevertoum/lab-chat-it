"use client";
import CopyInviteCode from "@/components/CopyInviteCode";
import InviteFriendsIllustration from "@/components/icons/illustrations/InviteFriendsIllustration";
import PageContainer from "@/components/PageContainer";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function InviteFriends() {
  const { theme } = useTheme();
  const inviteCode = "BrainAiPartnerMR";
  const [copySuccess, setCopySuccess] = useState("");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(inviteCode);
      setCopySuccess("Copied!");
      setTimeout(() => setCopySuccess(""), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <PageContainer title="Invite Friends">
      <div className="flex flex-col items-center h-full">
        <div className="mt-10">
          <InviteFriendsIllustration theme={theme} />
        </div>
        <div className="my-20 w-[287px] flex flex-col justify-center items-center">
          <h1 className="text-[24px] font-semibold text-laborit-text-profile dark:text-white">
            Refeer A friend
          </h1>
          <p className="text-[17px] font-normal text-laborit-secondary-invite mt-2 text-center">
            Share Your Promo Code & Get $3 For Each Friend
          </p>
        </div>
        <CopyInviteCode code={inviteCode} onCopy={handleCopy} theme={theme} />
        {copySuccess && (
          <div className="mt-2 text-green-500">{copySuccess}</div>
        )}
      </div>
    </PageContainer>
  );
}
