const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url)
    const ext = path.extname(filePath).substring(1);

    console.log(ext)
    fs.readFile(filePath, (err, data) => {
        res.writeHead(200, {
            'Content-type': `text/${ext}`
        })
        res.end(data)
    })


})


server.listen(3000, () => {
    console.log('server is running...')
})
