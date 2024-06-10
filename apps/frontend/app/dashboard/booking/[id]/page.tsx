"use client";
import Calendar from "@/components/calendar/calendar";
import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/input";
import Text from "@/components/form-elements/text";
import Spinner from "@/components/spinner/spinner";
import {
  CreateApplicationSchema,
  createApplicationSchema,
} from "@/schema/create-application.schema";
import {
  CreateBookingSchema,
  createBookingSchema,
} from "@/schema/create-booking.schema";
import { cn } from "@/utils/cn";
import { dateFormatter } from "@/utils/date-formatter";
import { errorHandler } from "@/utils/error-handler";
import { httpClient } from "@/utils/http-client";
import { useAuth } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function Edit() {
  const { id } = useParams();

  const router = useRouter();
  const { getToken } = useAuth();
  const form = useForm<CreateBookingSchema>({
    resolver: zodResolver(createBookingSchema),
    defaultValues: { day: new Date().toDateString() },
  });
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = form;

  const { data, isLoading, error, mutate } = useSWR(
    `/application/${id}`,
    async () => {
      const token = await getToken();
      const { data } = await httpClient.get(`/applications/${id}`, {
        token: token!,
      });
      return data;
    },
    { refreshInterval: 0, revalidateOnFocus: false, revalidateOnMount: true }
  );

  useEffect(() => {
    if (id) {
      mutate();
    }
  }, [id, mutate]);

  const { trigger } = useSWRMutation(
    "create-application",
    async (_: string, { arg: formValues }: { arg: CreateBookingSchema }) => {
      errorHandler(
        async () => {
          const token = await getToken();

          await httpClient.post("/applications", {
            body: {
              name: formValues.name,
            },
            token: token!,
          });
        },
        {
          onSafeEndStep: () => {
            toast("Application created successfully");
            router.push("/dashboard");
          },
        }
      );
    }
  );

  const onSubmit = handleSubmit((formData) => {
    trigger(formData);
  });

  watch();

  if (isLoading) {
    return (
      <div className="flex flex-grow justify-center items-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="pb-16 w-full">
      <Text fontSize={24} lineHeight={32} fontWeight={500}>
        Book an Appointment
      </Text>
      <FormProvider {...form}>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-y-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="e.g. Jon Doe"
                title="Full Name"
                error={errors.name?.message ? "error" : undefined}
                errorMessage={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="e.g. example@jondoe.com"
                title="Email Address"
                error={errors.email?.message ? "error" : undefined}
                errorMessage={errors.email?.message}
                {...field}
              />
            )}
          />
          <div className="">
            <Calendar
              availableDays={data.availableDays}
              onChange={(value) => console.log(dateFormatter.to(value))}
            />
            <div className="flex flex-col gap-y-6 mt-6"></div>
          </div>
          <div className="bg-white fixed h-14 bottom-0 inset-x-0 flex items-center justify-center border-t">
            <div className="w-full max-w-[1280px] flex items-center justify-end px-6">
              <Button intent={"primary"}>Create</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
