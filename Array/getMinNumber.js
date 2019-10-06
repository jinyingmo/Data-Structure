/**
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，打印能拼接出的所有数字中最小的一个
 * 思路：a和b两个数字可以有两种组合：ab和ba，若ab<ba则ab应该排在ba前面，否则ab应该排在ba后面
 * 提醒：'11' - '1' = 10
 */

function getMinNumber(numbers) {
  if (!numbers || numbers.length === 0) {
    return ''
  }
  return numbers.sort(compare).join('')
}

function compare(a, b) {
  const ab = '' + a + b
  const ba = '' + b + a
  return ab - ba
}
