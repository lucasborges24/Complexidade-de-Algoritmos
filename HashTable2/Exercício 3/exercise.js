function checkStringsAnagram(str1, str2) {
  console.log("str1: " + str1 + " str2: " + str2)
  const lengthIsNotEqual = str1.length !== str2.length;
  if (lengthIsNotEqual) return false;
  const hashTableStr1 = {};
  const hashTableStr2 = {};
  for (let i = 0; i < str1.length; i++) {
    const letter1 = str1[i];
    if (hashTableStr1[letter1] === undefined) {
      hashTableStr1[letter1] = 1;
    } else {
      hashTableStr1[letter1]++;
    }
  
    const letter2 = str2[i];
    if (hashTableStr2[letter2] === undefined) {
      hashTableStr2[letter2] = 1;
    } else {
      hashTableStr2[letter2]++
    }
  }
  
  for (const letter in hashTableStr1) {
    if (hashTableStr1[letter] !== hashTableStr2[letter]) {
      return false;
    }
  }
  return true;
}

checkStringsAnagram("silent", "listen") // true
checkStringsAnagram("arte", "reta") // true
checkStringsAnagram("caso", "vaso") // false
