function findIndexInverted(wordList, word) {
  let left = 0;
  let right = wordList.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const possibleMatch = wordList[middle];
    if (word === possibleMatch) return middle;
    if (word < possibleMatch) left = middle + 1;
    if (word > possibleMatch) right = middle - 1;
  }
  return -1;
}

findIndexInverted(['Zico', 'zebra', 'sapato', 'guerra', 'faca', 'dado', 'balão', 'água'], "dado") // 5
findIndexInverted(['Zico', 'zebra', 'sapato', 'guerra', 'faca', 'dado', 'balão', 'água'], "casa") // -1

