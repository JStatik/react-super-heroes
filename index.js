const colors = require('colors');
const dotenv = require('dotenv').config();
const Server = require('./server/classes/server');

if(dotenv.error)
    throw new Error(colors.magenta(dotenv.error));

const server = new Server();
server.execute();
