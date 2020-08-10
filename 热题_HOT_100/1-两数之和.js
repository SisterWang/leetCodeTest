const nums = [3, 3];
const target = 6;
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum1 = function(nums, target) {
  // 解法1 暴力法
  for (let i = 0; i < nums.length; i++) {
      for(let j = i + 1; j < nums.length; j++) {
          if (nums[j] === target - nums[i]) {
              return [i, j]
          }
      }
  }
  return '没有符合的结果'
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum2 = function(nums, target) {
  // 解法2 2遍哈希法
  const hashTable = new Object()
  for (let i = 0; i < nums.length; i++) {
      hashTable[nums[i]] = i
  }
  for (let i = 0; i < nums.length; i++) {
      const comp = target - nums[i] 
      if (hashTable.hasOwnProperty(comp) && hashTable[comp] !== i) {
          return [i, hashTable[comp]]
      }
  }
  return '没有符合的结果'
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum3 = function(nums, target) {
  // 解法3 1遍哈希法
  const hashTable = new Object()
  for (let i = 0; i < nums.length; i++) {
      const comp = target - nums[i] 
      if (hashTable.hasOwnProperty(comp) && hashTable[comp] !== i) {
          return [hashTable[comp], i]
      }
      hashTable[nums[i]] = i
  }
  return '没有符合的结果'
}

const res1 = twoSum1(nums, target);
console.log('结果1');
console.log(res1)
//-------------------------------------------------------------
const res2 = twoSum2(nums, target);
console.log('结果2');
console.log(res2)
//-------------------------------------------------------------
const res3 = twoSum3(nums, target);
console.log('结果3');
console.log(res3)