function findFirstIndex(lst, target) {
  let left = 0;
  let right = lst.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = lst[middle];
    if (target === potentialMatch) {
      right = middle;
      while (left <= right) {
        const meio = Math.floor((left + right) / 2);
        const potentialMatch2 = lst[meio];
        if (left === right) left = right + 1;
        if (target === potentialMatch2) right = meio;
        if (target > potentialMatch2) left = meio + 1;
      }
      console.log(right)
      return right;
    }
    if (target < potentialMatch) right = middle - 1;
    if (target > potentialMatch) left = middle + 1;
  }
  console.log(-1)
  return -1
}

findFirstIndex([2, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15], 2); // 0
findFirstIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15], 10); // 9
findFirstIndex([1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 7], 6); // 8
findFirstIndex([1, 2, 2, 3, 4, 4, 5, 6, 6, 6, 7, 7], 8); // -1
