import { generateLine } from "./generateLine.js";

export const spacedAlternatingRectangle = (rows, columns) => {
  const pattern = [];

  const starRows = generateLine('*', columns);
  const hyphenRows = generateLine('-', columns);
  const spaceRows = generateLine(' ', columns);

  const patterns = [starRows, hyphenRows, spaceRows];
  let counter = 0;

  for (let index = 0; index < rows; index += 1) {
    let delta = 1;
    pattern.push(patterns[counter] + '\n');

    if (counter === 2) {
      counter = 0;
      delta = 0;
    }

    counter += delta;

  }
  return pattern.join('');

};
