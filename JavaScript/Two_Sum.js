// Prompt:

// Answer:
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const hashtable = {};
  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (hashtable.hasOwnProperty(complement)) {
      return [hashtable[complement], i];
    }

    hashtable[nums[i]] = i;
  }
  return null;
};
