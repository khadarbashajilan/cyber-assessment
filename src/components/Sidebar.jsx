import { BookOpen, Calculator, FileText, Home } from "lucide-react";

// Sidebar component that renders a navigation menu
const Sidebar = ({ currentRoute, onRouteChange }) => {
  // Menu items configuration with id, label, icon, and path
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/dashboard' },
    { id: 'courses', label: 'Courses', icon: BookOpen, path: '/courses' },
    { id: 'cgpa', label: 'CGPA Calculator', icon: Calculator, path: '/cgpa' },
    { id: 'assignments', label: 'Assignments', icon: FileText, path: '/assignments' }
  ];

  // Handles navigation when a menu item is clicked
  const handleNavigation = (route) => {
    onRouteChange(route.id);
    // In real router: navigate(route.path)
  };

  return (
    // Sidebar container with fixed positioning
    <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 z-10">
      {/* Header section with portal title */}
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold text-blue-400">Student Portal</h1>
      </div>
      
      {/* Navigation menu */}
      <nav className="mt-6">
        {menuItems.map((item) => {
          // Extract icon component from item
          const Icon = item.icon;
          // Check if current route matches this item's id
          const isActive = currentRoute === item.id;
          
          return (
            // Navigation button for each menu item
            // In real router, this would be: <NavLink to={item.path}>
            <button
              key={item.id}
              onClick={() => handleNavigation(item)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-slate-800 transition-colors ${
                isActive ? 'bg-slate-800 border-r-2 border-blue-400' : ''
              }`}
            >
              {/* Render the icon */}
              <Icon className="w-5 h-5 mr-3" />
              {/* Render the label */}
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
};
export default Sidebar;