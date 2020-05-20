const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();




app.prepare().then(() => {
  createServer(handle).listen(3000, err => {
    if (err) throw err;
    console.log('Ready on localhost:3000');
  });
});