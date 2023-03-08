import { Direction } from "./direction.type";

export const DirectionNames = ["NORTH", "EAST", "SOUTH", "WEST"] as const;

export function isValidDirection(value: string): value is Direction {
  return DirectionNames.includes(value as Direction);
}
