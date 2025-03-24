import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  return (
    <div className=" min-h-screen p-4 flex items-center justify-center bg-slate-300">
      <div className=" h-[32rem] w-[36rem] backdrop-blur-lg bg-white rounded-2xl shadow-2xl  flex flex-col gap-2 ">
        <h1 className="flex items-center justify pl-5 pt-5 text-2xl font-bold">
          Advanced Counter
        </h1>
        <h5 className="pl-5 text-gray-400">
          A feature-rich counter with history tracking
        </h5>
        <div className=" flex items-center justify-center mt-5 ">
          <div className="w-[32rem] h-[4rem] gap-8 pl-5 flex flex-row items-center justify-center rounded-2xl bg-gray-200">
            <button className="border-gray-400 shadow-md px-6 py-3 rounded-full text-lg font-semibold focus:outline-none transition-all duration-300">
              -
            </button>
            <div className="flex-col gap-3">
              <h1 className="flex items-center text-2xl justify-center">
                {count}
              </h1>
              <span className="text-[10px] text-gray-400">Min:0 / Max:100</span>
            </div>

            <button
              className=" px-6 py-3 border-gray-400 shadow-md rounded-full text-lg font-semibold focus:outline-none transition-all duration-300"
              onChange={count}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <div class="flex rounded-lg m-3 overflow-hidden bg-slate-100 mb-6">
          <button class="flex-1 py-2 px-4 text-center font-medium hover:bg-gray-300">
            Controls
          </button>
          <button class="flex-1 py-2 px-4 text-center font-medium hover:bg-gray-300">
            Settings
          </button>
          <button class="flex-1 py-2 px-4 text-center font-medium hover:bg-gray-300">
            History
          </button>
        </div>
        <div className="bg-gray-300 m-4 h-[14rem] rounded-2xl">
          <h2 className="pl-5 pt-3 font-bold">Step Size:</h2>
          <input
            type="range"
            id="value"
            className="
        w-[28rem]  h-2 
        appearance-none rounded-lg 
        bg-gray-200 ml-16 
        accent-blue-500
        cursor-pointer
      "
            min={0}
            max={100}
            step={0}
          />
         <div className="flex flex-row  items-center justify-evenly p-4">
          <button className="h-[2rem] shadow-2xl bg-slate-100 border-gray-800 rounded w-[14rem] hover:bg-black hover:text-white ">
          Reset
          </button>
          <button className="h-[2rem] shadow-2xl bg-slate-100 border-gray-800 rounded w-[14rem] hover:bg-black hover:text-white">
            Save/Load
          </button>
         </div>
         <div className="pl-5">
         <input type="checkbox" id="auto-increment-toggle" class="w-6"/>
         <label for="auto-increment-toggle" class="text-sm font-medium text-gray-700">Auto Increment (1s)</label>
         </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
