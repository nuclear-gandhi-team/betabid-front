import React from "react";
import { StarFilledIcon, StarIcon } from "@radix-ui/react-icons";

export interface StarProps {
  isSaved: boolean;
  toggleSave: () => void;
}

const Star = ({ isSaved, toggleSave }: StarProps) => (
  <button
    onClick={toggleSave}
    aria-label={isSaved ? "Remove from saved" : "Save"}
  >
    {isSaved ? (
      <StarFilledIcon className="h-7 w-7" />
    ) : (
      <StarIcon className="h-7 w-7 text-gray-400" />
    )}
  </button>
);

export { Star };
