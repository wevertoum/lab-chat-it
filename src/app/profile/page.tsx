"use client";
import Image from "next/image";
import LockIcon from "@/components/icons/LockIcon";
import LogoutIcon from "@/components/icons/LogoutIcon";
import SettingsIcon from "@/components/icons/SettingsIcon";
import SupportIcon from "@/components/icons/SupportIcon";
import PageContainer from "@/components/PageContainer";
import ChevronIcon from "@/components/icons/ChevronIcon";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import FooterMenu from "@/components/FooterMenu";

export default function Profile() {
  const user = {
    name: "Tom Hillson",
    email: "Tomhill@mail.com",
    avatarUrl: "/assets/images/robot_2.jpg",
  };

  const { theme } = useTheme();
  const router = useRouter();

  const profileItems = [
    {
      label: "Preferences",
      icon: <SettingsIcon size={26} theme={theme} />,
      path: "/profile/preferences",
    },
    {
      label: "Account Security",
      icon: <LockIcon size={26} theme={theme} />,
      extra: (
        <div className="flex flex-col w-[211.3px]">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 my-4">
            <div
              className="bg-laborit-dark-gray h-2.5 rounded-full dark:bg-white"
              style={{ width: "70%" }}
            ></div>
          </div>
          <p className="text-laborit-secondary-label text-[16.33px]">
            Excellent
          </p>
        </div>
      ),
    },
    {
      label: "Customer Support",
      icon: <SupportIcon size={26} theme={theme} />,
    },
    {
      label: "Logout",
      icon: <LogoutIcon size={26} theme={theme} />,
    },
  ];

  return (
    <PageContainer title="Profile" footer={<FooterMenu theme={theme} />}>
      <div className="flex flex-col items-center mt-6 mb-14">
        <div className="relative">
          <Image
            src={user.avatarUrl}
            alt="Profile Picture"
            width={112}
            height={112}
            className="rounded-full aspect-square object-cover"
          />
          <div className="absolute bottom-2 right-0 flex items-center justify-center w-[22px] h-[22px] bg-white rounded-full">
            <div className="w-[14px] h-[14px] rounded-full bg-laborit-ball-gray dark:bg-laborit-ball-green"></div>
          </div>
        </div>
        <h1 className="text-[27px] font-semibold text-laborit-text-profile dark:text-white mt-4">
          {user.name}
        </h1>
        <p className="font-medium text-[14px] text-laborit-text-mail">
          {user.email}
        </p>
      </div>

      <div className="mt-8 space-y-6">
        {profileItems.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col px-8
              ${item.path ? "cursor-pointer" : ""}
              `}
            onClick={() => item.path && router.push(item.path)}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex items-start space-x-4">
                {item.icon}
                <div className="flex flex-col pl-2">
                  <span className="text-laborit-text-profile dark:text-white text-[18.37px]">
                    {item.label}
                  </span>
                  {item.extra && <div>{item.extra}</div>}
                </div>
              </div>
              <ChevronIcon size={9} direction="right" fixedColor="#A7A7AB" />
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
