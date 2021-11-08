const express = require('express');


const app = express();

const port = +(process.env.PORT || 8932);

app.get('/', (req, res) => {
  console.log(req.headers);
  res.send(JSON.stringify(req.headers));
});

app.listen(port, () => {
  console.log(`express-test-dp listening on ${port}`);
});
