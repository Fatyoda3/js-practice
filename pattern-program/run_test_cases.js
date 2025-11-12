import { testFilledCases, testAllTestCasesHollow, testAllTestCasesAlternateRect, testAllTestCasesSpaceAlternateRect, testAllTestCasesTriangle, testAllTestCasesRightAlignTriangle, testAllTestCasesDiamond, testAllTestCasesHollowDiamond } from "./test_cases";

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
