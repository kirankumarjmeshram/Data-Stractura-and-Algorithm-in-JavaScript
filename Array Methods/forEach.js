const students = [
    { name: 'Quincy', grade: 96 },
    { name: 'Jason', grade: 84 },
    { name: 'Alexis', grade: 100 },
    { name: 'Sam', grade: 65 },
    { name: 'Katie', grade: 90 }
  ];

  let totalGrades =0;
  students.forEach(el=>totalGrades+=el.grade)

  console.log(totalGrades) //435