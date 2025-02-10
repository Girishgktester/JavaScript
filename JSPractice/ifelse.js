// Example 1: Basic if statement
function isPositive(number) {
    if (number > 0) {
      console.log("The number is positive");
    }
  }
  
  isPositive(5); // Output: The number is positive
  isPositive(-3); // No output
  
  // Explanation: The `isPositive` function checks if a number is greater than 0. If it is, it prints "The number is positive" to the console.  If the condition is false, nothing happens [1][8].
  
  // Example 2: if...else statement
  function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log("The number is even");
    } else {
      console.log("The number is odd");
    }
  }
  
  checkEvenOdd(4); // Output: The number is even
  checkEvenOdd(7); // Output: The number is odd
  
  // Explanation: The `checkEvenOdd` function checks if a number is even or odd. If the number is divisible by 2 (remainder is 0), it prints "The number is even". Otherwise, it prints "The number is odd" [1][2].
  
  // Example 3: if...else if...else statement
  function checkGrade(score) {
    if (score >= 90) {
      console.log("Grade A");
    } else if (score >= 80) {
      console.log("Grade B");
    } else if (score >= 70) {
      console.log("Grade C");
    } else if (score >= 60) {
      console.log("Grade D");
    } else {
      console.log("Grade F");
    }
  }
  
  checkGrade(95); // Output: Grade A
  checkGrade(82); // Output: Grade B
  checkGrade(75); // Output: Grade C
  checkGrade(61); // Output: Grade D
  checkGrade(40); // Output: Grade F
  
  // Explanation: The `checkGrade` function checks the value of score and output the respective grade. If score is greater than or equal to 90 , it prints "Grade A". else if score is greater than or equal to 80, it prints "Grade B". Like wise, it checks for other conditions and prints the grade [1][2]. If none of the conditions are true, it prints "Grade F" [1].
  
  // Example 4: Nested if...else statement
  function checkEligibility(age, hasLicense) {
    if (age >= 16) {
      if (hasLicense) {
        console.log("You are eligible to drive.");
      } else {
        console.log("You are old enough to drive, but you need a license.");
      }
    } else {
      console.log("You are not eligible to drive.");
    }
  }
  
  checkEligibility(18, true);  // Output: You are eligible to drive.
  checkEligibility(18, false); // Output: You are old enough to drive, but you need a license.
  checkEligibility(15, true);  // Output: You are not eligible to drive.
  checkEligibility(15, false); // Output: You are not eligible to drive.
  
  // Explanation: The `checkEligibility` function first checks if the age is greater than or equal to 16 [1]. If it is, it then checks if the person has a license. If both conditions are true, it prints "You are eligible to drive." If the age is sufficient but there is no license, it informs the user that a license is needed. If the age is less than 16, it prints "You are not eligible to drive." [1] This demonstrates a nested `if...else` statement, where one `if...else` statement is placed inside another [1].
  