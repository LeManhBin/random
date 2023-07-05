import React from "react";
import FormTodo from "../components/FormTodo/FormTodo";
import Todo from "../components/Todo/Todo";
import "../Layout/TodoLayout.scss"
const TodoLayout = () => {

    return (
        <div className="todo-layout">
            <div>
            <FormTodo/> 
            </div>
            <Todo/>
        </div>
    )
}

export default TodoLayout