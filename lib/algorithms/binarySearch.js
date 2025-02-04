/**
 * Returns the leftmost position that `target` should go to such that the
 * sequence remains sorted.
 * @param {number[]} arr
 * @param {number} target
 * @return {number} Position
 */
function bisectLeft(arr, target) {
  let left = 0;
  let right = arr.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

/**
 * Searches for a target element within an array.
 * Returns -1 if the target is not found.
 * @param {number[]} arr
 * @param {number} target
 * @return {number} The index of the target element within the array.
 */
function binarySearch(arr, target) {
  const idx = bisectLeft(arr, target);
  return idx < arr.length && arr[idx] === target ? idx : -1;
}

export { bisectLeft, binarySearch };
