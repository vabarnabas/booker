"use client";
import Button from "@/components/form-elements/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <Button onClick={() => router.push("/dashboard")}>Go to Dashboard</Button>
    </main>
  );
}
