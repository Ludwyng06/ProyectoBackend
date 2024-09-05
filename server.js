const http = require('http');

const hostname = '127.0.0.1';
const fs=require("fs")
const port = 3000;

//
const  PaginaAyuda =fs.readFileSync("ayuda.html")
const  PaginaContacto =fs.readFileSync("contacto.html")
const  PaginaInicio =fs.readFileSync("inicio.html")
const  PaginaError =fs.readFileSync("paginaNoEncontrada.html")

const server = http.createServer((req, res) => {
  res.statusCode = 200;

  if (req.url === "/Ayuda") {
    return res.end(PaginaAyuda);
  } else if (req.url === "/Contacto") {
    return res.end(PaginaContacto);
  } else if (req.url === "/") {
    return res.end(PaginaInicio );
  } else {
    res.writeHead(404);
    res.end(PaginaError);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
