import React from 'react'
import { calculateCGPA } from '../utils/util';

const Cgpacalculator = ({courses}) => {
     const currentCGPA = calculateCGPA(courses);
  const totalCredits = courses.reduce((sum, course) => sum + course.creditUnits, 0);
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">CGPA Calculator</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Current CGPA</p>
            <p className="text-3xl font-bold text-blue-600">{currentCGPA}</p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Total Credits</p>
            <p className="text-3xl font-bold text-green-600">{totalCredits}</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Courses Completed</p>
            <p className="text-3xl font-bold text-purple-600">{courses.length}</p>
          </div>
        </div>
        
        <div className="space-y-4">
          <h3 className="font-medium text-gray-900">Semester Breakdown</h3>
          {['Spring 2024', 'Fall 2024'].map((semester) => {
            const semesterCourses = courses.filter(course => course.semester === semester);
            const semesterGPA = calculateCGPA(semesterCourses);
            const semesterCredits = semesterCourses.reduce((sum, course) => sum + course.creditUnits, 0);
            
            return (
              <div key={semester} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">{semester}</span>
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
  )
}

export default Cgpacalculator
