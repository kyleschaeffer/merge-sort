/**
 * Sort numbers using merge sort algorithm
 *  - Good all-around sorting algorithm: O(n log n)
 */
export function mergeSort(numbers: number[]): number[] {
  if (numbers.length <= 1) return numbers;

  // Find middle of array
  const middle: number = Math.floor(numbers.length / 2);

  // Get left & right arrays
  const left: number[] = numbers.slice(0, middle);
  const right: number[] = numbers.slice(middle);

  // Recursively merge and sort array halves
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Sort and stitch two array halves together
 */
function merge(left: number[], right: number[]): number[] {
  const sorted: number[] = [];

  // Sort left and right halves
  while (left.length && right.length) {
    if (left[0] <= right[0]) sorted.push(left.shift());
    else sorted.push(right.shift());
  }

  // Push remainder to sorted array
  return [...sorted, ...left, ...right];
}
