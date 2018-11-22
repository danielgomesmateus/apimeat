'use strict';

import { Server } from './server/server';

(function(){
    
    const server = new Server();
    
    server.bootstrap().then(server => {
        console.log('Server is listen on: ', server.app.address());
    })
    .catch((error) => {
        console.log(error);
        process.exit(1);
    });
})();