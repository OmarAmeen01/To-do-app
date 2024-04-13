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
    <div className=" bg-[#4a4a4a] shadow-lg  shadow-black rounded-lg ">
      {todos.map((todo) => {
        return (
          <li
            key={todo.id}
            className="list-none text-left px-4 flex  gap-20 p-3 justify-between border-b-2 border-black"
          >
            <div className="">
              {todo.id === getid ? (
                <input
                  className=" focus:outline  outline-[2px] outline-[#646cff] mr-4 rounded-lg p-3 w-[180px]"
                  type="text"
                  value={update}
                  onChange={handleChange}
                />
              ) : (
                <span className="text-white  mr-10 text-[25px] font-semibold font-sans ">
                  {" "}
                  {todo.text}
                </span>
              )}
            </div>
            <div className="flex justify-around items-center border-3 gap-2 ">
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
                  className="text-sm"
                  onClick={() => {
                    setId(todo.id);
                    setUpdate(todo.text);
                  }}
                >
                  Edit
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-sm"
              >
                Trash
              </button>
            </div>
          </li>
        );
      })}
    </div>
  );
}
export default Todos;
