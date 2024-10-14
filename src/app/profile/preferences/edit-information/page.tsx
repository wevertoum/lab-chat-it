"use client";
import PageContainer from "@/components/PageContainer";
import InputGeneric from "@/components/InputGeneric";
import { useState } from "react";
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export default function EditInformation() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleChange = (key: string, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSaveChanges = () => {
    alert(`Values: ${JSON.stringify(formData)}`);
  };

  return (
    <PageContainer title="Edit Information">
      <div className="flex flex-col items-center h-full">
        <div className="flex flex-col gap-6 w-[344px] mb-8 mt-32">
          <InputGeneric
            placeholder="Full Name"
            keyName="fullName"
            icon={<UserIcon className="h-5 w-5 text-gray-400" />}
            onChange={handleChange}
          />
          <InputGeneric
            placeholder="Email"
            keyName="email"
            icon={<EnvelopeIcon className="h-5 w-5 text-gray-400" />}
            onChange={handleChange}
          />
          <InputGeneric
            placeholder="Password"
            keyName="password"
            icon={<LockClosedIcon className="h-5 w-5 text-gray-400" />}
            onChange={handleChange}
          />
        </div>

        <button
          onClick={handleSaveChanges}
          className={`
            bg-laborit-dark-gray dark:bg-laborit-button-save-dark 
            text-white font-semibold text-[16px] h-[68.35px] w-[344px] 
            rounded-[14px]
            `}
        >
          Save Changes
        </button>
      </div>
    </PageContainer>
  );
}
