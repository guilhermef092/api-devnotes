require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());

server.get('/ping', (req, res) => {
  res.json({ pong: true });
});

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta: ${process.env.PORT}`);
});

