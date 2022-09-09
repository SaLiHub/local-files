module.exports.port = process.env.PORT ?? 8080;
module.exports.host = process.env.HOST ?? 'localhost';
module.exports.db = process.env.MONGO_URL ?? 'mongodb://api_db:27017/api';

