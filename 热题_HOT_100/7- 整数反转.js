/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  // 解法1-字符串法
  let res = 0
  if (x < 0) {
    res =  Number(`${Math.abs(x)}`.split('').reverse().join('')) * -1
  } else {
    res = Number(`${x}`.split('').reverse().join(''))
  }
  if (res > Math.pow(-2, 31) && res < Math.pow(2, 31) - 1) return res
  return 0
};

/**
 * @param {number} x
 * @return {number}
 */
const reverse2 = function(x) {
  // 解法2-数学法
  let res = 0
  while (x !== 0) {
    res = res * 10 + x % 10
    x = (x / 10) | 0
    if ((res | 0) !== res) {
        res = 0
        break
    }
  }
  return res
};

console.log(reverse(-123))