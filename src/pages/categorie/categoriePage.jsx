import { useSelector } from "react-redux";
import Layout from "../../layout/layout";
import Accordion from "../../components/accordion/accordion";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { totalTaskCalculator } from "../../utils/calculator";

const CategoriePage = () => {
  const [searchParams] = useSearchParams();
  const getQueryParamsCategorie = searchParams.get("cat");
  const getQueryParamsId = searchParams.get("id");
  const { todos, categories } = useSelector((state) => state.tasks);
  const [categorisName, setCategoriesName] = useState(null);
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    const selectOneCategorie = categories.find(
      (cat) => cat.id === Number(getQueryParamsId)
    );
    setCategoriesName(selectOneCategorie);
  }, [getQueryParamsId, categories]);

  useEffect(() => {
    const filterTodos = todos.filter(
      (t) =>
        t.categorie.toLowerCase() ===
        getQueryParamsCategorie.toLocaleLowerCase()
    );
    console.log(filterTodos);
    if (filterTodos.length !== 0) {
      setTasks(filterTodos);
    } else {
      setTasks(null);
    }
  }, [getQueryParamsCategorie, todos]);

  return (
    <>
      <Layout>
        {categorisName && (
          <section className="section">
            <h1 className="title">
              {categorisName.name}
              <span>'s Tasks</span>
            </h1>
            <div className="mb-6 mt-2 flex w-full flex-col justify-start  gap-y-2 rounded-lg bg-white p-2 shadow-md hover:bg-opacity-50  dark:bg-[#76ABAE]">
              <h2 className="mb-3 mt-1 flex text-sm text-gray-500 dark:text-black">
                {categorisName.total}
                <span className="mx-1 ">Task</span>
              </h2>
              <h2 className="mb-1 flex justify-start text-2xl font-semibold text-black dark:text-black">
                {categorisName.name}
              </h2>
              <div className="dark:bg-stone-600 relative h-[6px] w-full rounded bg-gray-300">
                <span
                  style={{
                    width: `${totalTaskCalculator(categorisName.total)}%`,
                  }}
                  className={`absolute left-0 h-[6px] rounded bg-cyan-800    transition-all duration-300 ease-in-out`}></span>
              </div>
            </div>

            {tasks && <Accordion data={tasks} />}
          </section>
        )}
      </Layout>
    </>
  );
};
export default CategoriePage;
