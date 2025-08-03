import { useState } from "react";

const formatNumber = (value: string) => {
  const format = value.replaceAll(",", "");
  const num = Number(format);
  const number = num.toLocaleString("en-US");
  return number;
};
const verifyNumber = (value: string) => {
  const number = value.replaceAll(",", "");
  return Number(number);
};

const operator = ["-", "+", "/", "*"];

export const App = () => {
  const [screen, setScreen] = useState<string>("");
  const [results, setResults] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInput = (value: string) => {
    setScreen(value);
  };

  const handleScreen = (value: string) => {
    if (operator.includes(value) && operator.includes(screen.slice(-1))) {
      let changeOperator = screen.slice(0, -1);
      changeOperator = changeOperator + value;
      setScreen(changeOperator);
      return;
    }

    const valueScreen = screen + value;
    setScreen(valueScreen);
    calcOperation(valueScreen);
  };

  const calcOperation = (value: string) => {
    try {
      const operation = eval(value);
      setResults(operation);
    } catch {
      setResults("");
    }
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
    calcOperation(newScreen);
  };

  return (
    <section className="w-[90%] sm:w-[500px] mx-auto my-10">
      <div className="border border-zinc-500 rounded-md p-2">
        <section className={`border rounded-md ${error && "border-red-600"}`}>
          <input
            type="text"
            className={`w-full h-full text-right text-[2em] p-2 focus:border-0 focus:outline-0 `}
            onChange={(e) => handleInput(e.target.value)}
            value={screen}
          />
          <input
            type="text"
            className={`w-full h-full text-right text-[2em] p-2 focus:border-0 focus:outline-0 text-zinc-500`}
            onChange={(e) => handleInput(e.target.value)}
            value={results}
          />
          <small>{error}</small>
        </section>

        <section className="w-full h-full flex">
          <section>
            <button onClick={clearScreen}>C</button>

            <button onClick={deleteScreen}>E</button>
          </section>
          <section className="grid grid-cols-3 grid-rows-4 gap-1">
            {Array(12)
              .fill("")
              .map((_, i) => {
                const text =
                  i + 1 === 10
                    ? ""
                    : i + 1 === 11
                      ? "0"
                      : i + 1 === 12
                        ? "."
                        : (i + 1).toString();

                return (
                  <button
                    className="px-15 py-10"
                    onClick={() => handleScreen(text)}
                    key={text}
                  >
                    {text}
                  </button>
                );
              })}
          </section>

          <section className="grid grid-cols-1 grid-rows-4 gap-1">
            {["+", "-", "*", "/"].map((text) => (
              <button
                className="px-15 py-10"
                onClick={() => handleScreen(text)}
              >
                {text}
              </button>
            ))}
          </section>
        </section>
        <section>
          <div className="w-full" onClick={handleResult}>
            =
          </div>
        </section>
      </div>
    </section>
  );
};
