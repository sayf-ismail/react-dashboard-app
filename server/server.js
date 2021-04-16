const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(PORT, () => console.log(`API is running on port ${PORT}`));