const express = require('express');

const app = express();

const port = +(process.env.PORT || 8932);

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send(JSON.stringify({
    name: "express-test-deploy",
    uptime: process.uptime(),
    headers: req.headers,
    env: process.env,
  }));
});

app.listen(port, () => {
  console.log(`express-test-dp listening on ${port}`);
});
