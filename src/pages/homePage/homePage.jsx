import Welcome from "../../components/welcome/welcome";
import Categories from "../../components/categories/categories"
import Layout from "../../layout/layout";
import AllTasks from "../../components/task/allTasks";
import AddTaskBtn from "../../components/addTasks/addTasksBtn";

const HomePage = () => {
  return (
    <Layout>
      <Welcome/>
      <Categories/>
      <AllTasks/>
      <AddTaskBtn/>
    </Layout>
  );
};
export default HomePage;
