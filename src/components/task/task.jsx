import { Checkbox } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { FiCalendar } from "react-icons/fi";
import { calculateTime } from "../../utils/calculator";
import { toggleCompleteTasks } from "../../redux/tasks/tasksSlice";

const Task = ({ data }) => {
  const dispatch = useDispatch();
  const tasks = data;
  return (
    <>
      {tasks.map((task) => (
        <>
          <div
            className="mt-2 flex w-full animate-entry flex-row gap-1 pb-2"
            key={task.id}>
            <Checkbox
              aria-label="task-completed"
              className=" flex h-5 w-5 items-start justify-start rounded-full p-0 hover:before:opacity-0"
              name="completedTask"
              color="teal"
              ripple={true}
              checked={task.completed}
              onChange={() => dispatch(toggleCompleteTasks(task))}
            />
            <div className="w-full">
              <div className="font-medium dark:text-gray-300">{task.title}</div>
              <div className="flex flex-row justify-between">
                <div
                  variant="small"
                  color="gray"
                  className="flex flex-row items-center gap-1 text-sm text-teal-600">
                  <FiCalendar />
                  <p>{calculateTime(task.date)}</p>
                  <p>{new Date(task.date).toLocaleDateString()}</p>
                </div>
                <div className="flex flex-row gap-1 text-sm font-medium text-gray-600">
                  <p>{task.categorie}</p>
                  <span className={`${task.color}`}>#</span>
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
export default Task;
