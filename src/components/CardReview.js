import React from "react";
import StartIcon from "../assets/start.png";

export default function CardReview({ name, address, comment, isSelect }) {
  return (
    <div
      className={`border ${
        isSelect ? "border-red-500" : "border-gray-300"
      } rounded-lg p-5 w-96 h-52`}
    >
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row space-x-5">
          <img
            src="https://images.pexels.com/photos/8573621/pexels-photo-8573621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-10 h-10 rounded-full"
            alt="test"
          />
          <div>
            <div>{name}</div>
            <div>{address}</div>
          </div>
        </div>
        <div className="flex flex-row items-center  space-x-2">
          <div>4,5</div>
          <img src={StartIcon} alt={name} className="w-3 h-3" />
        </div>
      </div>
      <div className="mt-5">{comment}</div>
    </div>
  );
}
