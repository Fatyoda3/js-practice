export const generateLine = (string, count) => {
  const pattern = [];
  for (let term = 0; term < count; term++) {
    pattern.push(string);
  }
  return pattern.join('');
};
