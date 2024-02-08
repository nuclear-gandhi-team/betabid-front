import React from "react";
import { ShadowInnerIcon } from "@radix-ui/react-icons";

interface TagProps {
  tag: string;
}

interface TagsListProps {
  tags: string[];
}

const getColorForTag = (tag: string) => {
  switch (tag.toLowerCase()) {
    case "furniture":
      return "bg-yellow-200 text-yellow-700";
    case "antiques":
      return "bg-red-200 text-red-700";
    case "other":
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  const colorClass = getColorForTag(tag);
  return (
    <div
      className={`flex items-center ${colorClass} text-xs px-2 py-0.5 mr-2 rounded-full`}
    >
      <ShadowInnerIcon className={`mr-1 h-2.5 w-2.5 ${colorClass}`} />
      <span>{tag}</span>
    </div>
  );
};

const TagsList: React.FC<TagsListProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap">
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </div>
  );
};

export { Tag, TagsList };
