import { FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const AddTaskBtn = () => {
  return (
    <Link
      to={"/add"}
      className="sticky  bottom-4 right-0 z-20 float-end mx-4 items-center rounded-full p-4 shadow-md bg-[#76ABAE]"
      type="button">
      <FiPlus className="text-white w-5 h-5 font-semibold" />
    </Link>
  );
};
export default AddTaskBtn;
