import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: JSON.parse(localStorage.getItem("tasks")) || [],
    openTasks: false,
    openMenu: false,
    editMode: { id: null, value: false },
    editTask: { toggleOpenEdit: false, task: null },
    categories: JSON.parse(localStorage.getItem("categories")) || [
        { id: 1, name: "Personal", total: 0 },
        { id: 2, name: "Work", total: 0 },
        { id: 3, name: "Bussines", total: 0 }
    ],
}

function saveToStorageTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks))

}
function saveToStorageCategories(categories) {
    localStorage.setItem("categories", JSON.stringify(categories))
}
function getOneCategories(categorie, payload) {
    return categorie.find((categorie) => categorie.name.toLowerCase() === payload.toLowerCase())
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        toggleTaskBtn: (state) => {
            state.openTasks = !state.openTasks;
        },
        toggleMenu: (state) => {
            state.openMenu = !state.openMenu;
        },
        toggleCompleteTasks: (state, action) => {
            const completeTodo = state.todos.find((task) => task.id === action.payload.id)
            completeTodo.completed = !completeTodo.completed
            saveToStorageTasks(state.todos)
        },

        //Tasks CRUD
        addTask: (state, { payload }) => {
            state.todos.push(payload)
            const categorieTask = state.categories.find((categorie) => (categorie.name === payload.categorie))
            categorieTask.total += 1
            state.openTasks = false
            saveToStorageTasks(state.todos)
            saveToStorageCategories(state.categories)
        },
        editTasks: (state, action) => {
            const editTask = state.todos.findIndex(
                task => task.id === action.payload.task.id
            )
            if (action.payload.task.categorie !== action.payload.oldCat) {
                const oldCat = getOneCategories(state.categories, action.payload.oldCat)
                const NewCat = getOneCategories(state.categories, action.payload.task.categorie)
                oldCat.total -= 1
                NewCat.total += 1
                saveToStorageCategories(state.categories)
            }
            state.todos[editTask] = action.payload.task
            state.editTask.toggleOpenEdit = false
            saveToStorageTasks(state.todos)
        },
        deleteTasks: (state, action) => {
            const deleteTasks = state.todos.filter((task) => task.id !== Number(action.payload.id))
            state.todos = deleteTasks
            saveToStorageTasks(state.todos);
            const categorieTask = state.categories.find(
                (c) => c.name.toLowerCase() === action.payload.categorie.toLowerCase()
            );
            categorieTask.total -= 1;
            saveToStorageCategories(state.categories);
        },
        //Categories CRUD
        addCategorie: (state, { payload }) => {
            state.categories.push(payload);
            saveToStorageCategories(state.categories);
        },

        editCategorie: (state, action) => {
            if (state.todos.length) {
                const filterTasks = state.todos.filter(
                    (task) =>
                        task.categorie.toLowerCase() === action.payload.name.toLowerCase()
                );
                filterTasks.map((task) => {
                    return (task.categorie = action.payload.name);
                });
                saveToStorageTasks(state.todos);
            }
            const oldCat = state.categories.find((cat) => cat.id === action.payload.id);
            oldCat.name = action.payload.name;
            saveToStorageCategories(state.categories);

        },
        deleteCategorie: (state, action) => {
            const updatedCategorie = state.categories.filter((cat) => cat.id !== action.payload.id)
            state.categories = updatedCategorie
            saveToStorageCategories(updatedCategorie)
        },
    }
})

export const {
    toggleTaskBtn,
    toggleCompleteTasks,
    toggleMenu,
    addTask,
    deleteTasks,
    editTasksAdd,
    editTaskToggler,
    addCategorie,
    deleteCategorie,
    editCategorie,
    editCategorieMode,
    cancleCategorieMode
} = tasksSlice.actions;

export default tasksSlice.reducer