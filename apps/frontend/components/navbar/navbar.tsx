"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Text from "../form-elements/text";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 top-0 flex justify-center border-b bg-white h-16">
      <div className="max-w-[1280px] w-full items-center justify-between px-6 flex">
        <div
          onClick={() => router.push("/dashboard")}
          className="flex items-center gap-x-1 text-xl font-semibold cursor-pointer"
        >
          <Image
            src="/logo.svg"
            alt="logo"
            height={24}
            width={24}
            className="rounded-sm"
          />
          <Text fontSize={22} lineHeight={28} fontWeight={500}>
            Booker
          </Text>
        </div>

        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
    </div>
  );
}
