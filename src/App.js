import React, { useEffect } from "react";
import HigherOrderComponent from "./wrappedComponent";
import { useMobileScreen } from "./hooks/mobileScreen";
const App = () => {
  const { isMobile } = useMobileScreen();
  return (
    <h1>
      react app is here with the webpack
      <HigherOrderComponent />
    </h1>
  );
};

export default App;
