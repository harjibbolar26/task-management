import Image from "next/image";
import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { RxDividerVertical } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-[85%] z-10 max-sm:w-[100%]">
      <div className="p-2 flex justify-between items-center bg-[#fff]">
        <div className="text-lg font-bold ml-6 text-[#999] uppercase">
          <p className="my-auto ml-2">Tasks</p>
        </div>
        <div className="flex items-center mr-4">
          <div className="mr-5 flex justify-between items-center border border-[#eee] p-2 rounded-md max-sm:hidden">
            <IoSearchOutline size={25} color="#ccc" />
            <input
              type="text"
              placeholder="Search for status here"
              className="rounded-md w-full border-none outline-none"
            />
          </div>
          <div className="bg-light p-2 shadow rounded-md mr-2">
            <IoMdNotifications size={25} color="#999" className="" />
          </div>
          <div className="mr-2">
            <RxDividerVertical size={30} color="#999" />
          </div>
          <Image
            src="/avatar.png"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col justify-start ml-2">
            <span className="text-[#666] fs-5">Jibola Paul</span>
            <small className="text-[#bbb]">Project Manager</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
