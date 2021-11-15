const express = require('express');
const app = express();
const port = +(process.env.PORT || 8932);

app.get('/', (req, res) => {
  const response = JSON.stringify({
    name: "express-test-deploy",
    uptime: process.uptime(),
    headers: req.headers,
    env: process.env,
  });
  console.log(response);
  res.send(response);
});

app.listen(port, () => {
  console.log(`express-test-deploy listening on ${port}`);
});
