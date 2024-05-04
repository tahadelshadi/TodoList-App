import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import DatePicker from "../datePicker/datePicker";
//redux
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../../redux/tasks/tasksSlice";
import RandomColor from "../../utils/randomColor";

const AddTask = () => {
  const { categories } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const [selectCategorie, setSelectCategorie] = useState("");
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState(new Date().toLocaleDateString());
  const [taskDescription, setTaskDescription] = useState("");
  const inputStyle =
    "dark:bg-[#31363F] font-semibold text-slate-700 dark:text-gray-100 hover:ring-2 p-2 ring-1 ring-gray-300 dark:ring-stone-300 bg-transparent transition-all ease-in-out duration-300 focus:shadow-md focus:shadow-gray-500 dark:focus:shadow-stone-500   hover:ring-gray-500 rounded-md outline-none border-none focus:ring-2 focus:ring-gray-500";

  const submitHandler = (e) => {
    e.preventDefault();
    if (taskTitle.length === 0 || taskDescription.length === 0) {
      // toast.error("Please complete the forms !", {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      console.log("Please complete the forms !");
    } else {
      const task = {
        id: Date.now(),
        title: taskTitle,
        description: taskDescription,
        categorie: selectCategorie,
        date: taskDate,
        completed:false,
        color:RandomColor(),
        createdAt: new Date().toLocaleDateString(),
      };
      dispatch(addTask(task));
    }
  };
  return (
    <section className="px-4 pt-12">
      <h1 className="title">Add A New Task:</h1>
      <form
        className="flex flex-col gap-4"
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

        <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-500 ">
          <h1>Enter Task's Categorie</h1>
          <select
            className="text-slate-700 form-select block w-full rounded-lg border border-gray-300 bg-gray-100 p-2.5 text-sm focus:border-gray-500 focus:ring-gray-500 dark:bg-[#31363F] dark:text-gray-100 "
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

        <div className="flex flex-col gap-2 text-gray-500 dark:text-gray-500 ">
          <h1>Select Task's Date</h1>
          <DatePicker setTaskDate={setTaskDate} />
        </div>

        <button
          className="dark:bg-blue absolute bottom-0 right-0 z-20 m-4 items-center rounded-full bg-white p-4"
          type="submit">
          <FiPlus />
        </button>
      </form>
    </section>
  );
};
export default AddTask;
