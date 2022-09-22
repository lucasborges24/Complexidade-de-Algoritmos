function enzosDistinctsArray(nArray) {
  const hashTable = {};
  const auxArr = [];
  for (let i = nArray.length - 1; i >= 0; i--) {
    const item = nArray[i];
    if (hashTable[item] === undefined) {
      hashTable[item] = true;
    }
    auxArr.push(Object.values(hashTable).length);
  }
  console.log(auxArr.reverse());
  return auxArr.reverse()
}

enzosDistinctsArray([1, 2, 3, 4, 1, 2, 3, 4, 100, 99]); // [6, 6, 6, 6, 6, 5, 4, 3, 2, 1]
enzosDistinctsArray([1, 2, 3, 4, 100, 99]); // [6, 5, 4, 3, 2, 1]
