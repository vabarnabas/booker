"use client";
import Calendar from "@/components/calendar/calendar";
import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/input";
import Text from "@/components/form-elements/text";
import Spinner from "@/components/spinner/spinner";
import useCalendar from "@/hooks/useCalendar";

import {
  CreateAppointmentSchema,
  createAppointmentSchema,
} from "@/schema/create-appointment.schema";
import { cn } from "@/utils/cn";
import { dateFormatter } from "@/utils/date-formatter";
import { errorHandler } from "@/utils/error-handler";
import { generateTimeSlots } from "@/utils/generate-time-slots";
import { httpClient } from "@/utils/http-client";
import { useAuth } from "@clerk/nextjs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import useSWR from "swr";
import useSWRMutation from "swr/mutation";

export default function Edit() {
  const [day, setDay] = useState<null | string>(null);
  const { id } = useParams();

  const router = useRouter();
  const { getToken } = useAuth();
  const form = useForm<CreateAppointmentSchema>({
    resolver: zodResolver(createAppointmentSchema),
  });
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = form;

  console.log(errors);

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

  const { trigger, isMutating } = useSWRMutation(
    "create-application",
    async (
      _: string,
      { arg: formValues }: { arg: CreateAppointmentSchema }
    ) => {
      errorHandler(
        async () => {
          const token = await getToken();

          await httpClient.post("/appointments", {
            body: {
              applicationId: id,
              name: formValues.name,
              date: formValues.date,
              email: formValues.email,
              time: formValues.time,
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

  const getTimeSlots = useCallback(
    (day: string) => {
      if (data) {
        const schedule = data.dailySchedules.find(
          (dailySchedule: any) => dailySchedule.day === day
        );

        return generateTimeSlots(
          schedule.startTime,
          schedule.endTime,
          data.timeSlot
        );
      }
    },
    [data]
  );

  watch();

  if (isLoading || isMutating) {
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
              selectedDay={new Date(getValues("date"))}
              availableDays={data.availableDays}
              onChange={(value, day) => {
                setDay(day);
                setValue("date", dateFormatter.to(value));
                const timeSlots = getTimeSlots(day);
                const time = getValues("time");

                if (timeSlots && !timeSlots.includes(time)) {
                  setValue("time", timeSlots[0]);
                }
              }}
            />
            <Text
              fontSize={24}
              lineHeight={32}
              fontWeight={500}
              className="mt-12"
            >
              Available Timeslots
            </Text>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
              {day
                ? getTimeSlots(day)!.map((timeSlot: string) => (
                    <div
                      key={timeSlot}
                      onClick={() => setValue("time", timeSlot)}
                      className={cn(
                        "border rounded-md px-4 py-3 text-sm flex justify-center items-center hover:bg-blue-ultra-light cursor-pointer",
                        getValues("time") === timeSlot
                          ? "bg-blue-ultra-light"
                          : null
                      )}
                    >
                      {timeSlot}
                    </div>
                  ))
                : null}
            </div>
          </div>
          <div className="bg-white fixed h-14 bottom-0 inset-x-0 flex items-center justify-center border-t">
            <div className="w-full max-w-[1280px] flex items-center justify-end px-6">
              <Button intent={"primary"}>Book</Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
