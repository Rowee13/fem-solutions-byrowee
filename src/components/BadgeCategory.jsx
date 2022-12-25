import React from "react";

const BadgeCategory = ({ femCategory, categoryColor }) => {
  return (
    <div
      className="flex bg-transparent border uppercase items-center px-4 sm:px-6 rounded-lg"
      style={{ borderColor: categoryColor, color: categoryColor }}
    >
      {femCategory}
    </div>
  );
};

export default BadgeCategory;
