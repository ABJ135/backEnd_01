const http = require('http');

const server = http.createServer((req,res ) => {
    console.log(req.method,"server");
    
});

const port = 8000;
server.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`);
});