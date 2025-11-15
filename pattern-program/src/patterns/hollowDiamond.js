import { generateLine } from "./generateLine.js";

export const hollowDiamond = (givenSize) => {
  const pattern = [];
  const size = givenSize % 2 === 0 ? givenSize - 1 : givenSize;

  const middleRow = size / 2;
  const uptoOrFrom = Math.floor(middleRow);

  if (size < 2) {
    return '*';
  }

  let special = '';

  for (let index = 0; index < uptoOrFrom; index++) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push('*' + generateLine(' ', 2 * index - 1) + special + '\n');
    special = '*';
  }
  pattern.push('*' + (generateLine(' ', size - 2)) + '*\n');
  for (let index = uptoOrFrom - 1; index >= 1; index--) {
    pattern.push(generateLine(' ', (middleRow - index - 1)));
    pattern.push('*' + generateLine(' ', 2 * index - 1) + '*\n');
  }

  pattern.push((generateLine(' ', size / 2 - 1)) + '*\n');

  return pattern.join('');
};
