"use client";

import { useQuery } from "react-query";
import { toast } from "sonner";

import { Lots } from "@/api/services/lots";
import { Status } from "@/api/types/status";

const useStatusesQuery = ({
  onSuccessCallback,
}: {
  onSuccessCallback?: (data: Status[]) => void;
}): [Status[] | undefined, boolean, boolean] => {
  const { data, isLoading, isError } = useQuery(
    ["getStatuses"],
    () => Lots.getStatuses(),
    {
      onSuccess: (data) => {
        if (typeof onSuccessCallback === "function") {
          onSuccessCallback(data);
        }
      },
      onError: () => toast("Failed to load statuses"),
    },
  );

  return [data, isLoading, isError];
};

export default useStatusesQuery;
