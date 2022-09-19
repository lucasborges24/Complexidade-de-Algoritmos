function listFirstCopy(bookshelf) {
  const hashTable = {};
  let firstCopy = [];
  for (let i = 0; i < bookshelf.length; i++) {
    const book = bookshelf[i];
    if (hashTable[book] === undefined) {
      hashTable[book] = i;
    }
    firstCopy.push(hashTable[book]);
  }
  console.log(firstCopy);
  return firstCopy;
}

listFirstCopy([10, 3, 5, 3, 10, 1]); //  [0, 1, 2, 1, 0, 5]
listFirstCopy([100, 10, 100, 100, 20, 10, 20, 10]); // [0, 1, 0, 0, 4, 1, 4, 1]
