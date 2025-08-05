import { GroupButtons } from "./components/GroupButtons/GroupButtons";
import { Screen } from "./components/Screen/Screen";
import { useScreen } from "./hook/useScreen";

export const App = () => {
  const {
    handleScreen,
    handleResult,
    screen,
    results,
    clearScreen,
    deleteScreen,
  } = useScreen();

  return (
    <section className="w-[450px] mx-auto my-10 bg-zinc-950 rounded-2xl">
      <div className=" p-2 py-5 space-y-10">
        <Screen
          screen={screen}
          results={results}
          deleteScreen={deleteScreen}
          handleScreen={handleScreen}
        />
        <GroupButtons
          clearScreen={clearScreen}
          deleteScreen={deleteScreen}
          handleResult={handleResult}
          handleScreen={handleScreen}
        />
      </div>
    </section>
  );
};
