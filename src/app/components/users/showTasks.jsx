"use client";

import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import Loading from "../loading/loading";

const ShowTasks = ({ task, handleUpdateTask, searchTask, filteredTask }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  });

  return (
    <div className="mt-6 shadow rounded-lg overflow-x-auto table-auto">
      <table className="table-auto w-full overflow-x-auto p-1">
        <thead className="bg-[#999] p-2 ">
          <tr className="text-left uppercase">
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="bg-[#fff]">
          <>
            {searchTask === "" ? (
              task &&
              task.map((taskItem, index) => {
                index++;
                return (
                  <tr className="border border-[#eee] " key={index}>
                    <td>{index}</td>
                    <td>{taskItem.title}</td>
                    <td>{taskItem.description}</td>
                    <td>{taskItem.due_date}</td>
                    <td
                      className={
                        taskItem.status === "Completed"
                          ? "text-[#87d62e]"
                          : "text-[red]"
                      }
                    >
                      {taskItem.status}
                    </td>
                    <td>
                      <FaEdit
                        onClick={() => handleUpdateTask(taskItem.id)}
                        size={20}
                        color="#555"
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })
            ) : filteredTask.length > 0 ? (
              filteredTask.map((taskItem, index) => {
                index++;
                return (
                  <tr className="border border-[#eee] " key={index}>
                    <td>{index}</td>
                    <td>{taskItem.title}</td>
                    <td>{taskItem.description}</td>
                    <td>{taskItem.due_date}</td>
                    <td
                      className={
                        taskItem.status === "Completed"
                          ? "text-[#87d62e]"
                          : "text-[red]"
                      }
                    >
                      {taskItem.status}
                    </td>
                    <td>
                      <FaEdit
                        onClick={() => handleUpdateTask(taskItem.id)}
                        size={20}
                        color="#555"
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                );
              })
            ) : (
              <p>No Task with this record</p>
            )}
          </>
        </tbody>
      </table>
      {loading && <Loading />}
    </div>
  );
};
export default ShowTasks;
