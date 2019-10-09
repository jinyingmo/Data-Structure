/**
 * 输入一个正数S，打印出所有和为S的连续正数序列。例如：输入15，有序1+2+3+4+5 = 4+5+6 = 7+8 = 15 所以打印出3个连续序列1-5，5-6和7-8。
 */

function findContinuousSequence(sum) {
  let lMark = 1
  let rMark = 2
  if(lMark + rMark > sum) {
    return null
  }
  let res = []
  while(rMark < sum && lMark < sum) {
    const current = getSum(lMark, rMark)
    if(current < sum) {
      rMark ++
    } else {
      if(current === sum) {
        res.push(`${lMark}-${rMark}`)
      }
      lMark ++
    }
  }
  return res
}

function getSum(num1, num2) {
  return ((num1 + num2)*(num2 - num1 + 1))/2
}