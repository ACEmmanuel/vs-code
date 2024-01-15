const http = require ('http');

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World');
})

// server.listen(5000, ()=>{
    // console.log('Server listening to port 5000.........')
// })


for (let i = 0; i < 10; i++) {
    
}