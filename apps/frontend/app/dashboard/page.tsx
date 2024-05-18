"use client";
import Button from "@/components/form-elements/button";
import Text from "@/components/form-elements/text";
import { httpClient } from "@/utils/http-client";
import TokenService from "@/utils/token-service";
import { useRouter } from "next/navigation";
import React from "react";
import { HiPlus } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import useSWR from "swr";

export default function Dashboard() {
  const router = useRouter();

  const { data } = useSWR(
    "/api/applications",
    async () => {
      return await httpClient.get("/applications", {
        headers: {
          Authorization: `Bearer ${new TokenService("__session").getToken()}`,
        },
      });
    },
    { refreshInterval: 0 }
  );

  return (
    <div>
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
      <div className="border rounded-lg mt-6 flex flex-col divide-y shadow-sm">
        {data
          ? data.data.map((application: any) => (
              <div
                key={application.id}
                className="flex justify-between items-center py-3 px-4"
              >
                <p className="font-medium">{application.name}</p>
                <Button icon={<MdEdit />}>Edit</Button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
