import { BookOpen, Calculator, FileText, Home } from 'lucide-react';

const Sidebar = ({ activeMenuItem, setActiveMenuItem }) => {
    const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'courses', label: 'Courses', icon: BookOpen },
    { id: 'cgpa', label: 'CGPA Calculator', icon: Calculator },
    { id: 'assignments', label: 'Assignments', icon: FileText }
  ];

  return (
     <div className="w-64 bg-slate-900 text-white h-screen fixed left-0 top-0 z-10">
      <div className="p-6 border-b border-slate-700">
        <h1 className="text-xl font-bold text-blue-400">Student Portal</h1>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveMenuItem(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-slate-800 transition-colors ${
                activeMenuItem === item.id ? 'bg-slate-800 border-r-2 border-blue-400' : ''
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  )
}

export default Sidebar
