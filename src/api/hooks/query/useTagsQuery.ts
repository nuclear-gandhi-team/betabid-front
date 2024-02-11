"use client";

import { useQuery } from "react-query";
import { toast } from "sonner";

import { Lots } from "@/api/services/lots";
import { Tag } from "@/api/types/tag";

const useTagsQuery = ({
  onSuccessCallback,
}: {
  onSuccessCallback?: (data: Tag[]) => void;
}): [Tag[] | undefined, boolean, boolean] => {
  const { data, isLoading, isError } = useQuery(
    ["getTags"],
    () => Lots.getTags(),
    {
      onSuccess: (data) => {
        if (typeof onSuccessCallback === "function") {
          onSuccessCallback(data);
        }
      },
      onError: () => toast("Failed to load tags"),
    },
  );

  return [data, isLoading, isError];
};

export default useTagsQuery;
