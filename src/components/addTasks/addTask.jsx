import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { toast } from "react-toastify";
import DatePicker from "../datePicker/datePicker";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/tasks/tasksSlice";
import RandomColor from "../../utils/randomColor";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const { categories } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [selectCategorie, setSelectCategorie] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState();
  const [taskDescription, setTaskDescription] = useState("");
  const navigate = useNavigate();
  const inputStyle =
    "dark:bg-[#31363F] font-semibold text-slate-700 dark:text-gray-100 hover:ring-2 p-2 ring-1 ring-gray-300 dark:ring-stone-300 bg-transparent transition-all ease-in-out duration-300 focus:shadow-sm focus:shadow-gray-500    hover:ring-gray-500 rounded-md outline-none border-none focus:ring-2 focus:ring-[#76ABAE]";

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      taskTitle.length === 0 ||
      taskDescription.length === 0 ||
      !selectCategorie ||
      !taskDate
    ) {
      toast.error("Please complete the forms !");
    } else {
      const task = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        categorie: selectCategorie,
        date: taskDate,
        completed: false,
        color: RandomColor(),
        createdAt: new Date().toLocaleDateString(),
      };
      dispatch(addTask(task));
      navigate("/");
    }
  };
  return (
    <section className="px-4 pt-2" ontouc>
      <h1 className="title">Add A New Task:</h1>
      <form
        className="mt-2 flex flex-col gap-4 px-4"
        action=""
        method="post"
        onSubmit={submitHandler}>
        <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-500 ">
          <h1>Enter Task's Title</h1>
          <input
            type="text"
            name="title"
            id="title"
            className={inputStyle}
            onChange={(e) => setTaskTitle(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-500 ">
          <h1>Enter Task's Description</h1>
          <input
            type="text"
            name="description"
            id="description"
            className={inputStyle}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>

        {/* <div className="flex flex-row gap-2"> */}
        <div className="flex w-full flex-col gap-2 text-gray-500 dark:text-gray-500 ">
          <h1>Select a Categorie</h1>
          <select
            className="text-slate-700 form-select block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-[#76ABAE] focus:ring-gray-500 dark:bg-[#31363F] dark:text-gray-100 "
            onChange={(e) => setSelectCategorie(e.target.value)}
            value={selectCategorie}>
            <option>Choose a categorie</option>
            {categories.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex w-full flex-col gap-2 text-gray-500 dark:text-gray-500 ">
          <h1>Select Task's Date</h1>
          <DatePicker setTaskDate={setTaskDate} />
        </div>
        {/* </div> */}

        <button
          className="dark:bg-blue absolute bottom-0 right-0 z-20 m-4 items-center rounded-full bg-[#76ABAE] p-4"
          type="submit" aria-label="submit">
          <FiPlus className="h-5 w-5 font-semibold text-white" />
        </button>
      </form>
    </section>
  );
};
export default AddTask;
