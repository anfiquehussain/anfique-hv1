import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-9xl font-bold text-red-700">Welcome!!</h1>
        <p className="mt-10 text-xl text-gray-500">
          my name is anfique hussain v
        </p>
      </div>
    </>
  );
}

export default App;
