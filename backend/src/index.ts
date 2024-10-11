import http from 'http';

const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
  console.log(`Getting a ${req.method} request`);

  res.writeHead(200, {
    "Content-type": "appllication/json"
  });

  res.end(JSON.stringify({ message: "Hello from server!"}));
});

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});
