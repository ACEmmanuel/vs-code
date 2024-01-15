const http = require ('http');

const server = http.createServer((res, req) => {
    console.log('request event');
    res.end('Hello World');
})

server.listen(5000, ()=>{
    console.log('Server listening to port 5000.........')
})
