/*
 * Title: sample handlers
 * Description: sample handlers
 * Author: Md Kaium Islam
 * Date: 11/15/2020
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);

    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
