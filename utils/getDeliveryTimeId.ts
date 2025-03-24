import { DELIVERY_TIMES } from "@/data/constants";

export const getDeliveryTimeId = (delivery_time_minutes: number) =>
  DELIVERY_TIMES.find((start, i, arr) => {
    const next = arr[i + 1];
    return next
      ? delivery_time_minutes >= start && delivery_time_minutes < next
      : delivery_time_minutes >= start;
  })!.toString();
