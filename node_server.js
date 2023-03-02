var server= require("node:http");
const server1=server.createServer(function(req,res){
    res.write("Hello IUC");
    res.end();
});

server1.listen(8080,function(){

    console.log("Running in http://127.0.0.1:3000");
});

