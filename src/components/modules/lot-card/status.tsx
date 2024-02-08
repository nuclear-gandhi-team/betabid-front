import React from "react";

interface StatusProps {
  children: "preparing" | "active" | "ended";
}

const getStatusStyles = (status: "preparing" | "active" | "ended") => {
  switch (status) {
    case "preparing":
      return { circle: "bg-yellow-500", text: "text-yellow-600" }; // Желтый цвет для кружочка и текста
    case "active":
      return { circle: "bg-green-500", text: "text-green-600" }; // Зеленый цвет для кружочка и текста
    case "ended":
      return { circle: "bg-red-500", text: "text-red-600" }; // Красный цвет для кружочка и текста
    default:
      return { circle: "bg-gray-500", text: "text-gray-600" }; // Серый цвет по умолчанию
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
