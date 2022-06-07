'use strict';

/**
 * global-portfolio service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::global-portfolio.global-portfolio');
