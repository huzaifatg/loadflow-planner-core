import { Truck, Delivery } from "./types";

export function calculateUtilization(
  truck: Truck,
  deliveries: Delivery[]
) {
  const totalWeight = deliveries.reduce(
    (sum, delivery) => sum + delivery.weight,
    0
  );

  const utilization =
    (totalWeight / truck.maxWeight) * 100;

  return {
    totalWeight,
    utilization,
    isOverCapacity:
      totalWeight > truck.maxWeight,
  };
}
