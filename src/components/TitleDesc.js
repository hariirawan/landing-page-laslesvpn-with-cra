import React from "react";

export default function TitleDesc({ title, desc }) {
  return (
    <div className=" container max-w-5xl mx-auto mb-10 ">
      <div className="text-center text-3xl font-medium mb-5">{title}</div>
      <div className="text-center font-normal text-sm text-gray-600">
        {desc}
      </div>
    </div>
  );
}
