export const calcOperation = (value: string): string => {
  try {
    return eval(value);
  } catch {
    return "";
  }
};
