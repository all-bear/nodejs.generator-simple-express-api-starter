const logger = require('morgan');
const bodyParser = require('body-parser');
const http = require('http');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const PromiseRouter = require('express-promise-router');

const serverConfig = require('../configs/server');
const appConfig = require('../configs/app');

module.exports = function() {
  this.Router = PromiseRouter;

  this.set('port', serverConfig.port);

  const server = http.createServer(this);

  server.listen(serverConfig.port);

  server.on('error', (error) => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    const bind =
      typeof serverConfig.port === 'string'
        ? `Pipe ${serverConfig.port}`
        : `Port ${serverConfig.port}`;

    switch (error.code) {
      case 'EACCES':
        console.error(`${bind} requires elevated privileges`);
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(`${bind} is already in use`);
        process.exit(1);
        break;
      default:
        throw error;
    }
  });

  server.on('listening', () => {
    const addr = server.address();

    const bind =
      typeof addr === 'string'
        ? `${pipe} addr`
        : `${serverConfig.port} addr.port`;

    console.log(`Listening on ${bind}`);
  });

  this.use(logger(appConfig.env === 'production' ? 'tiny' : 'dev'));
  this.use(bodyParser.json());
  this.use(bodyParser.urlencoded({extended: false}));
  this.use(cors());
  this.use(fileUpload());
};
