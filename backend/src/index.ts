import http from "http";
import type { BmiRequest } from "./types";
import { getBmiResponse } from "./get-bmi-response";

const PORT = 3000;
const HOST = "0.0.0.0";

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:8080",
    "Access-Control-Allow-Headers": "Content-Type, Accept",
  });

  if (req.method !== "POST") {
    return res.end(JSON.stringify({ error: `Invalid method: ${req.method}` }));
  }

  let body = "";

  req.on("data", (chunk) => {
    body += chunk;
  });

  req.on("end", () => {
    const bmiResponse = getBmiResponse(JSON.parse(body) as BmiRequest);

    res.end(JSON.stringify(bmiResponse));
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server is listening on http://${HOST}:${PORT}`);
});
