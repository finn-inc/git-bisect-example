export const helper = (msg: string): string => {
  return `helper sayss: ${msg}`;
}

export const calculateEditDistance = (s1: string, s2: string): number => {
  const len1 = s1.length;
  const len2 = s2.length;

  let previous = Array(len2 + 1).fill(0);
  let current = Array(len2 + 1).fill(0);

  for (let j = 0; j <= len2; j++) {
    previous[j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    current[0] = i;
    for (let j = 1; j <= len2; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        current[j] = previous[j - 1];
      } else {
        current[j] = Math.max(
          previous[j] + 1,
          current[j - 1] + 1,
          previous[j - 1] + 1
        );
      }
    }
    [previous, current] = [current, previous];
  }

  return previous[len2];
}
