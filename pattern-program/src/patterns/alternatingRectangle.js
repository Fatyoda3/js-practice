import { generateLine } from "./generateLine.js";

export const alternatingRectangle = (rows, columns) => {
  const pattern = [];
  let bool = true;

  for (let index = 1; index <= rows; index++) {
    if (bool) {
      pattern.push(generateLine('*', columns));
      bool = false;
    }
    else {
      pattern.push(generateLine('-', columns));
      bool = true;
    }
    pattern.push('\n');
  }
  return pattern.join('');
};
