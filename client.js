const {Redis} = require('ioredis')


// automatically the redis server 6379
const client = new Redis ()

module.exports=client;
