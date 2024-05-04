import DailyTasks from "./dailyTask";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Accordion from "../accordion/accordion";

const AllTasks = () => {
  const tasks = useSelector((state) => state.tasks.todos);
  const [open, setOpen] = useState(null);
  const [sortTasks, setSortTasks] = useState([]);
  const handleOpen = (id) => setOpen(open === id ? null : id);
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
      {tasks == null ? (
        <p className="dark:text-white">Nothing To Do !</p>
      ) : (
        <>
          <DailyTasks open={open} handleOpen={handleOpen} tasks={tasks} />
          <div className="mt-4">
            <h1 className="title">ALL TASKS</h1>
            <Accordion data={sortTasks} />
          </div>
        </>
      )}
    </section>
  );
};
export default AllTasks;
