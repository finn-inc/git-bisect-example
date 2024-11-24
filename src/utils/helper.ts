export const helper(msg: string): string {
  return `helper sayss: ${msg}`;
}

export function calculateComplexValue(n: number): number {
  if (n <= 1) return n;
  return calculateComplexValue(n - 1) + calculateComplexValue(n - 2);
}
