function countWord(wordList, word) {
  let count = 0;
  
  let left = 0;
  let right = wordList.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = wordList[middle];
    if (potentialMatch === word) {
      count++;
      break;
      //   left = right + 1;
    } else if (potentialMatch < word) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  console.log(count);
  return count;
}

countWord(
  ["abelha", "alvo", "alvo", "árvore", "colméia", "colméia", "colméia", "da"],
  "árvore"
); // 1
countWord(
  ["abelha", "alvo", "alvo", "árvore", "colméia", "colméia", "colméia", "da"],
  "colméia"
); // 3
countWord(
  ["abelha", "alvo", "alvo", "árvore", "colméia", "colméia", "colméia", "da"],
  "balde"
); // 0
