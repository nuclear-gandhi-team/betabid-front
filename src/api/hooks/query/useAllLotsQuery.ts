"use client";

import { useQuery } from "react-query";
import { toast } from "sonner";

import { Lots } from "@/api/services/lots";
import { AllLots } from "@/api/types/all-lot";

const useAllLotsQuery = ({
  onSuccessCallback,
  ...rest
}: {
  onSuccessCallback?: (data: AllLots) => void;
}): [AllLots | undefined, boolean, boolean] => {
  const { data, isLoading, isError } = useQuery(
    ["getAllLots", rest],
    () => Lots.getAllLots(rest),
    {
      onSuccess: (data) => {
        if (typeof onSuccessCallback === "function") {
          onSuccessCallback(data);
        }
      },
      onError: () => toast("Failed to load lots"),
    },
  );

  return [data, isLoading, isError];
};

export default useAllLotsQuery;
