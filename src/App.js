import useLocalStorage from "./useLocalStorage";

function App() {
  const [sports, setSports] = useLocalStorage("sports", []);

  const handleInput = (event) => {
    event.preventDefault();
    setSports([...sports, event.target.value]);
    event.target.value = "";
  };

  return (
    <>
      <div className="container">
        <form>
          <label>Enter a Sport : </label>
          <input type="text" autoFocus onBlur={handleInput} />
        </form>
        <ul>
          {sports.map((sport, index) => (
            <li key={index}>{sport}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
