const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    fs.readFile('demofile.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

    fs.appendFile('mynewfile1.txt', 'Hello content!', function (err, data) {
        res.write(data);
        console.log('Saved!');
        return res.end();
    });

    fs.open('mynewfile1.txt', 'w', function (err, file) {
        console.log('Saved!', file);
        if (err) throw err;
        console.log('Saved!');
    });

    fs.writeFile('mynewfile3.txt', 'Hello New File!', function (err) {
        if (err) throw err;
        console.log('Saved!');
    });

    fs.unlink('mynewfile3.txt', function (err) {
        if (err) throw err;
        console.log('File deleted!');
    });

    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
        if (err) throw err;
        console.log('File Renamed!');
    });
});

server.listen(8080, () => {
    console.log('Server running on http://localhost:8080');
});

// Create your own HTML File with name as {yourname}.html which describes about you, and display it using the readFile() module. Add some styling to the html file
