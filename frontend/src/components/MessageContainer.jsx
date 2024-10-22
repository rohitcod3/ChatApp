import React from "react";
import { SendInput } from "./SendInput";
import { Messages } from "./Messages";

export const MessageContainer = () => {
  return (
    <div className="md:min-w-[450px] flex flex-col">
      <div>
        <div className="flex gap-2 items-center bg-zinc-800 text-white py-2 mb-2 px-2">
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
              <p>Rohit taplatapla</p>
            </div>
          </div>
        </div>
      </div>
      <Messages />
      <SendInput />
    </div>
  );
};
