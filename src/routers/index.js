'use strict';

/**
 * Load Dependencies
 */
const express = require('express');

/**
 * Load custom dependencies
 */
const healthRoutes = require('./health');

/**
 * Create Router
 */

const routers = express.Router();
routers.use('/', healthRoutes);

module.exports = routers;
