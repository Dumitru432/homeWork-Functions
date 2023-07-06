// 1. Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second,
//                                                        1 if it is vice versa, and 0 if they are equal.

function compareNumbers(num1, num2) {
  if (num1 < num2) {
    return -1;
  } else if (num1 > num2) {
    return 1;
  } else {
    return 0;
  }
}

console.log(compareNumbers(2, 4))
console.log(compareNumbers(6, 4))
console.log(compareNumbers(4, 4))  

// 2. Write a function that counts the factorial of a given number.

function factorialNumber(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialNumber(num - 1);
  }
}

console.log(factorialNumber(7))

// 3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.

function makeNumber(digit1, digit2, digit3) {
  let str1 = digit1.toString();
  let str2 = digit2.toString();
  let str3 = digit3.toString();

  let result = str1 + str2 + str3;
  return result;
}
console.log(makeNumber(1, 2, 3))
console.log(makeNumber(4, 5, 5))

// 4. Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square.

function areaRectangle(width, height) {
  if (height === undefined) {
    return width * width;
  } else {
    return width * height;
  }
}

console.log(areaRectangle(2, 4))
console.log(areaRectangle(9))

// 5. Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.

function perfectNumber(number) {
  if (number <= 0) {
    return false;
  }
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i === 0) {
      sum = sum + i;
    }
  }
  return sum === number;
}

console.log(perfectNumber(6))
console.log(perfectNumber(8))
console.log(perfectNumber(28)) 

// 6. Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect.

function checkTheNumbers(min, max) {
  const perfectNumbers = [];

  for (let number = min; number <= max; number++) {
    if (perfectNumber(number)) {
      perfectNumbers.push(number);
    }
  }

  return perfectNumbers;
}

const min = 1;
const max = 100;
const perfectNums = checkTheNumbers(min, max);
console.log(perfectNums)

// 7. Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.

function setTime(hours3, minutes3, seconds3 = 0) {
  // am convertit numerele de la user in string uri
  const convertHoursToString = String(hours3).padStart(2, "0");
  const convertMinutesToString = String(minutes3).padStart(2, "0");
  const convertSecondsToString = String(seconds3).padStart(2, "0");

  // aplicam metoda padStart() pentru a afisa cate 2 cifre pentru ora minuta si secunda

  // afisacem ce sa ne returneze functia pe care am creato
  return `${convertHoursToString}: ${convertMinutesToString}: ${convertSecondsToString}`;
}
console.log(setTime(1, 2, 12));

const hours3 = 14;
const minutes3 = 7;
const seconds3 = 48;

const convertedTime = setTime(hours3, minutes3);
console.log(convertedTime); 

// 8. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.

function timeInSeconds(hours, minutes, seconds) {
  const result = (hours * 3600)+ (minutes * 60) + seconds;
  return result;
}

const hours = 1; 
const minutes = 25; 
const seconds = 43; 

const total = timeInSeconds(hours, minutes, seconds)
console.log(total)

// 9. Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.

function calculateHoursFromSeconds (seconds) {
 let hours = Math.floor(seconds / 3600); 
 let minutes = Math.floor(hours / 60) 
 let remainingSeconds = seconds % 60; 

 let transformHoursToString = String(hours).padStart(2, '0')
 let transformMinutesToString = String(minutes).padStart(2, '0')
 let transformRemainingSecondsToString = String(remainingSeconds).padStart(2, '0')

 return `${transformHoursToString}: ${transformMinutesToString}: ${transformRemainingSecondsToString}`
}
console.log(calculateHoursFromSeconds(3600))
console.log(calculateHoursFromSeconds(45000))
console.log(calculateHoursFromSeconds(30))

// 10 .Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

function timeDifference (hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    const time1 = timeInSeconds(hours1, minutes1, seconds1)
    const time2 = timeInSeconds(hours2, minutes2, seconds2)

    const differenceTime = Math.abs(time1 - time2)
    return calculateHoursFromSeconds(differenceTime)
}

console.log(timeDifference(1, 23, 45, 2, 10, 30)); 
console.log(timeDifference(0, 4, 0, 0, 0, 25));