function lowerbound(list, target) {
  let left = list[0];
  let right = list.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const potentialMatch = list[middle];
    if (potentialMatch > target && list[middle - 1] <= target) {
      console.log(list[middle - 1]);
      return list[middle - 1];
    }
    if (
      potentialMatch <= target &&
      (list[middle + 1] > target || potentialMatch === list[list.length - 1])
    ) {
      console.log(potentialMatch);
      return potentialMatch;
    }
    if (potentialMatch > target) right = middle - 1;
    if (potentialMatch < target) left = middle + 1;
  }

  return -1;
}

lowerbound([0, 5, 10, 20, 35, 50], 12); // 10
lowerbound([0, 20, 40, 60, 80], 25); // 20
