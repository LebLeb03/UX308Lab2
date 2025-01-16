// convert a *number grade* to a *letter grade*

var number_grade = 95;

var letter_grade;

if (number_grade < 50) {
  letter_grade = 'F';
} else if (number_grade < 60) {
  letter_grade = 'D';
} else if (number_grade < 70) {
  letter_grade = 'C';
} else if (number_grade < 80) {
  letter_grade = 'B';
} else if (number_grade < 90) {
  letter_grade = 'A';
} else if (number_grade < 100) {
  letter_grade = 'A+';
}

console.log(`${number_grade} is a ${letter_grade}`);
