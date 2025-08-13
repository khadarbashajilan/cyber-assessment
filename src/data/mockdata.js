export const mockData = {
  user: {
    id: "STU001",
    name: "Alex Johnson",
    email: "alex.johnson@university.edu",
    avatar: "/api/placeholder/40/40",
    semester: "Fall 2024",
    year: "Senior"
  },
  courses: [
    {
      id: "CS301",
      name: "Advanced Database Systems",
      creditUnits: 3,
      grade: "A",
      gradePoints: 4.0,
      semester: "Fall 2024"
    },
    {
      id: "CS302",
      name: "Machine Learning",
      creditUnits: 4,
      grade: "A-",
      gradePoints: 3.7,
      semester: "Fall 2024"
    },
    {
      id: "CS303",
      name: "Software Engineering",
      creditUnits: 3,
      grade: "B+",
      gradePoints: 3.3,
      semester: "Fall 2024"
    },
    {
      id: "CS201",
      name: "Data Structures",
      creditUnits: 3,
      grade: "A",
      gradePoints: 4.0,
      semester: "Spring 2024"
    },
    {
      id: "CS202",
      name: "Algorithms",
      creditUnits: 3,
      grade: "B+",
      gradePoints: 3.3,
      semester: "Spring 2024"
    }
  ],
  assignments: [
    {
      id: "A001",
      courseId: "CS301",
      courseName: "Advanced Database Systems",
      title: "Database Design Project",
      dueDate: "2024-12-15",
      status: "ongoing",
      submittedDate: null,
      grade: null
    },
    {
      id: "A002",
      courseId: "CS302",
      courseName: "Machine Learning",
      title: "Neural Network Implementation",
      dueDate: "2024-12-20",
      status: "ongoing",
      submittedDate: null,
      grade: null
    },
    {
      id: "A003",
      courseId: "CS303",
      courseName: "Software Engineering",
      title: "Agile Project Planning",
      dueDate: "2024-11-30",
      status: "completed",
      submittedDate: "2024-11-28",
      grade: "A-"
    },
    {
      id: "A004",
      courseId: "CS301",
      courseName: "Advanced Database Systems",
      title: "Query Optimization",
      dueDate: "2024-11-15",
      status: "completed",
      submittedDate: "2024-11-14",
      grade: "A"
    }
  ],
  dashboardStats: {
    totalCourses: 5,
    completedCredits: 19,
    currentGPA: 3.66,
    pendingAssignments: 2
  }
};