// Import/require http module
var http = require("http");

//define port
var PORT1 = 7000;

function handleRequest1(request, response){
    response.end("You look great today! " + request.url);
}

var server1 = http.createServer(handleRequest1);

server1.listen(PORT1, function(){
    console.log("Server listening on : http://localhost" + PORT1);
});

//define port
var PORT2 = 7500;

function handleRequest2(request, response){
    response.end("Wow! Did you just roll out of bed, slob? " + request.url);
}

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
    console.log("Server listening on : http://localhost" + PORT2);
});