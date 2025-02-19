const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation
  setTimeout(() => {
    res.send('Hello from Express!');
  }, 1000); // Increased delay to simulate potential issue
  res.setTimeout(2000, () => {
    res.status(503).send('Service Unavailable'); // handle timeouts gracefully
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});