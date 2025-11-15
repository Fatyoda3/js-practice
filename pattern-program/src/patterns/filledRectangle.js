import { generateLine } from "./generateLine.js";

export const filledRectangle = (rows, columns) => {
  return generateLine(generateLine('*', columns) + '\n', rows);
};
