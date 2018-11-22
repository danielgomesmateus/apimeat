'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
(function () {
    var server = new server_1.Server();
    server.bootstrap().then(function (server) {
        console.log('Server is listen on: ', server.app.address());
    })
        .catch(function (error) {
        console.log(error);
        process.exit(1);
    });
})();
