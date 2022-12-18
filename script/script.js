"use strict"

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

let studentsPairs = [];
const GetStudentsPairs = (students) => {
   let sortStudents = students.slice(0);
   sortStudents.splice(1, 2, "Олена", "Ігор");
   for (let i = 0; i < sortStudents.length / 2; i++) {
      studentsPairs.push([sortStudents[i * 2], sortStudents[i * 2 + 1]]);
   }
   return studentsPairs;
}

let studentsPairsTheme = [];
const GetStudentsPairsTheme = (studentsPairs, themes) => {
   for (let i = 0; i < students.length / 2; i++) {
      studentsPairsTheme.push([studentsPairs[i][0] + ' i ' + studentsPairs[i][1], themes[i]]);
   }
   return studentsPairsTheme;
}

let studentsPairsThemeMarks = [];
const GetStudentsPairsThemeMarks = (studentsPairs) => {
   for (let i = 0; i < students.length; i++) {
      studentsPairsThemeMarks.push([students[i], marks[i]]);
   }
   return studentsPairsThemeMarks;
}
const getRandom = () => {
   return Math.round(Math.random() * (5 - 1) + 1);
}
let studentsPairsThemeRandomMarks = [];
const GetStudentsPairsThemeRandomMarks = (studentsPairs) => {
   for (let i = 0; i < students.length / 2; i++) {
      studentsPairsThemeRandomMarks.push([studentsPairs[i][0] + ' i ' + studentsPairs[i][1], themes[i], getRandom()]);
   }
   return studentsPairsThemeRandomMarks;
}

console.log(GetStudentsPairs(students));
console.log(GetStudentsPairsTheme(studentsPairs, themes));
console.log(GetStudentsPairsThemeMarks(studentsPairs));
console.log(GetStudentsPairsThemeRandomMarks(studentsPairs));
