import DailyTasks from "./dailyTask";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Task from "./task";

const AllTasks = () => {
  const tasks = useSelector((state) => state.tasks.todos);
  const [sortTasks, setSortTasks] = useState([]);
  const sortedTasks = (tasks) => {
    let sort = [...tasks];
    return sort.sort((a, b) => {
      return new Date(a.date) > new Date(b.date) ? 1 : -1;
    });
  };
  useEffect(() => {
    let result = tasks;
    result = sortedTasks(result);
    setSortTasks(result);
  }, [tasks]);
  
  return (
    <section className="mt-4 w-full p-4">
      {!sortTasks ? (
        <div className="mt-4">
          <h1 className="title">ALL TASKS</h1>
          <p className="dark:text-white text-center">Nothing To Do !</p>
        </div>
      ) : (
        <>
          <DailyTasks tasks={tasks} />
          <div className="mt-4">
            <h1 className="title">ALL TASKS</h1>
            <Task data={sortTasks} />
          </div>
        </>
      )}
    </section>
  );
};
export default AllTasks;
