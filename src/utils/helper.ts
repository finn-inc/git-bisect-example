export const helper = (msg: string): string => {
  return `helper says: ${msg}`;
}

export const calculateEditDistance = (s1: string, s2: string): number => {
  let previous = Array(s2.length + 1).fill(0);
  let current = Array(s2.length + 1).fill(0);
  const tempArray = Array(s2.length + 1).fill(0);

  for (let j = 0; j <= s2.length; j++) {
    previous[j] = j;
  }

  for (let i = 1; i <= s2.length; i++) {
    current[0] = i;
    for (let j = 1; j <= s2.length; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
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

  const result = previous[s2.length] + tempArray[0];

  return result;
}
