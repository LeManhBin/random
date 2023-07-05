import { configureStore } from "@reduxjs/toolkit";
import TodoSlide from "../features/TodoSlide/TodoSlide";

const store = configureStore({
    reducer: {
        todoApp: TodoSlide
    },
})

export default store