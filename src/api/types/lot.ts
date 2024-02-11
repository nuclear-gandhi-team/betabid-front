import { BidHistory } from "@/api/types/bid-history";

export type Lot = {
  id: number;
  title: string;
  images: string[];
  status: 0 | 1 | 2;
  description: string;
  dateStarted: Date;
  deadline: Date;
  startPrice: number;
  currentPrice: number;
  minNextPrice: number;
  activeBetsCount: number;
  activeUsersCount: number;
  minBetStep: number;
  ownerName: string;
  bidHistory: BidHistory[];
  isSaved: boolean;
  tags: string[];
};
