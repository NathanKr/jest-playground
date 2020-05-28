function sum2(num1, num2) {
  return num1 + num2;
}

function sum3(num1, num2, num3) {
  return sum2(num1, num2) + num3;
}

function sum2Delayed(num1, num2) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num1 + num2);
    }, 2000);
  });
}

module.exports = { sum2, sum3 , sum2Delayed };
