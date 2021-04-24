function mergeFiles(fileSizes) {
  // Write your code here
  if (fileSizes.length <= 1) {
    return 0;
  } else {
    // first minimum number
    let minA = Math.min(...fileSizes);
    let indexA = fileSizes.indexOf(minA);
    fileSizes.splice(indexA, 1);

    // second minimum number
    let minB = Math.min(...fileSizes);
    let indexB = fileSizes.indexOf(minB);
    fileSizes.splice(indexB, 1);
    fileSizes.push(minA + minB);
    return minA + minB + mergeFiles(fileSizes);
  }
}

// https://www.csestack.org/minimum-cost-merging-files/

// basically given a list of elements, and find the minimum cost to merge the elements, at any time we merge two elements , and cost of merging  is sum of those elements .

// math.min takes distinct values and not array (see - https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa#:~:text=of%20Math%20object-,The%20Math.,of%20zero%20or%20more%20numbers.&text=The%20destructuring%20assignment%20syntax%20is,or%20objects%20into%20distinct%20variables.)
