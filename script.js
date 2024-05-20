const fibs = function (n) {
  let array = [0, 1];
  if (n == 1) return [0];
  else if (n <= 0) return "n should be > 0";
  let first = 0;
  let second = 1;
  for (let i = 2; i < n; i++) {
    array.push(array[first] + array[second]);
    first++;
    second++;
  }
  return array;
};

const fibsRec = function (n, array = [0, 1]) {
  if (n <= 0) return "n should be > 0";
  else if (n == 1) return [0];
  else if (n == 2) {
    return array;
  } else {
    fibsRec(n - 1, array);
    array.push(array[n - 3] + array[n - 2]);
    return array;
  }
};

const mergeSort = function (array) {
  if (array.length <= 1) {
    return array;
  } else {
    let left = mergeSort(array.slice(0, array.length / 2));
    let right = mergeSort(array.slice(array.length / 2, array.length));
    return merge(left, right);
  }
};

function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
