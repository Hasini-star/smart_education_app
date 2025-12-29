import { useState } from 'react';
import './Progress.css';
import FloatingChat from './FloatingChat';

function Progress({ userEmail, onLogout, onBack }) {
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  // Sample data
  const weeklyActivity = [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 3.5 },
    { day: 'Wed', hours: 2.5 },
    { day: 'Thu', hours: 4 },
    { day: 'Fri', hours: 3 },
    { day: 'Sat', hours: 4.5 },
    { day: 'Sun', hours: 2 },
  ];

  const courseProgress = [
    { name: 'React', progress: 65, color: '#667eea' },
    { name: 'Python', progress: 45, color: '#764ba2' },
    { name: 'JavaScript', progress: 80, color: '#f093fb' },
    { name: 'CSS & Design', progress: 55, color: '#4facfe' },
  ];

  const skillsData = [
    { skill: 'Frontend Dev', level: 75 },
    { skill: 'Backend Dev', level: 45 },
    { skill: 'Database Design', level: 60 },
    { skill: 'Version Control', level: 85 },
    { skill: 'UI/UX Design', level: 70 },
    { skill: 'Problem Solving', level: 80 },
  ];

  const stats = [
    { label: 'Total Learning Hours', value: '21.5 hrs', icon: '⏱️' },
    { label: 'Courses in Progress', value: '4', icon: '📚' },
    { label: 'Certificates Earned', value: '3', icon: '🏆' },
    { label: 'Current Streak', value: '7 days', icon: '🔥' },
  ];

  const maxWeekHours = Math.max(...weeklyActivity.map(d => d.hours));
  const maxSkillLevel = 100;

  return (
    <div className="progress-page-container">
      <FloatingChat />

      <header className="progress-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={onBack} className="back-button">← Back</button>
            <h1>Learning Progress</h1>
          </div>
          <div className="user-info">
            <span className="user-email">Welcome, {userEmail}</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="progress-main-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Weekly Activity Chart */}
        <section className="chart-section">
          <h2>Weekly Learning Activity</h2>
          <div className="weekly-chart">
            <div className="chart-container">
              {weeklyActivity.map((item) => {
                const barHeight = (item.hours / maxWeekHours) * 100;
                return (
                  <div key={item.day} className="chart-bar-item">
                    <div className="bar-wrapper">
                      <div 
                        className="bar" 
                        style={{ height: `${barHeight}%` }}
                      >
                        <span className="bar-value">{item.hours}h</span>
                      </div>
                    </div>
                    <div className="bar-label">{item.day}</div>
                  </div>
                );
              })}
            </div>
            <div className="chart-info">
              Total: 21.5 hours | Average: 3.1 hours/day
            </div>
          </div>
        </section>

        {/* Course Progress */}
        <section className="chart-section">
          <h2>Course Completion Progress</h2>
          <div className="course-progress-list">
            {courseProgress.map((course) => (
              <div key={course.name} className="progress-item">
                <div className="progress-header-row">
                  <span className="progress-label">{course.name}</span>
                  <span className="progress-percent">{course.progress}%</span>
                </div>
                <div className="progress-bar-container">
                  <div 
                    className="progress-bar-fill"
                    style={{
                      width: `${course.progress}%`,
                      backgroundColor: course.color
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Radar Chart (represented as horizontal bars) */}
        <section className="chart-section">
          <h2>Skills Assessment</h2>
          <div className="skills-chart">
            {skillsData.map((item) => (
              <div key={item.skill} className="skill-item">
                <div className="skill-label">{item.skill}</div>
                <div className="skill-bar-container">
                  <div 
                    className="skill-bar-fill"
                    style={{ width: `${item.level}%` }}
                  ></div>
                  <span className="skill-level">{item.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="chart-section">
          <h2>Recent Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement-card">
              <div className="achievement-icon">🥇</div>
              <h3>JavaScript Master</h3>
              <p>Completed 80% of JavaScript course</p>
              <span className="achievement-date">Dec 20, 2025</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🔥</div>
              <h3>7-Day Streak</h3>
              <p>Learned for 7 consecutive days</p>
              <span className="achievement-date">Dec 27, 2025</span>
            </div>
            <div className="achievement-card">
              <div className="achievement-icon">🏆</div>
              <h3>Quick Learner</h3>
              <p>Completed React fundamentals in 1 week</p>
              <span className="achievement-date">Dec 15, 2025</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Progress;
