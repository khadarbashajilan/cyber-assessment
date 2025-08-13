import { Bell, Lock, LogOut, Settings, User, ChevronDown } from "lucide-react";
import React, { useState, Fragment } from "react";

const Header = ({ currentRoute, user }) => {
  // State to manage the visibility of the user dropdown menu
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  // Function to generate breadcrumb navigation based on the current route
  const getBreadcrumb = () => {
    // Mapping of routes to their corresponding breadcrumb paths
    const breadcrumbs = {
      dashboard: ["Home"],
      courses: ["Home", "Courses"],
      cgpa: ["Home", "CGPA Calculator"],
      assignments: ["Home", "Assignments"],
      profile: ["Home", "Profile"],
    };
    // Return the breadcrumb path for the current route, default to ['Home'] if not found
    return breadcrumbs[currentRoute] || ["Home"];
  };
  // Get the breadcrumb path for the current route
  const breadcrumb = getBreadcrumb();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4 ml-64">
      <div className="flex justify-between items-center">
        {/* Breadcrumb navigation component */}
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          {breadcrumb.map((crumb, index) => (
            <React.Fragment key={index}>
              {/* Add separator between breadcrumb items */}
              {index > 0 && <span className="mx-1 text-gray-400">/</span>}
              {/* Display breadcrumb item with appropriate styling */}
              <span
                className={
                  index === breadcrumb.length - 1
                    ? "text-gray-900 font-medium"
                    : "text-gray-500"
                }
              >
                {crumb}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Right side of the header with notification and user dropdown */}
        <div className="flex items-center space-x-4">
          {/* Notification button */}
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          {/* User dropdown container */}
          <div className="relative">
            {/* User dropdown button */}
            <button
              onClick={() => setShowUserDropdown(!showUserDropdown)}
              className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100"
            >
              {/* User avatar */}
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
              {/* Dropdown indicator */}
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </button>

            {/* User dropdown menu */}
            {showUserDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                {/* User information section */}
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-900">
                    {user.name}
                  </p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
                {/* Dropdown menu items */}
                <div className="py-1">
                  {/* Edit personal data option */}
                  <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Personal Data
                  </button>
                  {/* Change password option */}
                  <button className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    <Lock className="w-4 h-4 mr-2" />
                    Change Password
                  </button>
                  {/* Divider */}
                  <hr className="my-1" />
                  {/* Logout option */}
                  <button className="w-full flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
