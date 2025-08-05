interface ScreenInputProps {
  screen: string;
  handleScreen: (value: string) => void;
  deleteScreen: () => void;
}

export const ScreenInput = ({
  screen,
  handleScreen,
  deleteScreen,
}: ScreenInputProps) => {
  const handleInput = (value: string) => {
    console.log(value);
    if ("Backspace" === value) {
      deleteScreen();
      return;
    }
    if (!"1234567890./*-+".includes(value)) return;
    handleScreen(value);
  };

  return (
    <input
      type="text"
      className={`w-full h-full text-right text-[2em] p-2 focus:border-0 focus:outline-0 `}
      onKeyDown={(e) => handleInput(e.key)}
      value={screen}
      onChange={() => {}}
      placeholder="0"
    />
  );
};
