import { Lot } from "@/api/types/lot";

export type LotCard = Pick<
  Lot,
  | "id"
  | "title"
  | "deadline"
  | "currentPrice"
  | "description"
  | "tags"
  | "status"
  | "isSaved"
> & { image: string };

export type AllLots = {
  lots: LotCard[];
  totalPages: number;
  currentPage: number;
};
