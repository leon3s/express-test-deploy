const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();
const port = +(process.env.PORT || 8932);

app.get('/README.md', (req, res) => {
  const buff = fs.readFileSync(path.join(__dirname, 'README.md'));
res.send(`
  <html>
  <body style="margin:0px;padding:0px;height:100%;width:100%;background-color:rgba(0, 0, 0, 0.25);">
  <div style="width:50%;height:50%;margin:auto;padding:18px;">
    ${buff.toString().split('\n').reduce((acc, line) => {
      const char = line.charAt(0);
      const balise = 'span';
      let fontSize = 12;
      if (char === '#') {
        fontSize = 16;
      }
      acc += `<${balise} style="color: black; font-size:${fontSize}px; letter-spacing: 1px;font-weight:bold;">`
      acc += line;
      acc += `</${balise}>`
      acc += '</br>'
      return acc;
    }, '')}
  </div>
  <p style="color:white;font-size:10px;">
  </p>
  </body>
  </html>
`);
})

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
