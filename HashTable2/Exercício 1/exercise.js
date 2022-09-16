function modaTetragrama(str) {
  const hashTable = {};
  for (let i = 0; i < str.length; i++) {
    const tetragrama = str.slice(i, i + 4);
    if (tetragrama.length < 4) break;
    if (hashTable[tetragrama] === undefined) {
      hashTable[tetragrama] = 1;
    } else {
      hashTable[tetragrama]++;
    }
  }

  let maxCount = 0;
  let maxTetra = "";
  for (const tetra in hashTable) {
    if (hashTable[tetra] > maxCount) {
      maxCount = hashTable[tetra];
      maxTetra = tetra;
    } else if (hashTable[tetra] === maxCount) {
      maxCount = tetra > maxTetra ? hashTable[tetra] : maxCount;
      maxTetra = tetra > maxTetra ? tetra : maxTetra;
    }
  }

  return maxTetra;
}

modaTetragrama("AAAABBBBAAAA"); // "AAAA"
modaTetragrama("AAAAABBBB"); // "AAAA"
modaTetragrama("AAAAZZZZ"); // "ZZZZ"
modaTetragrama("ABC"); // ""
