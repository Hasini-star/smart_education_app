import { useState } from 'react';
import './App.css';
import Login from './Login';
import MainPage from './MainPage';
import Courses from './Courses';
import Progress from './Progress';
import Community from './Community';
import Achievements from './Achievements';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentPage, setCurrentPage] = useState('main');

  const handleLoginSuccess = (email) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail('');
    setCurrentPage('main');
  };

  const handleNavigateToCourses = () => {
    setCurrentPage('courses');
  };

  const handleNavigateToProgress = () => {
    setCurrentPage('progress');
  };

  const handleNavigateToCommunity = () => {
    setCurrentPage('community');
  };

  const handleNavigateToAchievements = () => {
    setCurrentPage('achievements');
  };

  const handleBackToMain = () => {
    setCurrentPage('main');
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : currentPage === 'courses' ? (
        <Courses userEmail={userEmail} onLogout={handleLogout} onBack={handleBackToMain} />
      ) : currentPage === 'progress' ? (
        <Progress userEmail={userEmail} onLogout={handleLogout} onBack={handleBackToMain} />
      ) : currentPage === 'community' ? (
        <Community userEmail={userEmail} onLogout={handleLogout} onBack={handleBackToMain} />
      ) : currentPage === 'achievements' ? (
        <Achievements userEmail={userEmail} onLogout={handleLogout} onBack={handleBackToMain} />
      ) : (
        <MainPage userEmail={userEmail} onLogout={handleLogout} onNavigateToCourses={handleNavigateToCourses} onNavigateToProgress={handleNavigateToProgress} onNavigateToCommunity={handleNavigateToCommunity} onNavigateToAchievements={handleNavigateToAchievements} />
      )}
    </div>
  );
}

export default App;
