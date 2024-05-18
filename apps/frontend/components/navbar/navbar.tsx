"use client";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Text from "../form-elements/text";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="fixed inset-x-0 top-0 flex justify-center border-b bg-white h-16">
      <div className="max-w-[1280px] w-full items-center justify-between px-6 flex">
        <Text
          onClick={() => router.push("/dashboard")}
          className="cursor-pointer"
          fontSize={20}
          lineHeight={28}
          fontWeight={500}
        >
          Booker
        </Text>
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
