export type CreateLot = {
  name: string;
  startPrice: number;
  description: string;
  dateStarted: string;
  deadline: string;
  betStep: number;
  tagIds: number[];
};

export type CreateLotResponse = {
  lotId: string;
};
