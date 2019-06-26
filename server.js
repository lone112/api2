var restify = require('restify')
const os = require('os')

function respond (req, res, next) {
  res.send('HI ' + req.params.name + ' from ' + os.hostname())
  next()
}

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val) {
  var port = parseInt(val, 10)

  if (isNaN(port)) {
    // named pipe
    return val
  }

  if (port >= 0) {
    // port number
    return port
  }

  return false
}

var server = restify.createServer()
server.get('/hello/:name', respond)
server.head('/hello/:name', respond)

var port = normalizePort(process.env.PORT || '3000')

server.listen(port, function () {
  console.log('%s listening at %s', server.name, server.url)
})