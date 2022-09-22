function findFirstIndex(lst, target) {
  let left = 0;
  let right = lst.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = lst[middle];
    if (target === potentialMatch) {
      let before = middle - 1;
      if (target === lst[before]) {
        while (before >= 0 && target === lst[before]) {
          before--;
        }
        console.log(before + 1);
        return before + 1;
      }
      lst[middle + 1] === target ? console.log(middle) : console.log(-1);
      return lst[middle + 1] === target ? middle : -1;
    }
    if (target < potentialMatch) right = middle - 1;
    if (target > potentialMatch) left = middle + 1;
  }
  return -1;
}

findFirstIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15], 2); // 1
findFirstIndex([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11, 12, 13, 14, 15], 10); // 9
findFirstIndex([1, 2, 2, 3, 4, 4, 5, 6, 6, 5, 7, 7], 7); // 10
findFirstIndex([1, 2, 2, 3, 4, 4, 5, 6, 6, 5, 7, 7], 8); // -1
