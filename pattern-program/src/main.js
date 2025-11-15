import { alternatingRectangle } from "./patterns/alternatingRectangle.js";
import {
  FILL_RECT,
  HOLLOW_RECT,
  ALT_RECT,
  SPACE_ALTER_RECT,
  TRIANGLE,
  RT_TRIANGLE,
  DIAMOND,
  HOLLOW_DIAMOND
} from './constants.js';

import { diamond } from "./patterns/diamond.js";
import { filledRectangle } from "./patterns/filledRectangle.js";
import { hollowDiamond } from "./patterns/hollowDiamond.js";
import { hollowRectangle } from "./patterns/hollowRectangle.js";
import { rightAlign } from "./patterns/rightAlign.js";
import { spacedAlternatingRectangle } from "./patterns/spacedAlternatingRectangle.js";
import { triangle } from "./patterns/triangle.js";

export const generatePattern = (style, dimensions) => {
  const columns = dimensions[0];
  const rows = dimensions[1];

  if (rows === 0 || columns === 0) {
    return '';
  }

  let pattern = '';

  if (style === TRIANGLE) {
    pattern = triangle(columns);
  } else if (style === HOLLOW_DIAMOND) {
    pattern = hollowDiamond(columns);
  } else if (style === DIAMOND) {
    pattern = diamond(columns);
  } else if (style === RT_TRIANGLE) {
    pattern = rightAlign(columns);
  } else if (style === HOLLOW_RECT) {
    pattern = hollowRectangle(rows, columns);
  } else if (style === FILL_RECT) {
    pattern = filledRectangle(rows, columns);
  } else if (style === ALT_RECT) {
    pattern = alternatingRectangle(rows, columns);
  } else if (style === SPACE_ALTER_RECT) {
    pattern = spacedAlternatingRectangle(rows, columns);
  }

  const len = pattern.length;
  const isLastNewLine = pattern[len - 1] === '\n';
  return pattern.slice(0, isLastNewLine ? len - 1 : len);
};
