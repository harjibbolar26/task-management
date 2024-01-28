"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const UpdateTask = ({ handleShowTask, onSubmit, task }) => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  let due_date = currentDate.toISOString().slice(0, 10);
  // console.log(due_date);

  const [taskData, setTaskData] = useState(task); 

  const handleInputChange = (e) => {
    setTaskData({
      ...taskData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(taskData)
  };

  return (
    <div>
      <div className="bg-white opacity-90 backdrop-blur fixed left-[15%] top-[8%] w-[85%] h-[100vh] max-sm:w-full max-sm:h-full max-sm:left-0 max-sm:top-[5%]">
        <div className="rounded-lg bg-[#0DCAF0] p-4 w-1/2 mx-auto translate-y-1/3  max-sm:w-4/5">
          <GrClose
            size={20}
            className="fixed right-4 top-4 cursor-pointer"
            onClick={() => handleShowTask(false)}
          />
          <Image
            src="/teachmate.png"
            width={200}
            height={70}
            className="mb-8"
          />
          <form action="" onSubmit={handleSubmit}>
            <p className="text-lg italic text-white mb-6 uppercase">
              Please edit the fields below to upload the new task.
            </p>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="text-base uppercase text-[#fff] mr-4"
              >
                Task Title:
              </label>
              <input
                value={taskData.title}
                name="title"
                type="text"
                placeholder="Please enter the title of the approved task"
                onChange={handleInputChange}
                className="p-2 text-base border border-[#999] text-[#555] outline-none focus:ring-1 focus:border-[#87d62e] focus:outline-none w-2/3 rounded-md max-sm:block max-sm:w-[90%] max-sm:my-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="decsription"
                className="text-base uppercase text-[#fff] mr-4"
              >
                Task Description:
              </label>
              <input
                value={taskData.description}
                name="description"
                type="text"
                placeholder="Please enter a detailed description"
                onChange={handleInputChange}
                className="p-2 text-base border border-[#999] text-[#555] outline-none focus:ring-1 focus:border-[#87d62e] focus:outline-none w-2/3 rounded-md max-sm:block max-sm:w-[90%] max-sm:my-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="due_date"
                className="text-base uppercase text-[#fff] mr-4"
              >
                Due Date:
              </label>
              <input
                value={taskData.due_date}
                name="due_date"
                type="text"
                placeholder="Due date are automatically assigned by the system"
                onChange={handleInputChange}
                className="p-2 text-base border border-[#999] placeholder-[#fff] outline-none focus:ring-1 focus:border-[#87d62e] focus:outline-none w-2/3 rounded-md max-sm:block max-sm:w-[90%] max-sm:my-2"
                disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="status"
                className="text-base uppercase text-[#fff] mr-4"
              >
                Status:
              </label>
              <input
                value={taskData.status}
                name="status"
                type="text"
                placeholder="Task will be pending..."
                onChange={handleInputChange}
                className="p-2 text-base border border-[#999] placeholder-[#fff] outline-none focus:ring-1 focus:border-[#87d62e] focus:outline-none w-2/3 rounded-md max-sm:block max-sm:w-[90%] max-sm:my-2"
                disabled
              />
            </div>
            <button
              type="submit"
              className="p-3 text-lg bg-white text-[#0DCAF0] uppercase w-[30%] max-sm:w-[40%] content-center my-4 rounded-md hover:bg-[#87d62e] hover:text-white font-bold"
            >
              Update Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
