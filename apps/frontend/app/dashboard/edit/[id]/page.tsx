"use client";
import Button from "@/components/form-elements/button";
import Input from "@/components/form-elements/input";
import Text from "@/components/form-elements/text";
import Spinner from "@/components/spinner/spinner";
import {
  CreateApplicationSchema,
  createApplicationSchema,
} from "@/schema/create-application.schema";
import { cn } from "@/utils/cn";
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
  const { userId, getToken } = useAuth();
  const form = useForm<CreateApplicationSchema>({
    resolver: zodResolver(createApplicationSchema),
    defaultValues: { availableDays: [] },
  });
  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = form;
  const { append, remove, fields } = useFieldArray({
    control,
    name: "dailySchedule",
  });

  const days = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const fullDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

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

  useEffect(() => {
    if (data) {
      console.log(data);

      reset({
        name: data.name,
        timeSlot: data.timeSlot,
        availableDays: data.weeklySchedules.availableDays,
        dailySchedule: data.weeklySchedules.dailySchedules,
      });
    }
  }, [data, reset]);

  const { trigger } = useSWRMutation(
    "create-application",
    async (
      _: string,
      { arg: formValues }: { arg: CreateApplicationSchema }
    ) => {
      errorHandler(
        async () => {
          const token = await getToken();

          await httpClient.post("/applications", {
            body: {
              name: formValues.name,
              createdBy: userId,
              dailySchedule: formValues.dailySchedule,
              weeklySchedule: { availableDays: formValues.availableDays },
              timeSlot: formValues.timeSlot,
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

  const handleDayClick = (day: string) => {
    const availableDays = getValues("availableDays");

    if (availableDays.includes(day)) {
      setValue(
        "availableDays",
        availableDays.filter((d) => d !== day)
      );
      remove(fields.findIndex((field) => field.day === day));
    } else {
      append({ day, startTime: "", endTime: "" });
      setValue("availableDays", [...availableDays, day]);
    }
  };

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
        Create an Application
      </Text>
      <FormProvider {...form}>
        <form onSubmit={onSubmit} className="mt-6 flex flex-col gap-y-4">
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="e.g. test-app"
                title="Application Name"
                error={errors.name?.message ? "error" : undefined}
                errorMessage={errors.name?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="timeSlot"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="e.g. 30"
                title="Time Slot Length (in minutes)"
                error={errors.timeSlot?.message ? "error" : undefined}
                errorMessage={errors.timeSlot?.message}
                {...field}
              />
            )}
          />
          <div className="">
            <Text
              className="mb-2"
              lineHeight={16}
              fontWeight={500}
              fontSize={14}
            >
              Select Available Days
            </Text>
            <div className="shadow-sm border rounded-md grid md:grid-cols-7 divide-y md:divide-y-0 md:divide-x">
              {days.map((day) => (
                <div
                  onClick={() => handleDayClick(day)}
                  key={`day_selector_${day}`}
                  className={cn(
                    "w-full hover:bg-slate-50 py-4 flex items-center justify-center cursor-pointer",
                    getValues("availableDays").includes(day) &&
                      "bg-blue-ultra-light font-medium"
                  )}
                >
                  {day}
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-y-6 mt-6">
              {fields
                .sort((a, b) => days.indexOf(a.day) - days.indexOf(b.day))
                .map((field, index) => (
                  <div key={`day_schedule_${field.id}`} className="">
                    <Text fontWeight={500} fontSize={24} lineHeight={32}>
                      {fullDays[days.indexOf(field.day)]}
                    </Text>
                    <div className="mt-4 grid md:grid-cols-2 gap-4">
                      <Controller
                        name={`dailySchedule.${index}.startTime`}
                        control={control}
                        render={({ field }) => (
                          <Input
                            placeholder="e.g. 08:00"
                            title="Start Time"
                            error={
                              errors.dailySchedule?.[index]?.startTime?.message
                                ? "error"
                                : undefined
                            }
                            errorMessage={
                              errors.dailySchedule?.[index]?.startTime?.message
                            }
                            {...field}
                          />
                        )}
                      />
                      <Controller
                        name={`dailySchedule.${index}.endTime`}
                        control={control}
                        render={({ field }) => (
                          <Input
                            placeholder="e.g. 16:00"
                            title="Start Time"
                            error={
                              errors.dailySchedule?.[index]?.endTime?.message
                                ? "error"
                                : undefined
                            }
                            errorMessage={
                              errors.dailySchedule?.[index]?.endTime?.message
                            }
                            {...field}
                          />
                        )}
                      />
                    </div>
                  </div>
                ))}
            </div>
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
