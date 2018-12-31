const express = require('express');
const crypto = require('crypto');
const app = express();
const Username = 'db_accessor';
const Password = 'K61&A5Mi@0Xv43V5kl';
const Database = 'critical_or_pii';

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World!\n and all the people in it!');
});

app.get('/ck_passwords', (req, res) => {
  res.write('Usernmae: '+crypto.createHash('sha256').update(Username, 'utf8').digest()+'\n');
  res.write('Password: '+crypto.createHash('sha256').update(Password, 'utf8').digest()+'\n');
  res.write('Database: '+crypto.createHash('sha256').update(Database, 'utf8').digest()+'\n');
  res.end(`\n`);
});


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
