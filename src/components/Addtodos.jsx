import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../Redux -cofig/todoSlice";
function Addtodos() {
  const [input, setInput] = useState("");
  const focus = useRef(null);
  const dispatch = useDispatch();

  function handleChange(e) {
    setInput(e.target.value);
  }

  function addTask(e) {
    e.preventDefault();
    dispatch(addTodos(input));
    setInput("");
    focus.current.focus();
  }
  return (
    <div className="bg-[#4a4a4a] p-3 rounded-lg mb-8 shadow-lg flex flex-col justify-center ">
      <form action="">
        <input
          className="bg-white focus:outline  outline-[2px] outline-[#646cff] text-black text-2xl mx-5 p-1 rounded-lg border-none  outline-skyblue-100"
          ref={focus}
          type="text"
          placeholder="Add your task here"
          value={input}
          onChange={handleChange}
        />
        {input !== "" && <button onClick={addTask}>Add to List</button>}
      </form>
    </div>
  );
}
export default Addtodos;
