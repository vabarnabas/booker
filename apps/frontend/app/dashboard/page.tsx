"use client";
import ApplicationContainer from "@/components/application-container/application-container";
import Button from "@/components/form-elements/button";
import Text from "@/components/form-elements/text";
import { SWRData, SWRRenderer } from "@/components/swr-renderer/swr-renderer";
import { httpClient } from "@/utils/http-client";
import TokenService from "@/utils/token-service";
import { useRouter } from "next/navigation";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import useSWR from "swr";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="w-full">
      <div className="flex items-start justify-between">
        <div className="flex flex-col space-y-2">
          <Text fontWeight={500} fontSize={24} lineHeight={32}>
            My Applications
          </Text>
          <p className="text-sm opacity-70">
            Set up and modify your applications
          </p>
        </div>
        <Button
          onClick={() => router.push("/dashboard/create")}
          intent={"secondary"}
        >
          <HiPlus />
          Create
        </Button>
      </div>
      <ApplicationContainer />
    </div>
  );
}
