<<<<<<< HEAD
const sum = (num1,num2) => num1+num2;

const isNull = () => null;

module.exports.sum = sum;
module.exports.isNull = isNull;
=======
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
>>>>>>> 3680b5abfe4c57cc2c6c8d44d17ace350aac702f
