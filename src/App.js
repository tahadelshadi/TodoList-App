//React
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { tasksThemes } from "./redux/darkMode/darkModeSlice";
import { useSelector } from "react-redux";
//Pages
import HomePage from "./pages/homePage/homePage";
import AddTask from "./pages/addTask/addTask";
import CategoriePage from "./pages/categorie/categoriePage";
import CategorieEditor from "./pages/categorieEditor/categorieEditor";

function App() {
  const isDarkMode = useSelector((state) => state.darkMode.value);
  const [theme, setTheme] = useState()
  useEffect(() => {
    setTheme(tasksThemes(isDarkMode))
  }, [isDarkMode])

  return (
    <div className={`${theme} dark:bg-gray-900  h-screen`}>
      <div className={`relative font-sans max-w-screen-sm md:max-w-sm mx-auto h-screen overflow-scroll no-scrollbar bg-gray-100 dark:bg-[#222831] transition-all ease-in-out`}>
        <Routes>
          <Route element={<HomePage />} path="/" />
          <Route element={<AddTask />} path="add" />
          <Route element={<CategoriePage />} path="categorie" />
          <Route element={<CategorieEditor />} path="catEditor" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
