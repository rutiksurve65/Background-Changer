import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("black");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="flex flex-wrap justify-center pt-10">
          <button
            onClick={() => setColor("white")}
            className="px-8 py-4 rounded-full shadow-lg  text-black text-3xl font-bold"
            style={{ backgroundColor: "white" }}
          >
            Background Color Changer
          </button>
        </div>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-3 ">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-4 rounded-full">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "blue" }}
            >
              Blue
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
              style={{ backgroundColor: "yellow" }}
            >
              Yellow
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button
              onClick={() => setColor("gray")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "gray" }}
            >
              Gray
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
              style={{ backgroundColor: "orange" }}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("purple")}
              className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
              style={{ backgroundColor: "purple" }}
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
