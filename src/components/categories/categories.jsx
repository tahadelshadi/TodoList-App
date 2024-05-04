import { Link } from "react-router-dom";
import { useHorizontalScroll } from "../../hooks/useHorizontalScroll";
import { useSelector } from "react-redux";
import {totalTaskCalculator} from "../../utils/calculator";

const Categories = () => {
  const horizontalScroll = useHorizontalScroll();
  const { categories } = useSelector((state) => state.tasks);
  return (
    <>
      <section className="mt-4 px-4">
        <h1 className="title">
          CATEGORIES
        </h1>
        <div
          className="scrollbar mt-2 box-content flex w-[100%] items-center justify-between gap-2 overflow-x-scroll "
          ref={horizontalScroll}>
          {categories.map((categorie) => (
            <Link
              to={`/categorie?cat=${categorie.name}&id=${categorie.id}`}
              key={categorie.id}
              className={`group mb-4 flex-1 rounded-lg bg-white  p-2 transition-all duration-300 ease-in-out hover:bg-opacity-50  dark:bg-[#76ABAE]`}>
              <div className="flex w-40 flex-col items-center gap-y-2">
                <h2 className="flex text-sm text-gray-500 dark:text-black">
                  {categorie.total}
                  <span className="mx-1">Task</span>
                </h2>
                <h2 className="flex text-lg text-black dark:text-black">
                  {categorie.name}
                </h2>
              </div>
              <div className="dark:bg-stone-600 mt-4 relative h-[6px] w-full rounded bg-gray-300">
                <span
                  style={{
                    width: `${totalTaskCalculator(categorie.total)}%`,
                  }}
                  className={`absolute left-0 h-[6px] rounded bg-cyan-800    transition-all duration-300 ease-in-out`}></span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
export default Categories;
