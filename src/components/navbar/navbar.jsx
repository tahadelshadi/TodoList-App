import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/darkMode/darkModeSlice";
import { toggleMenu } from "../../redux/tasks/tasksSlice";
import { FiSearch, FiBell, FiMoon, FiSun } from "react-icons/fi";
import Menu from "../../components/menu/menu";

const Header = () => {
  const openMenu = useSelector((state) => state.tasks.openMenu);
  const isDarkMode = useSelector((state) => state.darkMode.value);
  const dispatch = useDispatch();

  return (
    <header className="bg-gray-100 dark:bg-[#31363F]">
      <div className="flex items-center justify-between p-4 ">
        <button
          className="flex flex-col gap-y-1 p-2 text-2xl text-gray-500 dark:text-white"
          onClick={() => dispatch(toggleMenu())}>
          <span
            className={`h-[2px] w-4 rounded-md bg-gray-400 transition-all duration-300 ease-in-out dark:bg-white ${openMenu ? "absolute rotate-45" : ""}`}></span>
          <span
            className={`h-[2px] w-4 rounded-md bg-gray-400 transition-all duration-300 ease-in-out dark:bg-white  ${openMenu ? "absolute -rotate-45" : ""}`}></span>
        </button>
        <div className="flex items-center gap-2">
          <button
            className="py-2 text-xl text-gray-500 dark:text-white"
            onClick={() => dispatch(toggleDarkMode())}>
            {isDarkMode ? <FiMoon /> : <FiSun />}
          </button>
          <button className="py-2 text-xl text-gray-500 dark:text-white">
            <FiSearch />
          </button>
          <button className="py-2 text-xl text-gray-500 dark:text-white">
            <FiBell />
          </button>
        </div>
      </div>
      <Menu />
    </header>
  );
};
export default Header;
