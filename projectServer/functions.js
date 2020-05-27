function sum2(num1,num2){
    return num1+num2;
}

function sum3(num1,num2,num3){
    return sum2(num1,num2)+num3;
}

module.exports = {sum2,sum3};