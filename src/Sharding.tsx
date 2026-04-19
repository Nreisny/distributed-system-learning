import "./sharding.css";

function Sharding() {
  return (
    <div className="container">
      <form className="card">
        <h2>Sharding Setup</h2>

        <label>Enter the number of inital servers</label>

        <div className="inputArea">
          <input type="text" placeholder="3" />

          <button type="button" className="inputBtn">
            −
          </button>
          <button type="button" className="inputBtn">
            +
          </button>
        </div>

        <button type="submit" className="submitBtn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Sharding;
