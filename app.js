var http = require('http');
var url = require('url')
const path = require('path');
const { finished } = require('stream');
http.createServer(onRequest).listen(5500);
console.log("Sever Started in port 5500");

function onRequest(request,response) {
    var pathNames = url.parse(request.url).pathname;
    console.log("pathName is "  +  pathNames);
    showPage(response,pathNames);
}


var contentMap = { 
    '/' : '<p> Start  page <p>',
    '/profile' : '<h1> Profile page <h1> ',
    '/help' : '<p>  Help page </p>'
}
function showPage(response,pathNames) {
    if(contentMap[pathNames]) {
    response.writeHead(200, {'Content-type' : 'text/html' });
    response.write(contentMap[pathNames]);
    response.end();
    }
    else {
        response.writeHead(200,{'Content-type' :'text/html'});
        response.write("<h1> 404 page not found <h1> ");
        response.end();
    }
}
