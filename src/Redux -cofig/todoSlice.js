import {createSlice,nanoid} from "@reduxjs/toolkit";

const initialState={
    todos:[]
}
const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodos:(state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos =state.todos.filter(todo=>{
           return todo.id!==action.payload 
             })
        },
        updateTodo:(state,action)=>{
            const index = state.todos.findIndex(todo=>{
               return todo.id=== action.payload.id
            })
            state.todos[index]=action.payload
        },
     
    }
})
export default todoSlice.reducer
export const {addTodos,removeTodo,updateTodo} =todoSlice.actions