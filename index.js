//ALL YOUR CODE HERE


client.login(config.token);

//INSTALL 'EXPRESS' PACKAGE

//CODE TO CREATE SERVER
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Server Ready')
});

app.listen(3000, () => {
  console.log('#success');
});

