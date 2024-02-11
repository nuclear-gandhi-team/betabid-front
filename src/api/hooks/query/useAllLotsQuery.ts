"use client";

import { useQuery } from "react-query";
import { toast } from "sonner";

import { Lots } from "@/api/services/lots";
import { AllLots } from "@/api/types/all-lot";

interface AllLotsQueryParams {
  onSuccessCallback?: (data: AllLots) => void;
  NameStartsWith?: string;
  PriceOrder?: 0 | 1;
  Tags?: string[];
  Status?: 0 | 1 | 2;
  Page?: number;
  PageCount?: number;
}

const useAllLotsQuery = ({
  onSuccessCallback,
  ...rest
}: AllLotsQueryParams): [AllLots | undefined, boolean, boolean] => {
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
