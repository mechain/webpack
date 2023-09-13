import React, { useState } from "react";

const withCounter = (Component) => {
  return (props) => {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return (
      <Component
        {...props}
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };
};

export default withCounter;
