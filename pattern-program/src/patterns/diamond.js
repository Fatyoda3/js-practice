import { generateLine } from "./generateLine.js";

export const diamond = (givenSize) => {
  const pattern = [];
  const size = givenSize % 2 === 0 ? givenSize - 1 : givenSize;

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  for (let index = 0; index < uptoOrFrom; index++) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push(generateLine('*', 2 * index + 1) + '\n');
  }
  pattern.push((generateLine('*', size)) + '\n');
  for (let index = uptoOrFrom - 1; index >= 0; index--) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push(generateLine('*', 2 * index + 1) + '\n');
  }

  return pattern.join('');
};
