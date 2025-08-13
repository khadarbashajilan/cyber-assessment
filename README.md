# Student Portal Application

A comprehensive student portal application built with React and Vite, designed to provide students with a centralized platform for managing their academic activities.

## Features

* User authentication and profile management
* Course enrollment and tracking
* GPA calculation and academic progress monitoring
* Assignment submission and tracking
* Responsive design for mobile and desktop use

## Technologies Used

### Frontend
* React 19.1.1
* React Router DOM 7.8.0
* Vite
* Tailwind CSS

## Application Structure

```
assessment/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── components/
│   │   ├── Layout/
│   │   │   └── Layout.jsx
│   │   └── ...
│   ├── pages/
│   │   ├── AssignmentsPage.jsx
│   │   ├── CgpaPage.jsx
│   │   ├── CoursesPage.jsx
│   │   └── DashboardPage.jsx
│   └── data/
│       └── mockdata.js
├── package.json
└── README.md
```

## Data Flow

1. User navigates to the application
2. Application loads the main layout component
3. Based on the current route, the appropriate page component is rendered
4. Page components fetch and display relevant data from the mock data store
5. User interacts with the application through various UI components
6. Application processes user actions and updates the UI accordingly

## How It Works

The application follows a component-based architecture with React Router for navigation. The main App component manages the current route state and renders the appropriate page component based on the current route. Each page component is responsible for fetching and displaying its specific data from the mock data store.

The application uses Tailwind CSS for styling, providing a responsive design that works well on both mobile and desktop devices. The layout component provides a consistent header and sidebar across all pages, with the main content area changing based on the current route.

## Getting Started

### Prerequisites

* Node.js (version 18 or higher)
* npm or yarn

### Installation Steps

1. Clone the repository:
```bash
git clone https://github.com/khadarbashajilan/cyber-assessment.git
```

2. Navigate to the project directory:
```bash
cd cyber-assessment
```

3. Install dependencies:
```bash
npm install
```

### Environment Configuration

No environment variables are required for this application as it uses mock data.

### Development Commands

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Development Workflow

1. Clone the repository
2. Install dependencies
3. Create a new branch for your feature or bug fix
4. Make your changes and commit them with descriptive commit messages
5. Push your changes to your fork
6. Create a pull request with a clear description of your changes

## Closing

Thank you for your interest in the Student Portal Application! We hope this comprehensive guide helps you understand and set up the project. If you have any questions or need further assistance, please don't hesitate to reach out. Happy coding!