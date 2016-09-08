// === Libraries === //
var koa     = require('koa');
var serve   = require('koa-static');

// === Local === //
var routes  = require('./api');

// == App == //
var app = koa();

// Serve static files for now. Use webpack later and some for of templating
app.use(serve(__dirname + '/../'));

// Enable API routes
app.use(routes.routes());

// Start Server
// TODO: Use process.env for port (config?)
app.listen(3000);
console.log("Server is running on port 3000");
