// 1)  напиши что такое функция, зачем она нужна, как она объявляется и вызывается.

/*Функция выболняет определеный блок кода. Вызываеться с помощью слова function */

// 2) апиши функцию, которая возвращает сумму двух чисел.

const getFunctionSum = function (number1,number2 ) {
    return number1 + number2
}

console.log(getFunctionSum(4, 5))

//3) Напиши разницу между аргументами и параметрами функции.

const getFunctionmultiplication = function (number1, number2 ) { // здесь находяться параметры
    return number1 * number2; // парематры со значеинем становяться аргументами, 
}

console.log(getFunctionmultiplication(4, 5))

// 4) Напиши функцию, которая возвращает максимум из трех чисел 

const getFunctionmx = function (number1, number2, number3 ) { 
    return Math.max(number1, number2, number3)
}

console.log(getFunction(-30, 2, 25))

// Создать глобальные и локальные переменные внутри функций. 

const globalVariables = 0; // Глобальная переменная

const funcVariables = function () {
    const localVariables = 2; // локальная переменная видна и активна только внутри функции
}

//5) функцию, которая проверяет, является ли число простым.

function isPrime(num) {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return num !== 1;
  }
  
  function printPrimes(max) {
    for (let i = 2; i <= max; i++) {
      if (isPrime(i)) console.log(i);
    }
  }
  
  printPrimes(100);