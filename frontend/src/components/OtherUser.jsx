import React from "react";

export const OtherUser = () => {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-zinc-200 rounded-sm p-2 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="user-profile"
            />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex justify-between gap-2 ">
            <p>Rohit </p>
          </div>
        </div>
      </div>
      <div className="divider my-0 py-0"></div>
    </div>
  );
};
