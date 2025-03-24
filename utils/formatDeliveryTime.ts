import { DELIVERY_TIMES } from "@/data/constants";

export const formatDeliveryTime = (delivery_time_minutes: number): string => {
  if (delivery_time_minutes >= 60) return "1 hour+";

  for (let i = 0; i < DELIVERY_TIMES.length - 1; i++) {
    const start = DELIVERY_TIMES[i];
    const end = DELIVERY_TIMES[i + 1];

    if (delivery_time_minutes >= start && delivery_time_minutes < end) {
      return `${start}–${end} min`;
    }
  }

  return `${delivery_time_minutes} min`;
};
