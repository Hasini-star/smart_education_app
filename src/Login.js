import { useState } from 'react';
import './Login.css';

const VALID_CREDENTIALS = {
  email: 'hasinih051@gmail.com',
  password: '12345'
};

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
      onLoginSuccess(email);
      return;
    }

    setError('Invalid email or password');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>

        <form onSubmit={handleSubmit} className="login-form">
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="form-input"
            />
          </div>

          <a href="#forgot-password" className="forgot-password-link">
            Forgot password?
          </a>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>

        <div className="create-account-section">
          <p>
            Don't have an account?{' '}
            <a href="#create-account" className="create-account-link">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
