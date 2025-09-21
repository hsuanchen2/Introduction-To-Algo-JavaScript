// 183 頁，位於 pivot 的值不會進到 quicksort 迴圈裡面

class QuickSort {
  constructor(nums) {
    this.arr = this.quickSort(nums);
  }
  arr;
  swap(nums, i, j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  quickSort(nums) {
    if (nums.length <= 1) return nums;
    const numsCopy = [...nums];
    const { arr, pivotIndex } = this.partition(numsCopy);
    //
    const lower = arr.filter((_, index) => index < pivotIndex);
    const upper = arr.filter((_, index) => index > pivotIndex);
    return [
      ...this.quickSort(lower),
      arr[pivotIndex],
      ...this.quickSort(upper),
    ];
  }
  partition(nums) {
    // [47, 169, 109, 55, 7, 13, 1, 137, 131] pivot => 131
    if (nums.length <= 1) return nums;
    let i = -1; // right border of low side
    const pivot = nums[nums.length - 1]; // choose the last element as pivot (clrs page 184)
    for (let j = 0; j <= nums.length - 2; j++) {
      if (nums[j] <= pivot) {
        i++;
        this.swap(nums, j, i);
      }
    }
    this.swap(nums, nums.length - 1, i + 1);
    return {
      arr: nums,
      pivotIndex: i + 1,
    };
  }

  logSortedArray() {
    console.log(this.arr);
  }
}

const testCase = [47, 169, 109, 55, 7, 13, 1, 137, 131];
// const MyQuickSort = new QuickSort(testCase);
// MyQuickSort.logSortedArray();

const quickSort = (nums) => {
  swap(nums, 0, 1);
  console.log(nums);
};
const partition = (nums) => {};

const swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
  return nums;
};

quickSort(testCase);
