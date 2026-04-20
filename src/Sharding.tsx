import { useState } from "react";
import "./sharding.css";

function Sharding() {
  const [numServers, setNumServers] = useState<number>(0);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNumServers(Number(e.target.value));
  }

  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(numServers);
  }

  function onDecrementClick() {
    setNumServers(numServers - 1);
  }

  function onIncrementClick() {
    setNumServers(numServers + 1);
  }

  return (
    <>
      <div className="setupContainer">
        <form className="setupCard" onSubmit={handleSubmit}>
          <h2>Sharding Setup</h2>

          <label>Enter the number of inital servers</label>

          <div className="setupInputArea">
            <input
              type="text"
              placeholder="3"
              onChange={handleChange}
              value={numServers}
            ></input>

            <button
              type="button"
              className="inputBtn"
              onClick={onDecrementClick}
            >
              −
            </button>
            <button
              type="button"
              className="inputBtn"
              onClick={onIncrementClick}
            >
              +
            </button>
          </div>

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Sharding;
