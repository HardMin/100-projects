import { ScreenInput } from "./ScreenInput";
import { ScreenResults } from "./ScreenResults";

interface ScreenProps {
  screen: string;
  results: string;
  handleScreen: (value: string) => void;
  deleteScreen: () => void;
}

export const Screen = ({
  screen,
  results,
  handleScreen,
  deleteScreen,
}: ScreenProps) => {
  return (
    // ${false && "border-red-600"}
    <section className={`border-b-2 border-b-zinc-500/40 text-amber-600`}>
      <ScreenInput
        screen={screen}
        deleteScreen={deleteScreen}
        handleScreen={handleScreen}
      />
      <ScreenResults results={results} />
      {/* <small>{false}</small> */}
    </section>
  );
};
