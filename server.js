var http = require('http')
var port = process.env.PORT || 1337;
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
}).listen(port);
// var http = require('http');    
// var apn = require('apn');
// var qs = require('querystring');
// var port = process.env.PORT || 1337;
 
// var server = http.createServer(function (req, res) {
//     if(req.method === "POST") {
//         var fullBody="";
     
//         req.on('data', function(chunk)  
//         {
//             fullBody += chunk;
//             console.log("Full body " + fullBody);
//         });
 
//         req.on('end', function()
//         {
//             var data = qs.parse(fullBody);
//             var weddingId = data.weddingId;
//             var announcement = data.announcement;

//             console.log("weddingId " +weddingId);
//             console.log("Announcement " + announcement);
//             //var myDevice = new apn.Device(data.token);
//             // Now we need to store it! Add code to interface with a d below...
 
//             res.writeHead(200, {"Content-Type": "text/plain"});
//             res.end("weddingId sent was \n" + weddingId + "announcement sent was " + announcement );

//             res.end();
//         });
//     }
// }).listen(port);
// console.log("Server running at http://127.0.0.1:"+server.address().port);