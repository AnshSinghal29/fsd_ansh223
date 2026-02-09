// Addition Function
const addNumbers = (a, b) => a + b;

console.log(addNumbers(5, 10)); // 15


// Celsius to Fahrenheit Converter
const convertToFahrenheit = (celsius) => {
  const fahrenheit = (celsius * 9/5) + 32;
  return `${celsius}°C is ${fahrenheit}°F`;
};

console.log(convertToFahrenheit(30)); // "30°C is 86°F"

const isPalindrome = (num) => {
  const str = num.toString();
  const reversedStr = str.split('').reverse().join('');
  
  return str === reversedStr;
};

// Testing the function with palindrome numbers
console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false

const isArmstrong = (num) => {
  const digits = num.toString().split('');
  const power = digits.length;
  
  const sum = digits.reduce((acc, digit) => {
    return acc + Math.pow(parseInt(digit), power);
  }, 0);

  return sum === num;
};


// Testing the function are Armstrong numbers
console.log(isArmstrong(153)); // true (1^3 + 5^3 + 3^3 = 153)
console.log(isArmstrong(9474)); // true (9^4 + 4^4 + 7^4 + 4^4 = 9474)
console.log(isArmstrong(123));  // false


//Leap Year Checker
const year = new Date().getFullYear();
const isLeapYear = (year) => {
  // Check the conditions using the modulo operator (%)
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return `${year} is a leap year.`;
  } else {
    return `${year} is not a leap year.`;
  }
};

// Testing the function
console.log(isLeapYear(2024)); // Leap year (divisible by 4)
console.log(year); // This will show you the current year is 2026
console.log(isLeapYear(2026)); // Not a leap year
console.log(isLeapYear(1900)); // Not a leap year (divisible by 100 but not 400)
console.log(isLeapYear(2000)); // Leap year (divisible by 400)


//Fibonacci Series
const generateFibonacci = (n) => {
  const series = [0, 1];

  for (let i = 2; i < n; i++) {
    // Add the previous two numbers together
    const nextNumber = series[i - 1] + series[i - 2];
    series.push(nextNumber);
  }

  return series;
};

console.log(generateFibonacci(10)); 
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


// Binary to Decimal Converter
const binaryToDecimalManual = (binaryStr) => {
  let decimal = 0;
  // Reverse the string to process from right to left (2^0, 2^1, etc.)
  const reversedBinary = binaryStr.split('').reverse();

  reversedBinary.forEach((digit, index) => {
    if (digit === '1') {
      decimal += Math.pow(2, index);
    }
  });

  return decimal;
};

console.log(binaryToDecimalManual("1101")); // 13
