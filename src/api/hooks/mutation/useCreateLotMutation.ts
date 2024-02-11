"use client";

import { useMutation } from "react-query";
import { toast } from "sonner";

import { Lots } from "@/api/services/lots";
import { CreateLotResponse } from "@/api/types/create-lot";

const useCreateLotMutation = ({
  onSuccessfulCallback,
}: {
  onSuccessfulCallback?: (id: string) => void;
}) => {
  const { mutate, isLoading, isError, data } = useMutation<
    CreateLotResponse,
    Error,
    FormData
  >((lotData: FormData) => Lots.createLot(lotData), {
    onSuccess: (data: CreateLotResponse) => {
      toast("Lot created");
      if (onSuccessfulCallback) {
        onSuccessfulCallback(data.lotId);
      }
    },
    onError: () => {
      toast("Failed to create lot");
    },
  });

  return { mutate, isLoading, isError, data };
};

export default useCreateLotMutation;
