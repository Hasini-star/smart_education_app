import { useState } from 'react';
import './Courses.css';
import FloatingChat from './FloatingChat';

function Courses({ userEmail, onLogout, onBack }) {
  const courses = [
    { id: 1, name: 'React', icon: '⚛️', description: 'Build modern web apps with React', level: 'Intermediate', duration: '8 weeks' },
    { id: 2, name: 'Java', icon: '☕', description: 'Master Java programming fundamentals', level: 'Beginner', duration: '10 weeks' },
    { id: 3, name: 'Python', icon: '🐍', description: 'Learn Python from basics to advanced', level: 'Beginner', duration: '12 weeks' },
    { id: 4, name: 'JavaScript', icon: '📜', description: 'Master JavaScript for web development', level: 'Beginner', duration: '10 weeks' },
    { id: 5, name: 'TypeScript', icon: '📘', description: 'Write safer JavaScript with TypeScript', level: 'Advanced', duration: '6 weeks' },
    { id: 6, name: 'Node.js', icon: '🚀', description: 'Build backend applications with Node.js', level: 'Intermediate', duration: '8 weeks' },
    { id: 7, name: 'CSS & Design', icon: '🎨', description: 'Create beautiful user interfaces', level: 'Beginner', duration: '6 weeks' },
    { id: 8, name: 'SQL & Databases', icon: '🗄️', description: 'Master database design and queries', level: 'Intermediate', duration: '8 weeks' },
    { id: 9, name: 'Git & GitHub', icon: '🔀', description: 'Version control and collaboration', level: 'Beginner', duration: '4 weeks' },
    { id: 10, name: 'Web Development', icon: '🌐', description: 'Full-stack web development masterclass', level: 'Advanced', duration: '14 weeks' },
  ];

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEnroll = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
  };

  return (
    <div className="courses-page-container">
      <FloatingChat />

      <header className="courses-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={onBack} className="back-button">← Back</button>
            <h1>Explore Courses</h1>
          </div>
          <div className="user-info">
            <span className="user-email">Welcome, {userEmail}</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="courses-main-content">
        <div className="courses-intro">
          <h2>Choose Your Learning Path</h2>
          <p>Select from our comprehensive collection of courses designed for all skill levels</p>
          
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="🔍 Search courses by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="no-results">
            <p>No courses found matching "{searchQuery}"</p>
            <p className="no-results-hint">Try searching with different keywords</p>
          </div>
        ) : (
          <div className="courses-grid">
            {filteredCourses.map((course) => (
            <div key={course.id} className="course-card-large">
              <div className="course-header">
                <div className="course-icon-large">{course.icon}</div>
                <span className="course-level">{course.level}</span>
              </div>
              <h3 className="course-name">{course.name}</h3>
              <p className="course-description">{course.description}</p>
              <div className="course-meta">
                <span className="course-duration">⏱️ {course.duration}</span>
              </div>
              <button 
                className="enroll-button-large"
                onClick={() => handleEnroll(course)}
              >
                Enroll Now
              </button>
            </div>
            ))}
          </div>
        )}
      </main>

      {selectedCourse && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>✕</button>
            <div className="modal-icon">{selectedCourse.icon}</div>
            <h2>{selectedCourse.name}</h2>
            <p className="modal-description">{selectedCourse.description}</p>
            <div className="modal-details">
              <div className="detail">
                <span className="detail-label">Level:</span>
                <span className="detail-value">{selectedCourse.level}</span>
              </div>
              <div className="detail">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">{selectedCourse.duration}</span>
              </div>
            </div>
            <button className="modal-button">Start Learning</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Courses;
