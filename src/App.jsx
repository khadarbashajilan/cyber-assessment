import { useState } from "react";
import { mockData } from "./data/mockdata";
import Layout from "./components/Layout/Layout";
import AssignmentsPage from "./pages/AssignmentsPage";
import CgpaPage from "./pages/CgpaPage";
import CoursesPage from "./pages/CoursesPage";
import DashboardPage from "./pages/DashboardPage";

const App = () => {
  const [currentRoute, setCurrentRoute] = useState('dashboard');

  // Route rendering function (equivalent to <Routes><Route> in real router)
  const renderCurrentPage = () => {
    switch (currentRoute) {
      case 'dashboard':
        return <DashboardPage stats={mockData.dashboardStats} user={mockData.user} />;
      case 'courses':
        return <CoursesPage courses={mockData.courses} />;
      case 'cgpa':
        return <CgpaPage courses={mockData.courses} />;
      case 'assignments':
        return <AssignmentsPage assignments={mockData.assignments} />;

      default:
        return <DashboardPage stats={mockData.dashboardStats} user={mockData.user} />;
    }
  };

  return (
    <Layout
      currentRoute={currentRoute} 
      onRouteChange={setCurrentRoute} 
      user={mockData.user}
    >
      {renderCurrentPage()}
    </Layout>
  );
};

export default App;