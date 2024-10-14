"use client";
import ToggleTheme from "@/components/ToggleTheme";
import PageContainer from "@/components/PageContainer";
import PreferenceItem from "@/components/PreferenceItem";
import EyeIcon from "@/components/icons/EyeIcon";
import PaymentIcon from "@/components/icons/PaymentIcon";
import InviteFriendsIcon from "@/components/icons/InviteFriendsIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import AccountIcon from "@/components/icons/AccountIcon";
import { useTheme } from "next-themes";

export default function Preferences() {
  const { theme } = useTheme();

  const preferencesItems = [
    {
      title: "Account Information",
      description: "Change your Account information",
      icon: <AccountIcon size={26} theme={theme} />,
      path: "/profile/preferences/edit-information",
    },
    {
      title: "Password",
      description: "Change your password",
      icon: <EyeIcon size={26} theme={theme} />,
    },
    {
      title: "Payment Methods",
      description: "Add Your Credit / Credit Cards",
      icon: <PaymentIcon size={26} theme={theme} />,
    },
    {
      title: "Invite Your Friends",
      description: "Get $3 For Each Invitation!",
      icon: <InviteFriendsIcon size={26} theme={theme} />,
      path: "/profile/preferences/invite-friends",
    },
    {
      title: "Theme Colour",
      description: "Change Your Theme Colour",
      icon: <SettingsIcon size={26} theme={theme} />,
      extra: <ToggleTheme />,
    },
  ];

  return (
    <PageContainer title="Preference">
      <div className="flex flex-col items-center justify-center py-2">
        <div className="w-full max-w-md mt-8 space-y-4">
          {preferencesItems.map((item, index) => (
            <PreferenceItem key={index} {...item} />
          ))}
        </div>
      </div>
    </PageContainer>
  );
}
