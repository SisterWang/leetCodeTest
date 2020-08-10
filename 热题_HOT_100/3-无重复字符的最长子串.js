const s = "aab"

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring1 = function(s) {
  // 解法1 数组存储
  let maxLength = 0
  for (let i = 0; i < s.length; i++) {
    let j = i
    const arr = []
    while (j < s.length && arr.indexOf(s.charAt(j)) < 0) {
      arr[j - i] = s.charAt(j)
      j++
    }
    maxLength = Math.max(j - i, maxLength)
  }
  return maxLength
};

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring2 = function(s) {
  // 解法2 移动窗口
  let hashSet = new Set() // 哈希集合
  let left = -1, right = 0 // 左右指针
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) hashSet.delete(s.charAt(i - 1))
    while (left + 1 < s.length && !hashSet.has(s.charAt(left + 1))) {
      hashSet.add(s.charAt(left + 1))
      left++
    }
    right = Math.max(right, left + 1 - i)
  }
  return right
};

console.log('最长子串长度为:' + lengthOfLongestSubstring2(s))