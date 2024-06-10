"use client";
import React from "react";
import { MdEdit } from "react-icons/md";
import Button from "../form-elements/button";
import { httpClient } from "@/utils/http-client";
import TokenService from "@/utils/token-service";
import useSWR from "swr";
import { useAuth } from "@clerk/nextjs";
import Spinner from "../spinner/spinner";
import { useRouter } from "next/navigation";
import { FaCalendarDay } from "react-icons/fa";

export default function ApplicationContainer() {
  const router = useRouter();
  const { getToken } = useAuth();
  const { data, isValidating, error } = useSWR(
    "/api/applications/me",
    async () => {
      const token = await getToken();
      const { data } = await httpClient.get("/applications/me", {
        token: token!,
      });

      return data;
    },
    { refreshInterval: 0 }
  );

  if (isValidating) {
    return (
      <div className="border justify-center items-center p-4 rounded-lg mt-6 flex flex-col divide-y shadow-sm">
        <Spinner />
      </div>
    );
  }

  if (!isValidating && data && !data.length) {
    return (
      <div className="border justify-center items-center p-4 rounded-lg mt-6 flex flex-col divide-y shadow-sm">
        <p className="text-center">No applications found.</p>
        <Button
          className="mt-1"
          onClick={() => router.push("/dashboard/create")}
        >
          Create
        </Button>
      </div>
    );
  }

  return (
    <div className="border rounded-lg mt-6 flex flex-col divide-y shadow-sm">
      {data.map((item: any) => (
        <div
          key={item.id}
          className="flex justify-between items-center py-3 px-4"
        >
          <p className="font-medium">{item.name}</p>
          <div className="flex gap-x-1.5 items-center">
            <Button
              onClick={() => router.push(`/dashboard/booking/${item.id}`)}
              icon={<FaCalendarDay />}
            >
              Book
            </Button>
            <Button
              onClick={() => router.push(`/dashboard/edit/${item.id}`)}
              icon={<MdEdit />}
            >
              Edit
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
