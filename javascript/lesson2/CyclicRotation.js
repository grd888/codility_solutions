function solution(A,K) {
  if (A.length === 0) {
    return A;
  }
  for (i = 0; i < K; i++) {
    const t = A.pop();
    A.unshift(t);
  }
  return A;
}
