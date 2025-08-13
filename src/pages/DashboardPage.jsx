import { BookOpen, Calculator, FileText } from "lucide-react";

// DashboardPage component that displays user statistics and widgets
const DashboardPage = ({ stats, user }) => {
  // Array of widget configurations for the dashboard
  const widgets = [
    {
      title: 'Total Courses',
      value: stats.totalCourses,
      icon: BookOpen,
      color: 'bg-blue-500'
    },
    {
      title: 'Completed Credits',
      value: stats.completedCredits,
      icon: Calculator,
      color: 'bg-green-500'
    },
    {
      title: 'Current GPA',
      value: stats.currentGPA,
      icon: Calculator,
      color: 'bg-purple-500'
    },
    {
      title: 'Pending Assignments',
      value: stats.pendingAssignments,
      icon: FileText,
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome banner with user information */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">Welcome back, {user.name}!</h2>
        <p className="text-blue-100">Current Semester: {user.semester}</p>
      </div>
      
      {/* Grid of statistic widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {widgets.map((widget, index) => {
          const Icon = widget.icon;
          return (
            <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  {/* Widget title and value */}
                  <p className="text-sm text-gray-600 mb-1">{widget.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{widget.value}</p>
                </div>
                {/* Icon container with dynamic background color */}
                <div className={`w-12 h-12 rounded-lg ${widget.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default DashboardPage;