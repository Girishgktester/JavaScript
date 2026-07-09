class IfElsePractice {
  checkPositive(number) {
    if (number > 0) {
      console.log(`${number} is positive`);
    } else {
      console.log(`${number} is not positive`);
    }
  }

  checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
  }

  checkGrade(score) {
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

  checkDrivingEligibility(age, hasLicense) {
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
}

const practice = new IfElsePractice();
practice.checkPositive(5); // Output: 5 is positive
practice.checkPositive(-2); // Output: -2 is not positive
practice.checkEvenOdd(4); // Output: 4 is even
practice.checkEvenOdd(7); // Output: 7 is odd
practice.checkGrade(88); // Output: Grade B
practice.checkGrade(55); // Output: Grade F
practice.checkDrivingEligibility(18, true); // Output: You are eligible to drive.
practice.checkDrivingEligibility(18, false); // Output: You are old enough to drive, but you need a license.
practice.checkDrivingEligibility(15, true); // Output: You are not eligible to drive.
