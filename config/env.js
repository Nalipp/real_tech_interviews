const path = require('path');
const rootPath = path.normalize(__dirname + '/../'); 

module.exports = {
    development: {
        rootPath: rootPath,
        database: 'mongodb://localhost/real-tech-interviews',
        port: process.env.PORT || 3000
    },
    production: {
        rootPath: rootPath,
        database: 'mongodb://heroku_878s6z0n:19dgt8b63lvme2ld9tarq22b75@ds259711.mlab.com:59711/heroku_878s6z0n',
        port: process.env.PORT || 80
    }
};
