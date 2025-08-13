import { getGradeColor } from "../utils/util";

/**
 * CoursesPage component displays a table of courses with their details.

 */
const CoursesPage = ({ courses }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header section with title */}
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">My Courses</h2>
      </div>
      
      {/* Table container with horizontal scroll */}
      <div className="overflow-x-auto">
        <table className="w-full">
          {/* Table header */}
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Credit Units
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Grade Points
              </th>
            </tr>
          </thead>

          {/* Table body with course data */}
          <tbody className="bg-white divide-y divide-gray-200">
            {courses.map((course) => (
              <tr key={course.id} className="hover:bg-gray-50">
                {/* Course name cell */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {course.name}
                </td>

                {/* Course ID cell */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {course.id}
                </td>


















                {/* Credit units cell */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {course.creditUnits}
                </td>

                {/* Grade cell with color based on grade value */}
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <span className={`font-medium ${getGradeColor(course.grade)}`}>
                    {course.grade}
                  </span>
                </td>

                {/* Grade points cell */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                  {course.gradePoints.toFixed(1)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CoursesPage;

