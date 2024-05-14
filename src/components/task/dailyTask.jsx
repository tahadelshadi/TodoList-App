import { useEffect, useState } from "react";
import Task from "./task";

const DailyTasks = ({ tasks }) => {
  const [dailyTasks, setDailyTasks] = useState([]);
  useEffect(() => {
    if (tasks) {
      const filtersTodayTasks = tasks.filter(
        (t) =>
          new Date(t.date).toLocaleDateString() ===
          new Date().toLocaleDateString()
      );
      setDailyTasks(filtersTodayTasks);
    }
  }, [tasks]);
  return (
    <>
      <h1 className="title">TODAY'S TASKS</h1>
      {dailyTasks.length === 0 ? (
        <p className="m-4 text-center text-gray-700">No Task's yet</p>
      ) : (
        <>
          <Task data={dailyTasks} />
        </>
      )}
    </>
  );
};
export default DailyTasks;
