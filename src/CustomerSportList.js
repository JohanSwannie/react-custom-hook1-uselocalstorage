const CustomerSportList = ({ setShowForm }) => {
  const custSportList = JSON.parse(localStorage.getItem("sports"));

  return (
    <>
      <div className="cust-container">
        <h2>Your List of Sports</h2>
        <button
          id="cust-button2"
          onClick={() => setShowForm((prevShowForm) => !prevShowForm)}
        >
          Back to Form
        </button>
      </div>
      <ul className="cust__sport-list">
        {custSportList.length > 0 ? (
          custSportList.map((sport, index) => <li key={index}>{sport}</li>)
        ) : (
          <li>No sport in your list of sports</li>
        )}
      </ul>
    </>
  );
};

export default CustomerSportList;
