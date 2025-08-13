import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboardwidgets from './pages/DashboardPage';
import Courses from './components/Coursestable';
import CGPACalculator from './components/Cgpacalculator';
import Assignments from './components/Assignmentstable';

const StudentPortal = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [breadcrumb, setBreadcrumb] = useState(['Dashboard']);

  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    semester: 'Fall 2023'
  };

  const stats = {
    totalCourses: 12,
    completedCredits: 45,
    currentGPA: 3.75,
    pendingAssignments: 5
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setBreadcrumb([menuItem.charAt(0).toUpperCase() + menuItem.slice(1)]);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={handleMenuItemClick} />

      <div className="flex-1 md:ml-64">
        <Header breadcrumb={breadcrumb} user={user} />

        <main className="p-6">
          {activeMenuItem === 'dashboard' && <Dashboardwidgets stats={stats} user={user} />}
          {activeMenuItem === 'courses' && <Courses />}
          {activeMenuItem === 'cgpa' && <CGPACalculator />}
          {activeMenuItem === 'assignments' && <Assignments />}
        </main>
      </div>
    </div>
  );
};

export default StudentPortal;