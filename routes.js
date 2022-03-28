/*
 * Title: Routes
 * Description: Application Routes
 * Author: Md Kaium Islam
 * Date: 11/15/2020
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandlers');

const routes = {
    sample: sampleHandler,
};

module.exports = routes;
