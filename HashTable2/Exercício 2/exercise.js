function alienTranslate(alf1, alf2, msg) {
  const hashTable = {};
  alf1.forEach((element, index) => (hashTable[element] = alf2[index]));

  const arrTranslated = msg.map((element) => hashTable[element]);
  return arrTranslated;
}

const al1 = [10, 20, 43, 55, 1, 90];
const al2 = [22, 32, 44, 80, 9, 3];
const msgg = [55, 1, 1, 10, 20, 10, 43, 43, 55];
alienTranslate(al1, al2, msgg); // [80, 9, 9, 22, 32, 22, 44, 44, 80]
