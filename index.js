const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World!\n and all the people in it!');
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
