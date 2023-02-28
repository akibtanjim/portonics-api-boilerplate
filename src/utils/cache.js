'use strict';

const Redis = require('ioredis');

const { redisUri } = require('../variables');

const client = new Redis(redisUri);

exports.cacheSet = async (key, value, ttl = 0) => {
  return ttl ? client.set(key, value, 'EX', ttl) : client.set(key, value);
};

exports.cacheGet = async (key) => {
  return client.get(key);
};

exports.cacheDelete = async (key) => {
  return client.del(key);
};
