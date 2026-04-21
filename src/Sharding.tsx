import { useState } from "react";
import "./sharding.css";

function Sharding() {
  type Form = {
    numServers: number;
    numRepeats: number;
  };

  const [formData, setFormData] = useState<Form>({
    numServers: 0,
    numRepeats: 0,
  });

  // Updates the value of the field that is given in the name
  // of the HTML input element
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevalue) => {
      return {
        ...prevalue,
        [e.target.name]: Number(e.target.value),
      };
    });
  }

  // Currently just shows all the values in console, will be imporved
  // later to send data to actually initalize the setup
  function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  // Decrements the value of the values name that is passed through
  function onDecrementClick(valueName: keyof Form) {
    setFormData((prev) => {
      return {
        ...prev,
        [valueName]: prev[valueName] - 1,
      };
    });
  }

  function onIncrementClick(valueName: keyof Form) {
    setFormData((prev) => {
      return {
        ...prev,
        [valueName]: prev[valueName] + 1,
      };
    });
  }

  return (
    <>
      <div className="container">
        <form className="card" onSubmit={handleSubmit}>
          <h2>Sharding Setup</h2>

          <label>Enter the number of inital servers</label>

          <div className="inputArea">
            <input
              type="text"
              placeholder="3"
              onChange={handleChange}
              value={formData.numServers}
              name="numServer"
            ></input>

            <button
              type="button"
              className="inputBtn"
              onClick={() => onDecrementClick("numServers")}
            >
              −
            </button>
            <button
              type="button"
              className="inputBtn"
              onClick={() => onIncrementClick("numServers")}
            >
              +
            </button>
          </div>
          <label>Enter the number of repeated servers</label>
          <div className="inputArea">
            <input
              type="text"
              placeholder="3"
              onChange={handleChange}
              value={formData.numRepeats}
            ></input>

            <button
              type="button"
              className="inputBtn"
              onClick={() => onDecrementClick("numRepeats")}
            >
              −
            </button>
            <button
              type="button"
              className="inputBtn"
              onClick={() => onIncrementClick("numRepeats")}
            >
              +
            </button>
          </div>

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>
      </div>
      <div>
        <div className="container">
          <form className="card">
            <label>Enter a key</label>
            <div className="inputArea">
              <input type="text" placeholder="banana"></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Sharding;
