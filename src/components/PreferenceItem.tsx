"use client";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  path?: string;
  icon?: React.ReactNode;
  extra?: React.ReactNode;
}

const PreferenceItem = ({ title, description, path, icon, extra }: Props) => {
  const router = useRouter();

  return (
    <div
      className={`flex justify-between items-center p-4 ${
        path ? "cursor-pointer" : ""
      }`}
      onClick={() => path && router.push(path)}
    >
      <div className="flex items-center space-x-3 px-4">
        {icon}
        <div className="pl-2">
          <h2 className="text-lg font-semibold text-laborit-text-profile dark:text-white">
            {title}
          </h2>
          <p className="text-sm text-laborit-text-gray-title">{description}</p>
        </div>
      </div>
      {extra && extra}
    </div>
  );
};

export default PreferenceItem;
