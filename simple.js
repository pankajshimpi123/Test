var http=require('http');
var url=require('url');

http.createServer(function(req,res)
{
 res.write("<h1 style='color:red'> Welcome to Node Server </h1>");
res.end();

}).listen(9000);
console.log("server started at 9000");
