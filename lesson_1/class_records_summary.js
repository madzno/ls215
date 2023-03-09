/*
Algorithm generateclassRecord Summary
- takes an object scores as a parameter
- declare a variable studentKeys and initialize it to calling Object.keys and passing
scores as an argument
- declare a variable studentGrades and initilaize this to an empty array
- iterate through studentKeys, for each student in studentKeys
  - pass scores[student][scores][exams] and scores[student][scores][exercises] to generateStudentGrade
  - store the return value of this function call to studentGrade and append this to the studentGrades Array
- declare a variable examScores


Algorithm generateStudentGrade
- define a function generateStudentGrade with two parameters, examScores and exerciseScores
- pass examScores to a function generateStudentExamScore and store the return value in averageExamScoreWeighted

  Algorithm generateStudentExamScore
    - define a function generateStudentExamScore with one parameter scores
    - declare a constant NUMBER_OF_EXAMS
    - declare a constant EXAM_WEIGHT and initialize it to .65
    - sum all of the elements in scores using reduce and then divide by NUMBER_OF_EXAMS and initialize this
    to averageScore
  - return averageScore * .65


- pass exerciseScores to a function generateStudentExerciseScore and store the return value in totalExerciseScoreWeighted

  Algorithm generateStudentExerciseScore
    - define a function generateStudentExerciseScore with a parameter scores
    - declare a constant EXERCISE_WEIGHT and initialize it to .35
    - sum all of the elements in exerciseScores using reduce and then multiply by .35, return this number

- Add averageExamScoreWeighted and totalExerciseScoreWeighted, round using Math.round, initialize this to
studentNumberGrade
- declare a variable studentLetterGrade and initialize this to the return value of passing studentNumberGrade to
generateLetterGrade

  Algorithm generateLetterGrade
  - define a function generateLetterGrade with one parameter grade
  - start an if..else statement
  - if grade is less than or equal to 100 and greter than or equal to 93, return 'A'
  - if grade is less than or equal to 92 and greater than or equal to 85, return 'B'
  - if grade is less than or equal to 84 and greater than or equal to 77, return 'C'
  - if grade is less than or equal to 76 and greater than or equal to 69, return 'D'
  - if grade is less than or equal to 68 and greater than or equal to 60, return 'E'
  - if grade is less than or equal to 59 and greater than or equal to 0, return 'F'

- return from generateStudentgrade the string studentNumberGrade + ' ' + `($(studentLetterGrade))`





*/


let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

function generateAvgExamScore(scoresList) {
  const NUMBER_OF_EXAMS = 4;

  let sum = scoresList.reduce((total, currentNum) => total + currentNum);

  return sum / 4;
}

function generateLetterGrade(numberGrade) {
  if (numberGrade <= 100 && numberGrade >= 93) {
    return 'A';
  } else if (numberGrade <= 92 && numberGrade >= 85) {
    return 'B';
  } else if (numberGrade <= 84 && numberGrade >= 77) {
    return 'C';
  } else if (numberGrade <= 76 && numberGrade >= 69) {
    return 'D';
  } else if (numberGrade <= 68 && numberGrade >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}

function generateStudentGrade(examScores, exerciseScores) {
  const EXAM_WEIGHT = .65;
  const EXERCISE_WEIGHT = .35;

  let averageExamScore = generateAvgExamScore(examScores);
  let totalExerciseScore = exerciseScores.reduce((total, score) => total + score);

  let studentNumberGrade = Math.round((averageExamScore * EXAM_WEIGHT) +
    (totalExerciseScore * EXERCISE_WEIGHT))

  let studentLetterGrade = generateLetterGrade(studentNumberGrade);

  return studentNumberGrade + `(${studentLetterGrade})`;

}

function generateClassRecordSummary(scoresObj) {
  let studentKeys = Object.keys(scoresObj);
  let studentGradesArray = [];

  studentKeys.forEach(student => {
    let examScores = scoresObj[student]['scores']['exams'];
    let exerciseScores = scoresObj[student]['scores']['exercises'];
    let studentGrade = generateStudentGrade(examScores, exerciseScores);
    studentGradesArray.push(studentGrade);
  });

  return {
    studentGrades: studentGradesArray,
  };
}

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: ['87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)'],
//     exams: [
//       { average: 75.6, minimum: 50, maximum: 100 },
//       { average: 86.4, minimum: 70, maximum: 100 },
//       { average: 87.6, minimum: 60, maximum: 100 },
//       { average: 91.8, minimum: 80, maximum: 100 },
//     ],
// }
