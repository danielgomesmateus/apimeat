'use strict';

import * as restify from 'restify';

(function(){

    const server = restify.createServer({
        name: 'apimeat',
        version: '1.0.0'
    });

    server.get('/', (request, response, next) => {

        response.json({message: 'Hello World!'});
        return next();
    });

    server.listen(3000, () => {

        console.log("API is running on http://localhost:3000");
    })
})();