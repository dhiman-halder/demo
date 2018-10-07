var express = require('express')
var app = express()
var path = require('path');

app.get('/', function (req, res) {
    res.send('Application <b>e!</b><p>Tenant Id: <b>'+ process.env.TENANT_ID + '</b></p>');
});
app.get('/static', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/api', function (req, res) {
    res.send('Application <b>e!</b><p>Tenant Id: <b>'+ process.env.TENANT_ID + '</b></p><p>Current time in UTC: ' + new Date().toISOString() + '</p><p><b>Request headers:</b><br/> ' + JSON.stringify(req.headers) + '</p><p><b>Querystrings:</b><br/>' + JSON.stringify(req.query) + '</p>');
});

app.listen(8080, () => console.log('Listening on 8080'))