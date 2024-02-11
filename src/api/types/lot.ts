import { BidHistoryItem } from "@/api/types/bid-history";

export type Lot = {
  id: number;
  title: string;
  images: string[];
  tags: string[];
  status: "preparing" | "open" | "finished";
  description: string;
  dateStarted: string;
  deadline: string;
  startPrice: number;
  currentPrice: number;
  minNextPrice: number;
  activeBetsCount: number;
  activeUsersCount: number;
  minBetStep: number;
  ownerName: string;
  bidHistory: BidHistoryItem[];
  isSaved: boolean;
};
