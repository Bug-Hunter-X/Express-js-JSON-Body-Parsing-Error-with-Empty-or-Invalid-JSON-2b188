const express = require('express');
const app = express();
app.use(express.json({ limit: '50mb' })); //Increased limit to handle larger JSON bodies
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    console.error('Invalid JSON received:', err);
    return res.status(400).send({ error: 'Invalid JSON' });
  }
  next();
});
app.post('/data', (req, res) => {
  const data = req.body;
  if (Object.keys(data).length === 0) { 
    return res.status(400).send({ error: 'Request body cannot be empty' });
  }
  // Perform operations with data
  console.log(data);
  res.send('Data received');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});