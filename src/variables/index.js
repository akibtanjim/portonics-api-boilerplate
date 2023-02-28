/**
 * Load variables from env
 */
const loggerName = process.env.LOGGER_NAME;
const env = process.env.NODE_ENV || 'local';
const appPort = process.env.APP_PORT || 3000;
const logLevel = process.env.LOG_LEVEL;
const host = process.env.HOST || 'localhost';
const dbHost = process.env.DB_HOSTNAME;
const dbUserName = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;
const dbDialect = process.env.DB_DIALECT;
const dbPort = process.env.DB_PORT;
const apiRateLimitInterval = process.env.API_RATE_LIMIT_INTERVAL_IN_MIN;
const apiMaxRequestLimit = process.env.API_MAX_REQUEST_LIMIT;
const mongodbHost = process.env.MONGO_DB_HOST;
const mongodbDBName = process.env.MONGO_DB_NAME;
const mongoDBUserName = process.env.MONGO_DB_USERNAME;
const mongoDBPassword = process.env.MONGO_DB_PASSWORD;
const mongoDBPort = process.env.MONGO_DB_PORT;
const redisUri = `redis://${process.env.REDIS_USERNAME}:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

/**
 * Expose variables so that other modules can use them
 */

const variables = {
  appPort,
  env,
  loggerName,
  logLevel,
  host,
  dbHost,
  dbUserName,
  dbPassword,
  dbName,
  dbDialect,
  dbPort,
  apiRateLimitInterval,
  apiMaxRequestLimit,
  mongodbHost,
  mongodbDBName,
  mongoDBUserName,
  mongoDBPassword,
  mongoDBPort,
  redisUri,
};

module.exports = variables;
