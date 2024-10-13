import http from "http";
import type { BmiRequest } from "./types";
import { getBmiResponse } from "./get-bmi-response";
import { BadRequestError } from "./Errors";

export default http.createServer((req, res) => {
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
      try {
        const bmiRequest = JSON.parse(body) as BmiRequest;

        const bmiResponse = getBmiResponse(bmiRequest);
    
        res.end(JSON.stringify(bmiResponse));
      } catch (error) {
        if (error instanceof BadRequestError) {
          res.statusCode = error.statusCode;
          res.end(JSON.stringify({ error: error.message}));
          return;
        }
        res.statusCode = 500;
        res.end(JSON.stringify({ error: "500 INTERNAL_SERVER_ERROR"}));
        return;
      }      
    });
   
});
