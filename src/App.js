import { useState } from "react";
import useLocalStorage from "./useLocalStorage";

function App() {
  const [sports, setSports] = useLocalStorage("sports", "");
  const [saveSports, setSaveSports] = useState([]);

  const handleInput = (event) => {
    event.preventDefault();
    setSports(event.target.value);
    setSaveSports([...saveSports, event.target.value]);
  };

  return (
    <>
      <div className="container">
        <form>
          <label>Enter a Sport : </label>
          <input
            type="text"
            defaultValue={sports}
            autoFocus
            onBlur={handleInput}
          />
        </form>
        <ul>
          {saveSports.map((sport, index) => (
            <li key={index}>{sport}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
