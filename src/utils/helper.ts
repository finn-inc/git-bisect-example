export const helper = (msg: string): string => {
  return `helper sayss: ${msg}`;
}

export const calculateEditDistance = (s1: string, s2: string): number => {
  const dp: number[][] = Array.from({ length: s1.length + 1 }, () =>
    Array(s2.length + 1).fill(0)
  );

  for (let i = 0; i <= s1.length; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= s2.length; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j],     // 削除
          dp[i][j - 1],     // 挿入
          dp[i - 1][j - 1]  // 置換
        ) + 1;
      }
    }
  }

  return dp[s1.length][s2.length];
}
