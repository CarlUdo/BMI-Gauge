import server from "./api";

(() => {
  const PORT = 3000;
  const HOST = "0.0.0.0";

  server.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
  });
})();
