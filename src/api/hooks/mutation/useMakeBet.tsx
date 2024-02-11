"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { User } from "@/api/services/user";
import { Bet } from "@/api/types/bet";

const useMakeBet = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: () => void;
}) => {
  const { mutate, isLoading, isError } = useMutation<any, Error, Bet>(
    (betData: Bet) => User.postBet(betData),
    {
      onSuccess: () => {
        toast("Bet has been made successfully!");
        if (onSuccessfulCallback) {
          onSuccessfulCallback();
        }
      },
      onError: (error) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        toast(`${error.response.data.error}`);
      },
    },
  );

  return { mutate, isLoading, isError };
};

export default useMakeBet;
