var  http=require("http");

var onReceive=function(req,res)
{
res.write("helo Namaste");
res.end();
}

var app=http.createServer(onReceive);
app.listen(8080);
console.log("listen on port 8080");
