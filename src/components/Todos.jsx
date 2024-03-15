import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Redux -cofig/todoSlice";
import { updateTodo } from "../Redux -cofig/todoSlice";
function Todos() {
  const [update, setUpdate] = useState("");
  const [getid, setId] = useState(null);
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  function handleChange(e) {
    setUpdate(e.target.value);
  }

  return (
    <div className=" bg-slate-500 shadow-lg  rounded-lg ">
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="list-none text-left px-4 flex  gap-20 p-3"
          >
            <div className=" min-w-[200px] max-w-[200px] px-3 overflow-x-hidden">
              {" "}
              {todo.id === getid ? (
                <input
                  className=" focus:outline  outline-[2px] outline-[#646cff] mr-4 rounded-lg p-3 w-[180px]"
                  type="text"
                  value={update}
                  onChange={handleChange}
                />
              ) : (
                <span className="text-black mr-10 text-[25px] font-semibold font-sans ">
                  {" "}
                  {todo.text}
                </span>
              )}
            </div>
            <div className="flex justify-around items-center border-3 border- min-w-52">
              {todo.id === getid ? (
                <button
                  onClick={() => {
                    setId("");
                    dispatch(updateTodo({ id: todo.id, text: update }));
                    setUpdate("");
                  }}
                >
                  Done
                </button>
              ) : (
                <button
                  onClick={() => {
                    setId(todo.id);
                  }}
                >
                  Update
                </button>
              )}

              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}
export default Todos;
