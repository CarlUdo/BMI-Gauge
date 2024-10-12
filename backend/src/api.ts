import http from "http";
import type { BmiRequest } from "./types";
import { getBmiResponse } from "./get-bmi-response";
import { validateBmiRequest } from "./validate-bmi-request";
import { BadRequestError } from "./Errors";

export default http.createServer((req, res) => {
  try {
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
      const bmiRequest = JSON.parse(body) as BmiRequest;
      validateBmiRequest(bmiRequest);
      const bmiResponse = getBmiResponse(bmiRequest);
  
      res.end(JSON.stringify(bmiResponse));
    });
  } catch (error) {    
    res.setHeader('Content-Type', 'application/json');
    if (error instanceof BadRequestError) {
      res.statusCode = error.statusCode;
      res.end(JSON.stringify({ error: error.message}));
      return error.message;
    }
    res.statusCode = 500;
    res.end(JSON.stringify({ error: "500 INTERNAL_SERVER_ERROR"}));
    return '500 INTERNAL_SERVER_ERROR';
  }  
});
