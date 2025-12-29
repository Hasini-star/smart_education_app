import { useState, useRef, useEffect } from 'react';
import './ChatBot.css';

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! 👋 I am your Smart Education Assistant. How can I help you today?',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fallback keyword-based responses
  const generateFallbackResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    const responses = {
      'hello|hi|hey': 'Hello! How are you doing today? What would you like to learn?',
      'course|courses': 'We offer courses in various subjects like Mathematics, Science, Programming, and Languages. What interests you?',
      'help|assist': 'I can help you with:\n- Finding courses\n- Tracking your progress\n- Answering questions\n- Providing learning resources',
      'progress': 'You can view your progress in the Progress section. Keep up the great work! 🎯',
      'certificate|badge|achievement': 'You earn certificates and badges as you complete courses! They are a great way to showcase your learning.',
      'community|friends': 'Our community is a great place to connect with other learners, share experiences, and get support.',
      'time|schedule': 'You can learn at your own pace! No fixed schedule needed.',
      'price|cost|free': 'Check with the platform for pricing information and available courses.',
      'thank': 'You\'re welcome! Happy to help! 😊',
      'bye|goodbye': 'Goodbye! Keep learning and come back soon! 👋'
    };

    for (const [keywords, response] of Object.entries(responses)) {
      const keywordArray = keywords.split('|');
      if (keywordArray.some(keyword => lowerMessage.includes(keyword))) {
        return response;
      }
    }

    return 'That\'s interesting! Could you tell me more about what you\'d like to learn? I can help with courses, progress tracking, and more! 📚';
  };

  // Call backend API instead of Hugging Face directly
  const generateBotResponse = async (userMessage) => {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      const result = await response.json();

      if (result.response) {
        return result.response;
      }

      return generateFallbackResponse(userMessage);
    } catch (err) {
      console.error('Chat API Error:', err);
      // Fallback to keyword-based responses
      return generateFallbackResponse(userMessage);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (!inputValue.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setError('');
    setIsLoading(true);

    try {
      const botResponseText = await generateBotResponse(inputValue);
      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, botResponse]);
    } catch (err) {
      setError('Failed to get response. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h3>💬 Smart Assistant</h3>
      </div>

      <div className="chatbot-messages">
        {error && <div className="error-message">{error}</div>}
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender}`}>
            <div className={`message-content ${message.sender}`}>
              {message.text}
            </div>
            <span className="message-time">
              {message.timestamp.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="message bot">
            <div className="message-content bot">
              <span className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="chatbot-input-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask me anything..."
          className="chatbot-input"
          disabled={isLoading}
        />
        <button type="submit" className="chatbot-send-btn" disabled={isLoading}>
          {isLoading ? '...' : '📤'}
        </button>
      </form>
    </div>
  );
}

export default ChatBot;
