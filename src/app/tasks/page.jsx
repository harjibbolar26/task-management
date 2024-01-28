"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar/page";
import Navbar from "../components/navbar/page";
import { GoCheckCircleFill } from "react-icons/go";
import { TbProgressBolt } from "react-icons/tb";
import { BsPlusCircleDotted } from "react-icons/bs";
import { IoSearchOutline } from "react-icons/io5";
import ShowTasks from "../components/users/showTasks";
import AddTask from "../components/users/addTasks";
import UpdateTask from "../components/users/updateTask";

const Tasks = () => {
  const url = "http://localhost:3002/tasks";
  const [showAddTask, setShowAddtask] = useState(false);
  const [showUpdateTask, setShowUpdatetask] = useState(false);
  const [updateTask, setUpdatetask] = useState(false);
  const [task, setTask] = useState([]);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [completedStatus, setCompletedStatus] = useState(0);
  const [pendingStatus, setPendingStatus] = useState(0);

  const getTasks = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setTask(data);

      let completed = 0;
      let pending = 0;

      data.forEach((task) => {
        if (task.status === "Completed") {
          completed++;
        } else if (task.status === "Pending") {
          pending++;
        }
      });

      setCompletedStatus(completed)
      setPendingStatus(pending)
      // console.log(completedStatus, pendingStatus);
    } catch (error) {
      setError(error.message);
    }
  };

  const submitTask = async (newTask) => {
    // console.log("Code Submit task");
    const res = await fetch(`${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(newTask),
    });
    // console.log("Passed method");
    const newAddedTask = await res.json();
    setTask([...task, newAddedTask]);
    setShowAddtask(false);
    // console.log(newAddedTask);
  };

  const editTask = async (taskId) => {
    const taskToUpdate = task.find((tt) => tt.id === taskId);
    setUpdatetask(taskToUpdate);
    setShowUpdatetask(!showUpdateTask);
  };

  const submitEditedTask = async (updatedTaskData) => {
    const res = await fetch(`${url}/${updatedTaskData.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTaskData),
    });
    const data = await res.json();
    setShowUpdatetask(false);
    getTasks();
  };

  const filteredData = task.filter((item) =>
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    getTasks();
  }, [task]);

  return (
    <div>
      <Sidebar />
      <Navbar />
      <div className="absolute top-[10%] max-sm:top-[7%] sm:left-[15%]  max-sm:left-0 max-sm:mx-auto sm:w-[85%] p-5">
        <div className="flex justify-between items-center mb-6">
          <p className="text-xl  text-[#999] font-bold my-3 ">Task Summary </p>
          <button
            onClick={() => {
              setShowAddtask(!showAddTask);
            }}
            className="flex items-center bg-blue-700 text-[#fff] p-2 rounded-md"
          >
            New Task{" "}
            <span className="ml-2">
              <BsPlusCircleDotted size={25} />
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2 gap-x-6 mb-6">
          <div className="flex flex-col bg-[#fff] shadow p-4 rounded-md">
            <div className="rounded-md p-2 bg-[#e8f7d7] w-fit">
              <GoCheckCircleFill size={25} color="#87D62E" />
            </div>
            <p className="text-[#87d62e] text-xl my-3 font-bold">Completed</p>
            <p className="text-[#bbb] text-xl font-bold">{completedStatus} tasks</p>
          </div>
          <div className="flex flex-col bg-[#fff] shadow p-4 rounded-md">
            <div className="rounded-md p-2 bg-[#FFDCDC] w-fit">
              <TbProgressBolt size={25} color="red" />
            </div>
            <p className="text-[red] text-xl my-3 font-bold">Pending</p>
            <p className="text-[#bbb] text-xl font-bold">{pendingStatus} tasks</p>
          </div>
        </div>
        <div className="shadow p-5">
          <div className="flex justify-between items-center">
            <p className="max-sm:text-lg">List of Tasks</p>
            <div className="mr-5 flex justify-between items-center border border-[#eee] p-2 rounded-md max-sm:w-2/3">
              <IoSearchOutline size={25} color="#ccc" />
              <input
                type="text"
                placeholder="Search for status here"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="rounded-md w-full border-none outline-none"
              />
            </div>
          </div>
          <ShowTasks
            task={task}
            handleUpdateTask={editTask}
            searchTask={searchQuery}
            filteredTask={filteredData}
          />
        </div>
      </div>

      {showAddTask && (
        <AddTask onSubmit={submitTask} handleShowTask={setShowAddtask} />
      )}

      {showUpdateTask && (
        <UpdateTask
          onSubmit={submitEditedTask}
          task={updateTask}
          handleShowTask={setShowUpdatetask}
        />
      )}
    </div>
  );
};

export default Tasks;
