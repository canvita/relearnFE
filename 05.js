// 判断正负0
function checkZero(zero) {
  if (1 / zero === Infinity) {
    return 1;
  }
  if (1 / zero === -Infinity) {
    return -1;
  }
}

// 判断正负号
function checkSign(number) {
  const absNumber = Math.abs(number);
  if (Number.isNaN(absNumber)) {
    return NaN;
  }
  if (absNumber === 0) {
    return checkZero(number)
  }
  if (number === Infinity) {
    return 1;
  }
  if (number === -Infinity) {
    return -1;
  }
  return number / absNumber;
}


// 浮点数精度丢失问题，会丢失5次精度
console.log(1.1 + 1.3 - 2.4 < 5 * Number.EPSILON)
console.log(Math.abs('jsdfj'))