import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Layout = ({ currentRoute, onRouteChange, user, children }) => {
  // Main layout component that wraps the entire application
  // Receives currentRoute, onRouteChange, user, and children as props

  return (
    // Container div with minimum height of screen and gray background
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar component for navigation */}
      {/* Passes currentRoute and onRouteChange props to Sidebar */}
      <Sidebar currentRoute={currentRoute} onRouteChange={onRouteChange} />

      {/* Header component for top navigation */}
      {/* Passes currentRoute, user, and onRouteChange props to Header */}
      <Header currentRoute={currentRoute} user={user} onRouteChange={onRouteChange} />
      
      {/* Main content area with left margin to accommodate sidebar */}
      {/* Padding added for spacing */}
      <main className="ml-64 p-6">
        {/* Container for content with max width and centered alignment */}
        <div className="max-w-7xl mx-auto">
          {/* Render children components passed to Layout */}
          {children}
        </div>
      </main>
    </div>
  );
};
export default Layout;