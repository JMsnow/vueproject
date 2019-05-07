'use strict';

const express = require('express');

const PORT = 8888;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
    res.send('Hello world\n');
});

app.get('/json', (req, res) => {
    res.json({
        code: 0,
        data :'This is message from node container'
    })
});

app.listen(PORT, HOST);
// eslint-disable-next-line no-console
console.log(`Running on http://${HOST}:${PORT}`);
