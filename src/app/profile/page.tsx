"use client";
import Image from "next/image";
import ClockIcon from "@/components/icons/ClockIcon";
import HouseIcon from "@/components/icons/HouseIcon";
import LockIcon from "@/components/icons/LockIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import MenuGrouped from "@/components/icons/MenuGrouped";
import PersonIcon from "@/components/icons/PersonIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import SupportIcon from "@/components/icons/SupportIcon";
import PageContainer from "@/components/PageContainer";
import ChevronIcon from "@/components/icons/ChevronIcon";
import { useTheme } from "next-themes";

export default function Profile() {
  const user = {
    name: "Tom Hillson",
    email: "Tomhill@mail.com",
    avatarUrl: "/assets/images/robot_2.jpg",
  };

  const { theme } = useTheme();

  return (
    <PageContainer
      title="Profile"
      footer={
        <div className="flex justify-around py-4 bg-laborit-input-background dark:bg-laborit-input-background-dark">
          <HouseIcon size={24} />
          <MenuGrouped size={24} />
          <ClockIcon size={24} />
          <PersonIcon size={24} />
        </div>
      }
    >
      <div className="flex flex-col items-center mt-8">
        <div className="relative">
          <Image
            src={user.avatarUrl}
            alt="Profile Picture"
            width={106}
            height={112}
            className="rounded-full"
          />
          <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-200 rounded-full"></span>
        </div>
        <h1 className="text-lg font-semibold text-white mt-4">{user.name}</h1>
        <p className="text-sm text-gray-400">{user.email}</p>
      </div>
      <div className="mt-8 space-y-6">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <SettingsIcon size={33} theme={theme} />
            <span className="text-white">Preferences</span>
          </div>
          <ChevronIcon size={15} direction="right" fixedColor="#A7A7AB" />
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <LockIcon size={33} theme={theme} />
            <span className="text-white">Account Security</span>
          </div>
          <ChevronIcon size={15} direction="right" fixedColor="#A7A7AB" />
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <SupportIcon size={33} theme={theme} />
            <span className="text-white">Customer Support</span>
          </div>
          <ChevronIcon size={15} direction="right" fixedColor="#A7A7AB" />
        </div>
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <LogoutIcon size={33} theme={theme} />
            <span className="text-white">Logout</span>
          </div>
          <ChevronIcon size={15} direction="right" fixedColor="#A7A7AB" />
        </div>
      </div>
    </PageContainer>
  );
}
