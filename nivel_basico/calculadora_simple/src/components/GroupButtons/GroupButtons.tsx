import { Button } from "./Button";

interface GroupButtonsProps {
  clearScreen: () => void;
  deleteScreen: () => void;
  handleResult: () => void;
  handleScreen: (value: string) => void;
}

// const operator = ["-", "+", "/", "*"];
export const GroupButtons = ({
  clearScreen,
  deleteScreen,
  handleScreen,
  handleResult,
}: GroupButtonsProps) => {
  const buttonText = [
    "C",
    "()",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "+/-",
    "0",
    ".",
    "=",
  ];

  const handleActionButton = (action: string) => {
    if (action === "C") {
      clearScreen();
      return;
    } else if (action === "E") {
      deleteScreen();
      return;
    } else if (action === "=") {
      handleResult();
      return;
    } else {
      handleScreen(action);
    }
  };

  return (
    <section className="w-full h-full flex justify-center">
      <section className="grid grid-cols-4 grid-rows-5 gap-3">
        {buttonText.map((button) => (
          <Button key={button} onClick={() => handleActionButton(button)}>
            {button}
          </Button>
        ))}
      </section>
    </section>
  );
};
