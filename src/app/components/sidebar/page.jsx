"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GrMenu, GrTasks, GrClose } from "react-icons/gr";
import { RiContactsBookLine } from "react-icons/ri";
import { FaUser, FaInfo } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showCloseSidebar, setShowCloseSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
    setShowCloseSidebar(!showCloseSidebar);
  };

  const toggleCloseSidebar = () => {
    setShowCloseSidebar(false);
    setShowSidebar(false);
  };

  return (
    <>
      <div className="max-sm:hidden h-[100vh] w-[15%] fixed left-0 shadow">
        <Link href="/">
          <Image
            src="/teachmate.png"
            alt="teachmate_logo"
            width={200}
            height={70}
          />
        </Link>
        <div className="flex flex-col items-center">
          <div className="flex flex-col my-20">
            <div className="">
              <Link href="/" className="link flex text-[#bbb] my-3 text-lg">
                <AiFillHome size={25} />
                <span className="ml-2">Home</span>
              </Link>
            </div>
            <div className="">
              <Link href="/tasks" className="link flex text-[#bbb] my-3">
                <GrTasks size={25} />
                <span className="ml-2">Tasks</span>
              </Link>
            </div>
            <div className="">
              <Link href="/" className="link flex text-[#bbb] my-3">
                <RiContactsBookLine size={25} />
                <span className="ml-2">Contact</span>
              </Link>
            </div>
            <div className="">
              <Link href="#" className="link flex text-[#bbb] my-3 mb-5">
                <FaUser size={25} />
                <span className="ms-2">Profile</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col my-5">
            <div className="">
              <Link href="/" className="link flex  my-8 text-[#0DCAF0]">
                <FaInfo size={25} color="#0DCAF0" />
                <span className="ms-2">About Us</span>
              </Link>
            </div>
            <div className="">
              <Link href="/" className="link flex text-[red] my-3">
                <MdLogout size={25} color="red" />
                <span className="ms-2">Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full p-2">
        <GrMenu
          size={25}
          className="fixed top-5 left--4 hidden max-sm:block bg-white z-30 cursor-pointer "
          onClick={handleShowSidebar}
        />
      </div>
      {showSidebar && (
        <>
          <div
            onClick={toggleCloseSidebar}
            className="bg-[#00000066] backdrop-blur w-full h-[100%] fixed top-0 left-0 z-30"
          ></div>
          <div className=" h-[100%] w-[40%] fixed left-0 top-0 shadow z-50 bg-[#fff]">
            <Link href="/">
              <Image
                src="/teachmate.png"
                alt="teachmate_logo"
                width={150}
                height={70}
                className="mt-2"
              />
            </Link>
            <div className="flex flex-col items-center">
              <div className="flex flex-col my-20">
                <div className="">
                  <Link href="/" className="link flex text-[#bbb] my-3 text-lg">
                    <AiFillHome size={25} />
                    <span className="ml-2">Home</span>
                  </Link>
                </div>
                <div className="">
                  <Link href="/tasks" className="link flex text-[#bbb] my-3">
                    <GrTasks size={25} />
                    <span className="ml-2">Tasks</span>
                  </Link>
                </div>
                <div className="">
                  <Link href="/" className="link flex text-[#bbb] my-3">
                    <RiContactsBookLine size={25} />
                    <span className="ml-2">Contact</span>
                  </Link>
                </div>
                <div className="">
                  <Link href="#" className="link flex text-[#bbb] my-3 mb-5">
                    <FaUser size={25} />
                    <span className="ms-2">Profile</span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col my-5">
                <div className="">
                  <Link href="/" className="link flex  my-8 text-[#0DCAF0]">
                    <FaInfo size={25} color="#0DCAF0" />
                    <span className="ms-2">About Us</span>
                  </Link>
                </div>
                <div className="">
                  <Link href="/" className="link flex text-[red] my-3">
                    <MdLogout size={25} color="red" />
                    <span className="ms-2">Logout</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {showCloseSidebar && (
        <div className="max-md:block fixed top-3 left-[200px] hidden max-md:my-2 z-50">
          <GrClose size={20} onClick={toggleCloseSidebar} />
        </div>
      )}
    </>
  );
};

export default Sidebar;
