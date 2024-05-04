import { useState } from "react";
import Layout from "../../layout/layout";
import { FiCheck, FiEdit, FiTrash2, FiX } from "react-icons/fi";

import { useDispatch, useSelector } from "react-redux";
import {
  addCategorie,
  cancleCategorieMode,
  deleteCategorie,
  editCategorie,
} from "../../redux/tasks/tasksSlice";

const CategorieEditor = () => {
  const dispatch = useDispatch();
  const [categorieName, setCategorieName] = useState("");
  const [categorieEditMode, setCategorieEditMode] = useState(null);
  const { categories } = useSelector((state) => state.tasks);

  const submitAddHandler = (e) => {
    e.preventDefault();
    if (categorieName.length === 0) {
      // toast.error("Please complete the forms !", {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      console.log("Please complete the forms !");
    } else {
      const newCat = {
        id: Date.now(),
        total: 0,
        name: categorieName,
      };
      dispatch(addCategorie(newCat));
    }
  };
  const submitEditHandler = (e) => {
    e.preventDefault();
    if (categorieName.length === 0) {
      // toast.error("Please complete the forms !", {
      //   position: toast.POSITION.TOP_CENTER,
      // });
      // <Alert>"Please complete the forms !"</Alert>
    } else {
      const newCat = {
        id: categorieEditMode.id,
        name: categorieName,
      };
      dispatch(editCategorie(newCat));
      setCategorieEditMode(null);
    }
  };

  return (
    <>
      <Layout>
        <section className="px-4">
          <div className="flex flex-col">
            <h1 className="title">CATEGORIES</h1>
            <div className=" scrollbar mb-20 mt-2 flex h-[calc(100vh-25vh)]  flex-col overflow-y-auto ">
              {categories.map((cat) => (
                <div
                  key={cat.id}
                  className={` mb-4 flex w-full animate-entry justify-between rounded-lg bg-white p-4 dark:bg-[#76ABAE]`}>
                  <div className="w-28">
                    <h2 className="text-md text-black dark:text-black">
                      {cat.name}
                    </h2>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <button onClick={() => setCategorieEditMode(cat)}>
                      <FiEdit className="h-5 w-5 " />
                    </button>
                    <button onClick={() => dispatch(deleteCategorie(cat))}>
                      <FiTrash2 className="h-5 w-5 text-red-900" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bottom-4 ">
            <form
              action=""
              className="absolute -mx-4 px-4  bottom-2 w-full"
              onSubmit={
                categorieEditMode ? submitEditHandler : submitAddHandler
              }>
              {categorieEditMode ? (
                <label htmlFor="catName" className="title">
                  Edit Categorie's Name
                </label>
              ) : (
                <label htmlFor="catName" className="title">
                  Categorie's Name
                </label>
              )}
              <div className="relative flex w-full flex-row">
                <input
                  type="text"
                  name="catName"
                  onChange={(e) => setCategorieName(e.target.value)}
                  className="h-full w-full rounded-[7px] !border  !border-gray-300  border-t-transparent bg-transparent bg-white px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 shadow-lg shadow-gray-900/5 outline outline-0 ring-4 ring-transparent transition-all placeholder:text-gray-500 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 dark:bg-[#31363F] dark:text-gray-200"
                />
                {categorieEditMode && (
                  <button
                    type="button"
                    onClick={() => setCategorieEditMode(null)}
                    className="!absolute  right-14 top-1 select-none rounded bg-red-500 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 dark:bg-red-600 ">
                    <FiX className="h-4 w-4" />
                  </button>
                )}
                <button
                  type="submit"
                  className="!absolute right-1 top-1 select-none rounded bg-blue-gray-500 px-4 py-2 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-gray-500/20 transition-all hover:shadow-lg hover:shadow-blue-gray-500/40 dark:bg-[#76ABAE]">
                  {categorieEditMode ? <FiCheck className="h-4 w-4" /> : "add"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};
export default CategorieEditor;
