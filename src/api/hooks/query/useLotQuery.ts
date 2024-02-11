"use client";

import { useQuery } from "react-query";
import { toast } from "sonner";

import { Lots } from "@/api/services/lots";
import { Lot } from "@/api/types/lot";

const useLotQuery = ({
  lotId,
  onSuccessCallback,
}: {
  lotId: string;
  onSuccessCallback?: (data: Lot) => void;
}): [Lot | undefined, boolean, boolean] => {
  const { data, isLoading, isError } = useQuery(
    ["lot", lotId],
    () => Lots.getLot(lotId),
    {
      onSuccess: (data) => {
        if (typeof onSuccessCallback === "function") {
          onSuccessCallback(data);
        }
      },
      onError: () => toast("Failed to load the lot"),
    },
  );

  return [data, isLoading, isError];
};

export default useLotQuery;
