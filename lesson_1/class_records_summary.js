"use strict";

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

  return sum / NUMBER_OF_EXAMS;
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
  let totalExerciseScore = exerciseScores.reduce((total, score) => {
    return total + score;
  });

  let studentNumberGrade = Math.round((averageExamScore * EXAM_WEIGHT) +
    (totalExerciseScore * EXERCISE_WEIGHT));

  let studentLetterGrade = generateLetterGrade(studentNumberGrade);

  return studentNumberGrade + `(${studentLetterGrade})`;

}

function generateStudentGradesRecord(scoresObj, studentKeys) {
  let studentGradesArray = [];

  studentKeys.forEach(student => {
    let examScores = scoresObj[student]['scores']['exams'];
    let exerciseScores = scoresObj[student]['scores']['exercises'];
    let studentGrade = generateStudentGrade(examScores, exerciseScores);
    studentGradesArray.push(studentGrade);
  });

  return studentGradesArray;
}

function generateExamStats(scoresObj, studentKeys) {
  const NUMBER_OF_STUDENTS = 5;
  let examAllGrades = [[], [], [], []];

  studentKeys.forEach(student => {
    let examScoresList = scoresObj[student]['scores']['exams'];
    examScoresList.forEach((_, index, array) => {
      examAllGrades[index].push(array[index]);
    });
  });

  let examStats = [];

  examAllGrades.forEach(examsSubArray => {
    let examAvg = (examsSubArray.reduce((total, exam) => total + exam)) /
      NUMBER_OF_STUDENTS;
    let examMin = Math.min(...examsSubArray);
    let examMax = Math.max(...examsSubArray);
    examStats.push({ average: examAvg, minimum: examMin, maximum: examMax });
  });

  return examStats;
}

function generateClassRecordSummary(scoresObj) {
  let keys = Object.keys(scoresObj);

  return {
    studentGrades: generateStudentGradesRecord(scoresObj, keys),
    exams: generateExamStats(scoresObj, keys),
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
