import './Achievements.css';
import FloatingChat from './FloatingChat';

function Achievements({ userEmail, onLogout, onBack }) {
  const achievements = [
    {
      id: 1,
      icon: '🥇',
      title: 'First Steps',
      description: 'Complete your first course module',
      earned: true,
      earnedDate: 'Dec 1, 2025',
      progress: 100,
    },
    {
      id: 2,
      icon: '⚛️',
      title: 'React Master',
      description: 'Reach 80% completion in React course',
      earned: true,
      earnedDate: 'Dec 20, 2025',
      progress: 100,
    },
    {
      id: 3,
      icon: '🔥',
      title: 'Streak Warrior',
      description: 'Maintain a 7-day learning streak',
      earned: true,
      earnedDate: 'Dec 27, 2025',
      progress: 100,
    },
    {
      id: 4,
      icon: '📚',
      title: 'Knowledge Seeker',
      description: 'Enroll in 5 different courses',
      earned: true,
      earnedDate: 'Dec 15, 2025',
      progress: 100,
    },
    {
      id: 5,
      icon: '🏆',
      title: 'Course Completer',
      description: 'Complete 1 full course from start to finish',
      earned: false,
      earnedDate: null,
      progress: 65,
    },
    {
      id: 6,
      icon: '⭐',
      title: 'Excellence Award',
      description: 'Score 95% or higher on 3 courses',
      earned: false,
      earnedDate: null,
      progress: 33,
    },
    {
      id: 7,
      icon: '🧠',
      title: 'Problem Solver',
      description: 'Complete 50 coding challenges',
      earned: false,
      earnedDate: null,
      progress: 42,
    },
    {
      id: 8,
      icon: '💬',
      title: 'Community Hero',
      description: 'Help 10 community members with questions',
      earned: false,
      earnedDate: null,
      progress: 20,
    },
    {
      id: 9,
      icon: '🚀',
      title: 'Speed Learner',
      description: 'Complete a course in half the estimated time',
      earned: false,
      earnedDate: null,
      progress: 0,
    },
    {
      id: 10,
      icon: '🎯',
      title: 'Goal Achiever',
      description: 'Achieve all 10 learning milestones',
      earned: false,
      earnedDate: null,
      progress: 40,
    },
  ];

  const earnedCount = achievements.filter(a => a.earned).length;
  const totalCount = achievements.length;

  const stats = [
    { label: 'Achievements Earned', value: earnedCount, icon: '🏅' },
    { label: 'Total Achievements', value: totalCount, icon: '📊' },
    { label: 'Completion Rate', value: `${Math.round((earnedCount / totalCount) * 100)}%`, icon: '📈' },
  ];

  return (
    <div className="achievements-page-container">
      <FloatingChat />

      <header className="achievements-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={onBack} className="back-button">← Back</button>
            <h1>Achievements</h1>
          </div>
          <div className="user-info">
            <span className="user-email">Welcome, {userEmail}</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="achievements-main-content">
        {/* Stats */}
        <div className="achievements-stats">
          {stats.map((stat, index) => (
            <div key={index} className="achievement-stat">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Earned Achievements */}
        <section className="achievements-section">
          <h2>Achievements Unlocked ({earnedCount}/{totalCount})</h2>
          <div className="achievements-grid">
            {achievements.filter(a => a.earned).map((achievement) => (
              <div key={achievement.id} className="achievement-item earned">
                <div className="achievement-icon-large">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <span className="achievement-date">🎉 {achievement.earnedDate}</span>
              </div>
            ))}
          </div>
        </section>

        {/* In Progress Achievements */}
        <section className="achievements-section">
          <h2>In Progress</h2>
          <div className="achievements-grid">
            {achievements.filter(a => !a.earned).map((achievement) => (
              <div key={achievement.id} className="achievement-item locked">
                <div className="achievement-icon-large">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
                <div className="progress-wrapper">
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar-fill"
                      style={{ width: `${achievement.progress}%` }}
                    ></div>
                  </div>
                  <span className="progress-text">{achievement.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Leaderboard */}
        <section className="leaderboard-section">
          <h2>Top Achievers</h2>
          <div className="leaderboard">
            {[
              { rank: 1, name: 'Alex Wong', achievements: 12, icon: '🥇' },
              { rank: 2, name: 'Sarah Chen', achievements: 11, icon: '🥈' },
              { rank: 3, name: 'Mike Johnson', achievements: 10, icon: '🥉' },
              { rank: 4, name: 'Emma Davis', achievements: 8, icon: '4️⃣' },
              { rank: 5, name: 'You', achievements: 4, icon: '5️⃣' },
            ].map((entry) => (
              <div key={entry.rank} className="leaderboard-entry">
                <div className="leaderboard-rank">{entry.icon}</div>
                <div className="leaderboard-info">
                  <h4>{entry.name}</h4>
                  <p>{entry.achievements} achievements</p>
                </div>
                <div className="leaderboard-badge">
                  {entry.achievements === 12 && '👑'}
                  {entry.achievements === 11 && '⭐'}
                  {entry.achievements === 10 && '🌟'}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Achievements;
