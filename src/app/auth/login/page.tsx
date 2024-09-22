"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { FaEye } from "react-icons/fa";

import Company_Logo from "public/Company_Logo.svg";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="mb-32 flex items-center gap-3 p-3">
        <Image src={Company_Logo} alt="Company Logo" width={160} />
        <Label className="max-w-72 text-5xl font-bold">
          Prince Educational Supply
        </Label>
      </div>
      <div className="mb-60 flex w-full max-w-md flex-col gap-3 rounded-sm p-3">
        <div className="flex flex-col gap-1">
          <Label className="ml-3">Email</Label>
          <div className="relative flex items-center">
            <Input placeholder="Email" />
            <Label className="absolute right-3 font-light text-gray-400">
              @prince.com.ph
            </Label>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <Label className="ml-3">Password</Label>
          <div className="relative flex items-center">
            <Input placeholder="Enter password" />
            <FaEye className="absolute right-3" />
          </div>
        </div>

        <Button>Login</Button>
      </div>
    </section>
  );
};

export default LoginPage;
