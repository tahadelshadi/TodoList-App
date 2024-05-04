import { FiGrid, FiHome } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggleMenu } from "../../redux/tasks/tasksSlice";

const Menu = () => {
  const openMenu = useSelector((state) => state.tasks.openMenu);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`absolute z-50 h-screen w-full items-center justify-start bg-gray-100 transition-all delay-150 ease-in-out dark:bg-[#31363F] ${openMenu ? "z-30 translate-x-0" : "z-0 -translate-x-full"}`}>
        <div className="flex flex-col gap-4 p-4 text-gray-500 dark:text-gray-200 ">
          <Link
            to={`/`}
            className="flex flex-row items-center justify-center gap-2"
            onClick={() => dispatch(toggleMenu())}>
            <FiHome />
            <p>Home</p>
          </Link>
          <Link
            to={"/catEditor"}
            className="flex flex-row items-center justify-center gap-2"
            onClick={() => dispatch(toggleMenu())}>
            <FiGrid />
            <p>Categories</p>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Menu;
