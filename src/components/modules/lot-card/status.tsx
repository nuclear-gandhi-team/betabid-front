import React from "react";

interface StatusProps {
  children: "preparing" | "open" | "finished";
}

const getStatusStyles = (status: "preparing" | "open" | "finished") => {
  switch (status.toLowerCase()) {
    case "preparing":
      return { circle: "bg-yellow-500", text: "text-yellow-600" };
    case "open":
      return { circle: "bg-green-500", text: "text-green-600" };
    case "finished":
      return { circle: "bg-red-500", text: "text-red-600" };
    default:
      return { circle: "bg-gray-500", text: "text-gray-600" };
  }
};

const Status: React.FC<StatusProps> = ({ children }) => {
  const { circle, text } = getStatusStyles(children);
  return (
    <div className="flex items-center">
      <span
        className={`inline-block h-1.5 w-1.5 mr-1.5 rounded-full ${circle}`}
      />
      <span className={`${text} capitalize font-medium`}>{children}</span>
    </div>
  );
};

export { Status };
