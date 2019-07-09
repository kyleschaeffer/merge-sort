import { mergeSort } from './merge-sort';

test('[3,2,1] to equal [1,2,3]', () => {
  expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
});

test('[8,19,0,-4,25,3] to equal [-4,0,3,8,19,25]', () => {
  expect(mergeSort([8, 19, 0, -4, 25, 3])).toEqual([-4, 0, 3, 8, 19, 25]);
});

test('[1,2,3] to equal [1,2,3]', () => {
  expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
});

test('[1] to equal [1]', () => {
  expect(mergeSort([1])).toEqual([1]);
});

test('[] to equal []', () => {
  expect(mergeSort([])).toEqual([]);
});
