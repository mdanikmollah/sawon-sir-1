let http = require("http")
let url = require("url")

let server = http.createServer((req,res)=>{

// Get URL and Parse it

let parsedURL = url.parse(req.url,true)

// get path from url
let path = parsedURL.pathname
// Qrery parsed
let queryStringObject = parsedURL.query
// parsing HTTP methods
let method = req.method.toLowerCase()

// response for hit
res.end("This is my first node server")
//log the response data
console.log("this is my", method);
})


server.listen(8000,()=>{
    console.log("server running");
})