import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {
  // console.log("Render");

  const [counter, setCounter] = useState(0);

  const handdleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c+1)
  };
  const handdleSubstract = () => setCounter(counter - 1);
  const handdleReset = () => setCounter(value);

  const handleClick = (type) => {
    type === "suma"
      ? setCounter(counter + 1)
      : type === "resta"
      ? setCounter(counter - 1)
      : setCounter(value);
  };

  useEffect(() => {
    console.log("soy menor a 5");

    if (counter > 5) {
      console.log("cambio counter", counter);
    }
  }, []);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={() => handleClick("suma")}> +1 </button>
      <button onClick={() => handleClick("resta")}> -1 </button>
      <button onClick={() => handleClick("")}> Reset </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
