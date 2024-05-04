import { useEffect, useState } from "react";
import Accordion from "../accordion/accordion";

const DailyTasks = ({ open, handleOpen, tasks }) => {
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
      <h1 className="title">
        TODAY'S TASKS
      </h1>
      {dailyTasks.length === 0 ? (
        <p className="m-4 text-center text-black dark:text-white">
          You've Done It All &#128526;
        </p>
      ) : (
        <>
          <Accordion data={dailyTasks} />
        </>
      )}
    </>
  );
};
export default DailyTasks;
