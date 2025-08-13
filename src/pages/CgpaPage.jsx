import { calculateCGPA } from "../utils/util";

/**
 * CgpaPage component displays the CGPA, total credits, and semester breakdown for a list of courses.

 */
const CgpaPage = ({ courses }) => {
  // Calculate the overall CGPA for all courses
  const currentCGPA = calculateCGPA(courses);

  // Calculate the total credit units for all courses
  const totalCredits = courses.reduce((sum, course) => sum + course.creditUnits, 0);
  
  return (
    <div className="space-y-6">
      {/* Main container for the CGPA page */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        {/* Header for the CGPA calculator section */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">CGPA Calculator</h2>
        
        {/* Grid layout for displaying key metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Current CGPA display card */}
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Current CGPA</p>
            <p className="text-3xl font-bold text-blue-600">{currentCGPA}</p>
          </div>

          {/* Total credits display card */}
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Credits</p>
            <p className="text-3xl font-bold text-green-600">{totalCredits}</p>
          </div>

          {/* Courses completed display card */}
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Courses Completed</p>
            <p className="text-3xl font-bold text-purple-600">{courses.length}</p>
          </div>
        </div>
        
        {/* Semester breakdown section */}
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Semester Breakdown</h3>

          {/* Map through specific semesters to display their details */}
          {['Spring 2024', 'Fall 2024'].map((semester) => {
            // Filter courses for the current semester
            const semesterCourses = courses.filter(course => course.semester === semester);

            // Calculate GPA for the current semester
            const semesterGPA = calculateCGPA(semesterCourses);

            // Calculate total credits for the current semester
            const semesterCredits = semesterCourses.reduce((sum, course) => sum + course.creditUnits, 0);
            
            return (
              <div key={semester} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                {/* Semester name */}
                <span className="font-medium text-gray-900">{semester}</span>

                {/* Semester details (GPA and credits) */}
                <div className="flex space-x-6 text-sm">
                  <span className="text-gray-600">GPA: <span className="font-medium">{semesterGPA}</span></span>
                  <span className="text-gray-600">Credits: <span className="font-medium">{semesterCredits}</span></span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CgpaPage;