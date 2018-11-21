'use strict';
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var restify = __importStar(require("restify"));
(function () {
    var server = restify.createServer({
        name: 'apimeat',
        version: '1.0.0'
    });
    server.get('/', function (request, response, next) {
        response.json({ message: 'Hello World!' });
        return next();
    });
    server.listen(3000, function () {
        console.log("API is running on http://localhost:3000");
    });
})();
