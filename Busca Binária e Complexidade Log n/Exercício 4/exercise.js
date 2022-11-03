function countWord(wordList, word) {
  let count = 0;

  let lastRight = Infinity;
  let left = 0;
  let right = wordList.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = wordList[middle];
    if (potentialMatch === word) {
      count++;
      let i = middle + 1;
      if (lastRight !== Infinity) {
        count += lastRight - middle - 1;
      } else {
        let left2 = middle;
        let right2 = right;
        while (wordList[left2] === word) {
          const middle2 = Math.floor((left2 + right2) / 2);
          if (wordList[middle2 + 1] !== word) {
            count += left2 - middle;
          }
          if (wordList[middle2] !== word) {
            right2 = middle2 - 1;
          } else if (wordList[middle2] === word) {
            left2 = middle2 + 1;
          }
        }
      }
      lastRight = middle;
      right = middle - 1;
    }
    if (potentialMatch > word) {
      right = middle - 1;
    }
    if (potentialMatch < word) {
      left = middle + 1;
    }
  }
  console.log(count);
  return count;
}

countWord(
  ["abelha", "alvo", "alvo", "arvore", "colméia", "colméia", "colméia", "da"],
  "arvore"
); // 1
countWord(
  [
    "abelha",
    "alvo",
    "alvo",
    "arvore",
    "colméia",
    "colméia",
    "colméia",
    "da",
    "da",
    "de",
    "de",
    "de",
    "do",
  ],
  "colméia"
); // 3
countWord(
  ["abelha", "alvo", "alvo", "arvore", "colméia", "colméia", "colméia", "da"],
  "balde"
); // 0
