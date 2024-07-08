import { useState } from "react";
const InputBox = ({ onData }) => {
  const [inputName, setInputName] = useState("");
  const SubmitHandler = function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      onData(inputName);
      setInputName("");
    }
  };
  const Inputhandler = function (event) {
    setInputName(event.target.value);
  };
  return (
    <div>
      <div className="ml-1 mt-0 -translate-y-8">
        <form onKeyDown={SubmitHandler}>
          <input
            id="new"
            type="text"
            className="h-7 w-[400px] p-2 bg-transparent text-slate-200 border-none text-lg font-normal tracking-wider placeholder:font-semibold focus:outline-none placeholder:text-gray-600 placeholder:tracking-wider"
            placeholder="try ls, bio, skill, projects, contact, about..."
            onChange={Inputhandler}
            autoComplete="off"
            value={inputName}
          />
        </form>
      </div>
    </div>
  );
};

export default InputBox;
