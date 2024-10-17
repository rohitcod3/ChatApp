import React from "react";
import { ImSearch } from "react-icons/im";
import { OtherUsers } from "./OtherUsers";

export const SideBar = () => {
  return (
    <div className="border-r border-slate-500 p-4 flex flex-col">
      <form className="flex items-center gap-2">
        <input
          className="input input-bordered rounded-md"
          type="text"
          placeholder="Search..."
        />

        <buton type="submit" className="btn btn-circle bg-zinc-500 text-white">
          <ImSearch size="24px" />
        </buton>
      </form>
      <div className="divider px-3"></div>
      <OtherUsers />
      <div className="mt-2">
        <button className="btn btn-sm"></button>
      </div>
    </div>
  );
};
