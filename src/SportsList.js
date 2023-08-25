const SportsList = ({ sport, index, setSports }) => {
  const removeSport = () => {
    const sportsList = JSON.parse(localStorage.getItem("sports"));
    sportsList.splice(index, 1);
    localStorage.setItem("sports", JSON.stringify(sportsList));
    const newValues = JSON.parse(localStorage.getItem("sports"));
    setSports(newValues);
  };

  return (
    <div key={index} className="sport-container">
      <li key={index}>{sport}</li>
      <button id="del" onClick={removeSport}>
        x
      </button>
    </div>
  );
};

export default SportsList;
