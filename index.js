'use strict';

const server = require('./src/server');

const { db } = require('./src/models/index');
db.sync()
    .then(() => {
        server.start(process.env.PORT || 3070);
    })
    .catch(console.error);