import { generateLine } from "./generateLine.js";

export const triangle = (row) => {
  const pattern = [];
  for (let index = 0; index < row; index++) {
    pattern.push((generateLine('*', index + 1)));
  }
  return pattern.join('\n');
};
