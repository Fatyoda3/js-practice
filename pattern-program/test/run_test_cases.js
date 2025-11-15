import {
  testFilledCases,
  testAllTestCasesHollow,
  testAllTestCasesAlternateRect,
  testAllTestCasesSpaceAlternateRect,
  testAllTestCasesTriangle,
  testAllTestCasesRightAlignTriangle,
  testAllTestCasesDiamond,
  testAllTestCasesHollowDiamond
} from "./test_cases.js";

const testAllCases = () => {
  testFilledCases();
  testAllTestCasesHollow();
  testAllTestCasesAlternateRect();
  testAllTestCasesSpaceAlternateRect();
  testAllTestCasesTriangle();
  testAllTestCasesRightAlignTriangle();
  testAllTestCasesDiamond();
  testAllTestCasesHollowDiamond();
};
testAllCases();
