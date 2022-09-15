// não altere esta função
function ET(lst) {
  let i = 0;
  while (i < lst.length) {
      if (lst.indexOf(lst[i]) !== i) {
          lst.splice(i, 1);
      }
      else {
          i++;
      }
  }

  return lst;
}

// altere o return desta função
function responder() {
  return 2 + 4 + 16 + 128 + 512 + 4096; // por exemplo: 
  // se você acha que somente as afirmativas 
  // 1 e 4 do enunciado estão corretas, retorne 5
}