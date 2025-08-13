const calculateCGPA = (courses) => {
  const totalGradePoints = courses.reduce((sum, course) => sum + (course.gradePoints * course.creditUnits), 0);
  const totalCredits = courses.reduce((sum, course) => sum + course.creditUnits, 0);
  return totalCredits > 0 ? (totalGradePoints / totalCredits).toFixed(2) : 0;
};

const getGradeColor = (grade) => {
  const gradeColors = {
    'A': 'text-green-600',
    'A-': 'text-green-500',
    'B+': 'text-blue-600',
    'B': 'text-blue-500',
    'B-': 'text-yellow-600',
    'C+': 'text-yellow-500',
    'C': 'text-orange-500',
    'D': 'text-red-500',
    'F': 'text-red-600'
  };
  return gradeColors[grade] || 'text-gray-600';
};
export { calculateCGPA, getGradeColor };