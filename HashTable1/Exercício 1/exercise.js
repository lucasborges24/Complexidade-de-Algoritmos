function containsDuplicates(arr) {
  // for (let outer = 0; outer < arr.length; outer++){
  // 	for (let inner = 0; inner < arr.length; inner++){
  // 		if (outer == inner)
  // 			continue;
  // 		if (arr[outer] == arr[inner])
  // 			return true;
  // 	}
  // }
  // return false;
  let hashTable = {};
  let ThereIsDuplicate = false;

  arr.forEach((element) => {
    if (hashTable[element]) {
      return (ThereIsDuplicate = true);
    }
    return (hashTable[element] = true);
  });

  return ThereIsDuplicate;
}

containsDuplicates([1, 2, 3, 1, 4]); // true
containsDuplicates([1, 2, 3, 4]); // false

