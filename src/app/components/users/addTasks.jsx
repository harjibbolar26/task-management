"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GrClose } from "react-icons/gr";

const AddTask = ({onSubmit, handleShowTask}) => {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  let due_date = currentDate.toISOString().slice(0, 10);
  // console.log(due_date);

  const [newTask, setNewTask] = useState({
    id: "",
    title: "",
    description: "",
    due_date: due_date,
    status: "Pending",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newTask)
    setNewTask({
      id: "",
      title: "",
      description: "",
      due_date: due_date,
      status: "Pending",
    });
  };

  return (
    <div>
      <div className="bg-white opacity-90 backdrop-blur-lg fixed left-[15%] top-[8%] w-[85%] h-[100vh] max-sm:w-full max-sm:h-full max-sm:left-0 max-sm:top-[5%]">
        <div className="rounded-lg bg-[#0DCAF0] p-4 w-1/2 mx-auto translate-y-1/3 max-sm:w-4/5">
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
              Please fill the fields below to add a new task.
            </p>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="text-base uppercase text-[#fff] mr-4"
              >
                Task Title:
              </label>
              <input
                value={newTask.title}
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
                value={newTask.description}
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
                value={newTask.due_date}
                name="due_date"
                type="text"
                placeholder="Due date will be automatically assigned by the system"
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
                value={newTask.status}
                name="status"
                type="text"
                placeholder="Task is pending..."
                onChange={handleInputChange}
                className="p-2 text-base border border-[#999] placeholder-[#fff] outline-none focus:ring-1 focus:border-[#87d62e] focus:outline-none w-2/3 rounded-md max-sm:block max-sm:w-[90%] max-sm:my-2"
                disabled
              />
            </div>
            <button
              type="submit"
              className="p-3 text-lg bg-white text-[#0DCAF0] uppercase w-[30%] content-center my-4 rounded-md hover:bg-[#87d62e] hover:text-white font-bold"
            >
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
