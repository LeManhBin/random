import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState = [{
    id: uuidv4(),
    name: '',
    completed: false
}]

export const TodoSlide = createSlice({
    name: 'todoApp',
    initialState,
    reducers: {
        addTodo: (state, actions) => {
            console.log('actions',actions);
            const newTask = {
                id: uuidv4(),
                name: actions.payload.todoApp,
                completed: actions.payload.todoApp.completed
                
            }
            state.push(newTask);
        },
        
    }
});

export const {addTodo} = TodoSlide.actions
export default TodoSlide.reducer