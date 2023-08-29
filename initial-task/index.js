const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', (request, response) => {
    // logs details of incoming requests
  let body = [];
  request.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    console.log(`${request.method} ${request.url}`);
    console.log('> Headers: ', request.headers);
    console.log('> Body: ', body);
    response.end();
  });
  //home route
  if (request.url === "/" && request.method === 'GET') {
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain').end('Hello Node.js');
  }
  // file manipulation
  else if (request.url === '/file' && request.method === 'GET' ) {
    const file = fs.readFileSync(__dirname + "/data.txt", "utf-8")
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain').end(file);    
  }
    // JSON Api
  else if (request.url === '/api/user' && request.method === 'GET') {
  const user = {
    age: 7,
    name: 'Ebube',
    email: 'eb@gmail.com'
    }
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain').end(JSON.stringify(user));    
  }
    // any other route
  else {
    response.statusCode = 404
    response.setHeader('Content-Type', 'text/plain').end('page not found');    
  }
}).listen(3000, () => console.log('server is up and running on port 3000'));
