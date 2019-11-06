function getMaxPairs(noOfWashes, cleanPile, dirtyPile) {
  // Your solution goes here.
  let cleanMemo = {};
  let dirtyMemo = {};
  let maximumPair = 0;

  if (noOfWashes === 0) {
    groupSock(cleanPile, cleanMemo);
    Object.keys(cleanMemo).forEach(key => {
      maximumPair += parseInt(cleanMemo[key] / 2);
      cleanMemo[key] = parseInt(cleanMemo[key] % 2);
    });
  }
  else {
    groupSock(cleanPile, cleanMemo);
    groupSock(dirtyPile, dirtyMemo);

    Object.keys(cleanMemo).forEach(key => {
      if (cleanMemo[key] % 2 !== 0 && dirtyMemo[key]) {
        dirtyMemo[key]--;
        cleanMemo[key]++;
        noOfWashes--;
      }
    });

    if (noOfWashes > 0) {
      for (let key in dirtyMemo) {
        if (dirtyMemo[key] > 1) {

          while (noOfWashes !== 0 && dirtyMemo[key] !== 0) {
             cleanMemo[key] = cleanMemo[key] + 1 || 1;
             dirtyMemo[key]--;
             noOfWashes--;
          }

        }
      }
    }

    Object.keys(cleanMemo).forEach(key => {
      maximumPair += parseInt(cleanMemo[key] / 2);
      cleanMemo[key] = parseInt(cleanMemo[key] % 2);
    });
  }
  return maximumPair;

}


function groupSock(array, memo) {
  array.map(num => {
    if (!memo[num]) memo[num] = 1;
    else memo[num]++;
  });
}


module.exports = getMaxPairs;
