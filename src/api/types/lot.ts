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
  tags: Tag[];
};

export type BidHistory = {
  id: number;
  amount: number;
  username: string;
  time: Date;
  userEmail: string;
};

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

export type Tag = {
  id: number;
  name: string;
};
