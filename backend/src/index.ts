import http from 'http';
import type { BmiRequest } from './types';

const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    'Access-Control-Allow-Origin': 'http://localhost:8080',
    'Access-Control-Allow-Headers': 'Content-Type, Accept'
  });

  if (req.method !== 'POST') {
    return res.end(JSON.stringify({ error: `Invalid method: ${req.method}`}));
  }

  let body = '';

  req.on('data', chunk => {
    body += chunk;
  });

  req.on('end', () => {
    const bmiRequest = JSON.parse(body) as BmiRequest;

    res.end(JSON.stringify({ message: `Hello ${bmiRequest.height}`}));
  });  
});

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});
