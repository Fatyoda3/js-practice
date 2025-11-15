import { generateLine } from "./generateLine.js";

export const rightAlign = (row) => {
  const pattern = [];

  for (let index = 1; index <= row; index++) {
    pattern.push(generateLine(' ', row - index));
    pattern.push(generateLine('*', index) + '\n');
  }
  return pattern.join('');
};
