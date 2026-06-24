import { Truck, Delivery } from "./types";

/**
 * Calculates total allocated weight and truck utilization.
 *
 * Returns:
 * - Total weight assigned to the truck
 * - Utilization percentage
 * - Whether the truck exceeds capacity
 */
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

/*
 * Roadmap
 *
 * TODO:
 * - Add volume capacity validation
 * - Add pallet capacity validation
 * - Support combined weight + volume constraints
 * - Add fleet utilization analytics helpers
 * - Add delivery sequencing utilities
 */
