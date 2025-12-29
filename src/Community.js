import { useState } from 'react';
import './Community.css';
import FloatingChat from './FloatingChat';

function Community({ userEmail, onLogout, onBack }) {
  const [newPost, setNewPost] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: '👩‍💻',
      time: '2 hours ago',
      content: 'Just completed the React course! The project-based learning approach really helped me understand hooks better.',
      likes: 24,
      replies: 5,
    },
    {
      id: 2,
      author: 'Mike Johnson',
      avatar: '👨‍💻',
      time: '4 hours ago',
      content: 'Anyone struggling with CSS Grid? I found this amazing resource that explained it way better than I expected.',
      likes: 42,
      replies: 12,
    },
    {
      id: 3,
      author: 'Emma Davis',
      avatar: '👩‍🎓',
      time: '1 day ago',
      content: 'Started my JavaScript journey today! Excited to connect with others learning the same language.',
      likes: 35,
      replies: 8,
    },
    {
      id: 4,
      author: 'Alex Wong',
      avatar: '👨‍🎓',
      time: '1 day ago',
      content: 'Finished my first project with Node.js. Happy to share my learning experience if anyone is interested!',
      likes: 51,
      replies: 15,
    },
  ]);

  const members = [
    { id: 1, name: 'Sarah Chen', avatar: '👩‍💻', courses: 3, level: 'Intermediate' },
    { id: 2, name: 'Mike Johnson', avatar: '👨‍💻', courses: 5, level: 'Advanced' },
    { id: 3, name: 'Emma Davis', avatar: '👩‍🎓', courses: 2, level: 'Beginner' },
    { id: 4, name: 'Alex Wong', avatar: '👨‍🎓', courses: 4, level: 'Intermediate' },
    { id: 5, name: 'Lisa Park', avatar: '👩‍🏫', courses: 6, level: 'Advanced' },
    { id: 6, name: 'John Smith', avatar: '👨‍🏫', courses: 3, level: 'Beginner' },
  ];

  const handlePostSubmit = () => {
    if (newPost.trim()) {
      const post = {
        id: posts.length + 1,
        author: 'You',
        avatar: '🧑‍💼',
        time: 'now',
        content: newPost,
        likes: 0,
        replies: 0,
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="community-page-container">
      <FloatingChat />

      <header className="community-header">
        <div className="header-content">
          <div className="header-left">
            <button onClick={onBack} className="back-button">← Back</button>
            <h1>Community</h1>
          </div>
          <div className="user-info">
            <span className="user-email">Welcome, {userEmail}</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </div>
        </div>
      </header>

      <main className="community-main-content">
        {/* Community Stats */}
        <div className="community-stats">
          <div className="stat">
            <div className="stat-number">2,450</div>
            <div className="stat-label">Active Members</div>
          </div>
          <div className="stat">
            <div className="stat-number">5.2K</div>
            <div className="stat-label">Discussions</div>
          </div>
          <div className="stat">
            <div className="stat-number">892</div>
            <div className="stat-label">Study Groups</div>
          </div>
        </div>

        <div className="community-container">
          {/* Left: Feed */}
          <section className="feed-section">
            <h2>Community Feed</h2>

            {/* Post Creation */}
            <div className="post-creator">
              <textarea
                className="post-input"
                placeholder="Share your learning journey or ask a question..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                rows="3"
              ></textarea>
              <button 
                className="post-button"
                onClick={handlePostSubmit}
                disabled={!newPost.trim()}
              >
                Post to Community
              </button>
            </div>

            {/* Posts */}
            <div className="posts-list">
              {posts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <span className="post-avatar">{post.avatar}</span>
                    <div className="post-author-info">
                      <h4 className="post-author">{post.author}</h4>
                      <span className="post-time">{post.time}</span>
                    </div>
                  </div>
                  <p className="post-content">{post.content}</p>
                  <div className="post-actions">
                    <button className="post-action">
                      👍 {post.likes} Likes
                    </button>
                    <button className="post-action">
                      💬 {post.replies} Replies
                    </button>
                    <button className="post-action">
                      📤 Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Right: Members */}
          <section className="members-section">
            <h2>Top Members</h2>
            <div className="members-list">
              {members.map((member) => (
                <div key={member.id} className="member-card">
                  <div className="member-avatar">{member.avatar}</div>
                  <div className="member-info">
                    <h4 className="member-name">{member.name}</h4>
                    <p className="member-level">{member.level}</p>
                    <p className="member-courses">📚 {member.courses} courses</p>
                  </div>
                  <button className="follow-button">Follow</button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Community;
