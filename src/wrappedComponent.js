import React from "react";
import withCounter from "./hoc/counter";

function WrapperComponent(props) {
  return (
    <div>
      {props.count}
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
    </div>
  );
}

const HigherOrderComponent = withCounter(WrapperComponent);
export default HigherOrderComponent;
