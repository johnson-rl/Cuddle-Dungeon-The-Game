const http = require('http');
const express = require('express');
const app = express();
const path = require("path");
const server = require('http').createServer(app);
const port = process.env.PORT || 9000

app.use(express.static(path.resolve(__dirname, './public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
