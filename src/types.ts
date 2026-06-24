/**
 * Represents a fleet vehicle used for
 * capacity planning calculations.
 */
export interface Truck {
  id: string;
  maxWeight: number;
}

/**
 * Represents a delivery allocation
 * containing freight weight.
 */
export interface Delivery {
  id: string;
  weight: number;
}
