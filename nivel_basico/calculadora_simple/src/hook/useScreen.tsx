import { useState } from "react";
import { calcOperation } from "../utils/calcOperation";

const operator = ["-", "+", "/", "*"];
export const useScreen = () => {
  const [screen, setScreen] = useState<string>("");
  const [results, setResults] = useState<string>("");
  // const [error, setError] = useState<string>("");

  const handleScreen = (value: string) => {
    if (screen === "" && operator.includes(value)) return;
    if (operator.includes(value) && operator.includes(screen.slice(-1))) {
      let changeOperator = screen.slice(0, -1);
      changeOperator = changeOperator + value;
      setScreen(changeOperator);
      return;
    }

    const valueScreen = screen + value;
    setScreen(valueScreen);

    if (!valueScreen.match(/[+\-*/]/)) return setResults("");
    const resultsCalc = calcOperation(valueScreen);
    setResults(resultsCalc);
  };

  const handleResult = () => {
    setScreen(results);
    setResults("");
  };

  const clearScreen = () => {
    setResults("");
    setScreen("");
  };

  const deleteScreen = () => {
    if (screen === "") return;
    const newScreen = screen.slice(0, -1);
    setScreen(newScreen);
    const resultsCalc = calcOperation(newScreen);
    setResults(resultsCalc);
  };

  return {
    screen,
    results,
    handleResult,
    handleScreen,
    deleteScreen,
    clearScreen,
  };
};
