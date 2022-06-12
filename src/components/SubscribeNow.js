import React from "react";

export default function SubscribeNow() {
  return (
    <div className=" relative">
      <div className="absolute left-0 right-0 bg-gray-50 h-1/2" />
      <div className=" container mx-auto relative max-w-5xl bg-white rounded-lg px-12 py-10 flex items-center justify-between">
        <div>
          <div className="text-3xl font-medium mb-4">
            Subscribe Now for
            <br /> Get Special Features!
          </div>
          <div className="font-normal text-xs">
            Let's subscribe with us and find the fun.
          </div>
        </div>
        <button className="bg-red-500 rounded-md drop-shadow-3xl text-white p-3 px-12">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
