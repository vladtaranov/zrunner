export const getValueInPercents = (value: number, min: number, max: number): number => {
  return (value - min) / ((max - min) / 100);
};

export const getValueFromPercents = (value: number, min: number, max: number): number => {
  return value * (max - min) / 100 + min;
};
