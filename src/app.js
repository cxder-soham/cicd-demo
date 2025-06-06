const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({
    message: 'Hello World! Welcome to our CI/CD demo application',
    timestamp: new Date(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint for container orchestration systems
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Added this new endpoint
app.get('/api/status', (req, res) => {
    res.json({
      service: 'cicd-demo-app',
      version: '1.0.0',
      uptime: process.uptime(),
      date: new Date()
    });
  });

// Only start the server if this file is run directly
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app; // Export for testing