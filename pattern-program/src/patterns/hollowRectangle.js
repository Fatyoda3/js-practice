import { generateLine } from "./generateLine.js";

export const hollowRectangle = (rows, columns) => {
  if (rows === 1) {
    return generateLine('*', columns);
  }
  if (columns === 1) {
    return generateLine('*\n', rows);
  }

  const pattern = [];

  const temp = generateLine('*', columns - 1);
  const trailPart = '*\n*';
  const hollowPart = generateLine(' ', columns - 2) + trailPart;
  pattern.push(temp + trailPart,
    generateLine(hollowPart, rows - 2) + temp);

  return pattern.join('');
};
