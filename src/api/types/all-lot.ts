import { Lot } from "@/api/types/lot";

export type AllLot = Pick<
  Lot,
  | "id"
  | "title"
  | "deadline"
  | "currentPrice"
  | "description"
  | "status"
  | "isSaved"
  | "images"
  | "tags"
>;

export type AllLots = {
  lots: AllLot[];
  totalPages: number;
  currentPage: number;
};
