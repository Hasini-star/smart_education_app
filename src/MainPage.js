import './MainPage.css';
import FloatingChat from './FloatingChat';
import { useState } from 'react';

function MainPage({ userEmail, onLogout, onNavigateToCourses, onNavigateToProgress, onNavigateToCommunity, onNavigateToAchievements }) {
  const [profileOpen, setProfileOpen] = useState(false);
  
  const recommendedCourses = [
    { id: 1, name: 'React', icon: '⚛️', level: 'Intermediate', rating: 4.8 },
    { id: 4, name: 'JavaScript', icon: '📜', level: 'Beginner', rating: 4.9 },
    { id: 7, name: 'CSS & Design', icon: '🎨', level: 'Beginner', rating: 4.7 },
    { id: 6, name: 'Node.js', icon: '🚀', level: 'Intermediate', rating: 4.8 },
  ];

  const handleLogout = () => {
    setProfileOpen(false);
    onLogout();
  };

  return (
    <div className="main-page-container">
      <FloatingChat />

      <header className="main-header">
        <div className="header-content">
          <h1>Smart Education App</h1>
          <div className="user-info">
            <div className="profile-container">
              <button 
                className="profile-button" 
                title="Profile"
                onClick={() => setProfileOpen(!profileOpen)}
              >
                👤
              </button>
              {profileOpen && (
                <div className="profile-dropdown">
                  <div className="profile-email">{userEmail}</div>
                  <button onClick={handleLogout} className="profile-logout">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="welcome-section">
          <h2>Welcome to Smart Education App</h2>
          <p>Explore our learning resources and start your educational journey today.</p>
        </div>

        <div className="features-grid">
          <div 
            className="feature-card courses-feature-card" 
            onClick={onNavigateToCourses}
            style={{ cursor: 'pointer' }}
          >
            <div className="feature-icon">📚</div>
            <h3>Courses</h3>
            <p>Browse a wide variety of courses tailored to your learning goals.</p>
          </div>

          <div 
            className="feature-card"
            onClick={onNavigateToCommunity}
            style={{ cursor: 'pointer' }}
          >
            <div className="feature-icon">👥</div>
            <h3>Community</h3>
            <p>Connect with other learners and share your progress.</p>
          </div>

          <div 
            className="feature-card courses-feature-card" 
            onClick={onNavigateToProgress}
            style={{ cursor: 'pointer' }}
          >
            <div className="feature-icon">📊</div>
            <h3>Progress</h3>
            <p>Track your learning progress with detailed analytics.</p>
          </div>

          <div 
            className="feature-card"
            onClick={onNavigateToAchievements}
            style={{ cursor: 'pointer' }}
          >
            <div className="feature-icon">🏆</div>
            <h3>Achievements</h3>
            <p>Earn certificates and badges as you complete courses.</p>
          </div>
        </div>

        <section className="recommended-section">
          <h2>Recommended For You</h2>
          <p className="recommended-subtitle">Based on your learning interests</p>
          <div className="recommended-grid">
            {recommendedCourses.map((course) => (
              <div key={course.id} className="recommended-card" onClick={onNavigateToCourses} style={{ cursor: 'pointer' }}>
                <div className="recommended-icon">{course.icon}</div>
                <h3 className="recommended-name">{course.name}</h3>
                <div className="recommended-meta">
                  <span className="recommended-level">{course.level}</span>
                  <span className="recommended-rating">⭐ {course.rating}</span>
                </div>
                <button className="recommended-btn">View Course</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default MainPage;
