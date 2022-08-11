import { useState } from "react";
import PropTypes from "prop-types";

export const CounterApp = ({ value }) => {

  console.log('Render');

  const [counter, setCounter] = useState(0);

  const handdleAdd = () => {
    setCounter(counter + 1);
    // setCounter((c) => c+1)
  };
  const handdleSubstract = () => setCounter(counter - 1);
  const handdleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handdleAdd}> +1 </button>
      <button onClick={handdleSubstract}> -1 </button>
      <button onClick={handdleReset}> Reset </button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
