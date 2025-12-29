const axios = require('axios');

(async () => {
  try {
    const res = await axios.post('http://localhost:5000/api/chat', { message: 'Hello from automation' }, { headers: { 'Content-Type': 'application/json' } });
    console.log('Response:', JSON.stringify(res.data, null, 2));
  } catch (err) {
    console.error('Error message:', err.message);
    if (err.response) {
      console.error('Response status:', err.response.status);
      console.error('Response data:', JSON.stringify(err.response.data, null, 2));
    }
    console.error('Full error:', err.stack || err);
    process.exit(1);
  }
})();
