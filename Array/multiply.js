/**
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 * 思路：见multiply.md
 */

function multiply(arrayA) {
  if(!arrayA || arrayA.length === 0) {
    return []
  }
  let arrayB = [1]
  // 先计算下三角形
  let temp1 = 1
  for(let i = 0; i < arrayA.length - 1; i ++) {
    temp1 *= arrayA[i]
    arrayB.push(temp1)
  }
  // 再计算上三角形
  let temp2 = 1
  for(let i = arrayA.length - 1; i > 0; i --) {
    temp2 *= arrayA[i]
    arrayB[i - 1] *= temp2
  }
  return arrayB
}