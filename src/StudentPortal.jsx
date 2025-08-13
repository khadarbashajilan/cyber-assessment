import  { useState } from 'react'
import { mockData } from '../mockdata';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboardwidgets from './components/Dashboardwidgets';
import { Assignmentstable } from './components/Assignmentstable';

const StudentPortal = () => {
    const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  
  const getBreadcrumb = () => {
    const breadcrumbs = {
      dashboard: ['Home'],
      courses: ['Home', 'Courses'],
      cgpa: ['Home', 'CGPA Calculator'],
      assignments: ['Home', 'Assignments']
    };
    return breadcrumbs[activeMenuItem] || ['Home'];
  };
  const renderMainContent = () => {
    switch (activeMenuItem) {
      case 'dashboard':
        return <Dashboardwidgets stats={mockData.dashboardStats} user={mockData.user} />;
      case 'courses':
        return <CoursesTable courses={mockData.courses} />;
      case 'cgpa':
        return <CGPACalculator courses={mockData.courses} />;
      case 'assignments':
        return <Assignmentstable assignments={mockData.assignments} />;
      default:
        return <Dashboardwidgets stats={mockData.dashboardStats} user={mockData.user} />;
    }
  };
  
  return (
   <div className="min-h-screen bg-gray-50">
      <Sidebar activeMenuItem={activeMenuItem} setActiveMenuItem={setActiveMenuItem} />
      <Header breadcrumb={getBreadcrumb()} user={mockData.user} />
      
      <main className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          {renderMainContent()}
        </div>
      </main>
    </div>
  )
}

export default StudentPortal
