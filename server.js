require('dotenv').config({ path: '.env.local' });
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5000;

// Log API key status for debugging
if (!process.env.HF_API_KEY) {
  console.warn('⚠️  HF_API_KEY not found in environment variables');
  console.warn('Make sure .env.local file exists with HF_API_KEY=your_token_here');
} else {
  console.log('✓ HF_API_KEY loaded successfully');
}

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend server is running' });
});

// Hugging Face proxy endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    console.log('Incoming chat message:', message);

    const apiKey = process.env.HF_API_KEY;

    if (!apiKey) {
      console.error('HF_API_KEY is not configured on the backend');
      return res.status(500).json({ error: 'AI service not configured' });
    }

    // TODO: Integrate with real AI service
    return res.status(500).json({ error: 'AI service not implemented' });
  } catch (error) {
    console.error('Chat API Error:', error.message);
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Data:', error.response.data);
    }
    return res.json({ response: 'I could not generate a response at this time. Please try again later.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
