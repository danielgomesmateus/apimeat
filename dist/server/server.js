"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var restify = __importStar(require("restify"));
var environment_1 = require("../common/environment");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initRoutes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.app = restify.createServer({
                    name: 'api-meat',
                    version: '1.0.0'
                });
                _this.app.use(restify.plugins.queryParser());
                _this.app.get('/', function (request, response, next) {
                    response.json({
                        message: 'Hello World!'
                    });
                    response.status(200);
                    next();
                });
                _this.app.listen(environment_1.environment.server.port, function () {
                    resolve(_this.app);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    Server.prototype.bootstrap = function () {
        var _this = this;
        return this.initRoutes().then(function () { return _this; });
    };
    return Server;
}());
exports.Server = Server;
