const http = require("node:http");
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  // const d = new Date().toISOString();

  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200);
    console.log(`Método:${req.method}, URL: http://localhost:${PORT}${req.url}, Status: ${res.statusCode}`)
    return res.end(JSON.stringify({ mensagem: "Olá, back-end!" }));
  }
  if (req.method === "GET" && req.url === "/status") {
    res.writeHead(200);
    console.log(`Método:${req.method}, URL: http://localhost:${PORT}${req.url}, Status: ${res.statusCode}`)
    return res.end(JSON.stringify({ status: "ok", uptime: process.uptime() }));
  }
  if (req.method === "GET" && req.url === "/hora") {
    res.writeHead(200);
    console.log(`Método:${req.method}, URL: http://localhost:${PORT}${req.url}, Status: ${res.statusCode}`)
    return res.end(JSON.stringify({ status: "ok", Date: new Date().toISOString() }),
    );
  }
  res.writeHead(404);
  res.end(JSON.stringify({ erro: "Rota não encontrada" }));
});

server.listen(PORT, () => console.log(`Rodando em http://localhost:${PORT}`));
