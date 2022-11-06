const http = require('http');
const fs = require('fs');


const requestListener = function (req, res) {

  if (req.url.includes('serverClass1')) {
	let serverClass = fs.readFileSync('serverClass1.js');
	res.writeHead(200, {'Content-Type': 'text/javascript'});
	res.end(serverClass);
	return;
  }
  if (req.url.includes('serverClass2')) {
	let serverClass = fs.readFileSync('serverClass2.js');
	res.writeHead(200, {'Content-Type': 'text/javascript'});
	res.end(serverClass);
	return;
  }
  if (req.url.includes('all')) {
	let serverClass = fs.readFileSync('import-all.js');
	res.writeHead(200, {'Content-Type': 'text/javascript'});
	res.end(serverClass);
	return;
  }

   if (req.url === '/') {
     res.writeHead(200);
	 let html = fs.readFileSync('index.html');
     res.end(html);
   }
}

const server = http.createServer(requestListener);
server.listen(8080);