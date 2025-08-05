interface ScreenResultsProps {
  results: string;
}

export const ScreenResults = ({ results }: ScreenResultsProps) => {
  return (
    <span
      data-testid="screen-results"
      className={`flex w-full h-15 justify-end text-[2em] p-2 focus:border-0 focus:outline-0 text-pink-300/50`}
    >
      {results}
    </span>
  );
};
