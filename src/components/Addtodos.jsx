import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Redux -cofig/todoSlice";
function Addtodos() {
  const [input, setInput] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const focus = useRef(null);
  const dispatch = useDispatch();

  function handleChange(e) {
    setInput(e.target.value);
    setIsEmpty(false);
  }

  function addTask(e) {
    e.preventDefault();
    dispatch(addTodos(input));
    setInput("");
    setIsEmpty(true);
    focus.current.focus();
  }
  return (
    <div className="bg-[#4a4a4a] p-3 rounded-lg mb-8 shadow-lg  shadow-black flex flex-col justify-center ">
      <form action="">
        <input
          className="bg-white focus:outline  outline-[2px] outline-[#646cff] text-black text-2xl mx-5 p-1 rounded-lg border-none  outline-skyblue-100"
          ref={focus}
          type="text"
          placeholder="Add your task here"
          value={input}
          onChange={handleChange}
        />
        <button
          onClick={addTask}
          disabled={isEmpty}
          className={`${
            isEmpty
              ? "bg-gray-500 text-gray-300 p-2 rounded-lg hover:outline-none"
              : "bg-black text-white p-2 rounded-lg  outline-2 hover:outline-cyan-500  "
          }`}
        >
          Add to List
        </button>
      </form>
    </div>
  );
}
export default Addtodos;
