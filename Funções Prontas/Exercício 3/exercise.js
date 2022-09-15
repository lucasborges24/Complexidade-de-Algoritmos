function somaTotal(lst) {
  let sum = 0;
  lst.map((arrInt) => {
    sum += arrInt.reduce((total, amount) => total + amount, 0);
  });
  return sum;
}

function complexidadeDeTempo() {
  return "O(n*m)";
}

somaTotal([[1, 2, 3],[12, -20], [ ], [8, 4]]) // 10
somaTotal([ [], []]) // 00
