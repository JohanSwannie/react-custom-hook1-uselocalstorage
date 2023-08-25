import { useState, useRef } from "react";
import useLocalStorage from "./useLocalStorage";
import SportsList from "./SportsList";
import CustomerSportList from "./CustomerSportList";

function App() {
  const [sports, setSports] = useLocalStorage("sports", []);
  const [showForm, setShowForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const inputRef = useRef(null);

  const availableSports = [
    "football",
    "tennis",
    "netball",
    "swimming",
    "rugby",
    "basketball",
    "gymnastics",
    "tabletennis",
    "athletics",
    "cricket",
    "marathon",
    "bowls",
    "volleyball",
    "badminton",
    "squash",
  ];

  const setTheErrorMessage = () => {
    document.getElementById("error-msg").classList.add("errmsg1");
    setTimeout(() => {
      setErrorMsg("");
      document.getElementById("error-msg").classList.remove("errmsg1");
    }, 2500);
  };

  const handleInput = (event) => {
    event.preventDefault();
    if (event.target.value.length > 0) {
      const sportChosen = event.target.value.toLowerCase();
      if (availableSports.includes(sportChosen)) {
        if (sports.includes(sportChosen)) {
          setErrorMsg(
            "That Sport is already in your list - please choose another sport"
          );
          setTheErrorMessage();
        } else {
          setSports([...sports, sportChosen]);
          setErrorMsg("");
          document.getElementById("error-msg").classList.remove("errmsg1");
        }
      } else {
        setErrorMsg("Unfortunately we don't have that sport available");
        setTheErrorMessage();
      }
    }
    event.target.value = "";
  };

  return (
    <>
      {showForm ? (
        <div className="container">
          <form>
            <label>Add a Sport to your collection: </label>
            <input
              ref={inputRef}
              type="text"
              autoFocus
              required
              onBlur={handleInput}
            />
            <button>Submit</button>
            <button
              id="cust-button1"
              onClick={() => setShowForm((preShowForm) => !preShowForm)}
            >
              Your Sports List
            </button>
          </form>
          <ul>
            {sports.map((sport, index) => (
              <SportsList sport={sport} index={index} setSports={setSports} />
            ))}
          </ul>
          <p id="error-msg">{errorMsg}</p>
        </div>
      ) : (
        <CustomerSportList setShowForm={setShowForm} />
      )}
    </>
  );
}

export default App;
