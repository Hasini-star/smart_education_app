import { useState } from 'react';
import ChatBot from './ChatBot';
import './FloatingChat.css';

function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="floating-chat-wrapper">
      {isOpen && (
        <div className="floating-chat-window">
          <button
            className="floating-chat-close"
            onClick={toggleChat}
            aria-label="Close chat"
          >
            ×
          </button>
          <ChatBot />
        </div>
      )}

      <button
        className={`floating-chat-button ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label="Open chat assistant"
        title="Chat with AI Assistant"
      >
        💬
      </button>
    </div>
  );
}

export default FloatingChat;
