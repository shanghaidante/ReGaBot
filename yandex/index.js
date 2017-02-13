"use strict";

module.exports = function(context, req) {
    context.log('Node.js HTTP trigger function processed a request. RequestUri=%s', req.originalUrl);

    if (req.query.code || (req.body && req.body.code)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.code || req.body.code)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
    context.done();
};
