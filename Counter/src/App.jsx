import { useEffect, useState } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalstorage";


function App() {
  const [count, setCount] = useState(0);
  const [stepSize, setStepSize] = useState(1);
  const [autoIncrement, setAutoIncrement] = useState(false);
  const {setData,getData} = useLocalStorage()
  const [init, setInit] = useState(false)
  
  useEffect(() => {
    if(init)
      return
    setCount(JSON.parse(localStorage.getItem('count')) || 0)
    setStepSize(JSON.parse(localStorage.getItem('stepSize')) || 1)
    setInit(true)
  },[init])
  useEffect(() => {
    if(!init)
      return
    localStorage.setItem('count',JSON.stringify(count))
    localStorage.setItem('stepSize',JSON.stringify(stepSize))
  }, [count,init,stepSize])

  useEffect(() => {
    let time = null;

    if(autoIncrement){
      time = setInterval(() => {
        setCount(c => c + stepSize);
      }, 500);
    }
    
    // Return a function that clears the interval
    return () => clearInterval(time);
  }, [autoIncrement, stepSize]); // Fixed dependency array - autoIncrement not setAutoIncrement

  const Reset = () => {
    setCount(0);
    setStepSize(1)
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center bg-slate-300">
      <div className="h-[32rem] w-[36rem] backdrop-blur-lg bg-white rounded-2xl shadow-2xl flex flex-col gap-2">
        <h1 className="flex items-center justify pl-5 pt-5 text-2xl font-bold">
          Advanced Counter
        </h1>
        <h5 className="pl-5 text-gray-400">
          A feature-rich counter with history tracking
        </h5>
        <div className="flex items-center justify-center mt-5">
          <div className="w-[32rem] h-[4rem] gap-8 pl-5 flex flex-row items-center justify-center rounded-2xl bg-gray-200">
            <button
              className="border-gray-400 shadow-md px-6 py-3 rounded-full text-lg font-semibold hover:bg-slate-100"
              onClick={() => setCount(count - stepSize)}
            >
              -
            </button>
            <div className="flex-col gap-3">
              <h1 className="flex items-center text-3xl justify-center font-bold">
                {count}
              </h1>
              <span className="text-[10px] text-gray-400">Min:0 / Max:100</span>
            </div>

            <button
              className="px-6 py-3 border-gray-400 shadow-md rounded-full text-lg font-semibold hover:bg-slate-100"
              onClick={() => {
                setCount(count + stepSize)
              }}
            >
              +
            </button>
          </div>
        </div>
        <div>
          <div className="flex rounded-lg m-3 overflow-hidden bg-slate-100 mb-6">
            <button className="flex-1 py-2 px-4 text-center font-medium hover:bg-gray-300">
              Controls
            </button>
            <button className="flex-1 py-2 px-4 text-center font-medium hover:bg-gray-300">
              Settings
            </button>
            <button className="flex-1 py-2 px-4 text-center font-medium hover:bg-gray-300">
              History
            </button>
          </div>
          <div className="bg-gray-300 m-4 h-[14rem] rounded-2xl">
            
            <div className="flex justify-between p-2">
              <h2 className="font-bold flex items-start" htmlFor="temp">
              Step Size:
            </h2>
              {stepSize}
           </div>
            <input
              type="range"
              className="w-[32rem] ml-2 appearance-auto rounded-lg bg-gray-200  accent-blue-500 cursor-pointer"
              min={1}
              max={20}
              step={1}
              value={stepSize}
              onChange={(e) => setStepSize(Number(e.target.value))}
            />
            
            <div className="flex flex-row items-center justify-evenly p-4">
              <button
                className="h-[2rem] shadow-2xl bg-slate-100 border-gray-800 rounded w-[14rem] hover:bg-black hover:text-white"
                onClick={Reset}
              >
                Reset
              </button>
              <button className="h-[2rem] shadow-2xl bg-slate-100 border-gray-800 rounded w-[14rem] hover:bg-black hover:text-white">
                Save/Load
              </button>
            </div>
            <div className="pl-5">
              <input
                type="checkbox"
                id="auto-increment-toggle"
                className="w-6"
                checked={autoIncrement} // Added to sync UI with state
                onChange={() => setAutoIncrement(!autoIncrement)} // Fixed: wrap in function
              />
              <label
                htmlFor="auto-increment-toggle"
                className="text-sm font-medium text-gray-700"
              >
                Auto Increment ({stepSize} per second)
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;