"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var restify = __importStar(require("restify"));
var mongoose_1 = __importDefault(require("mongoose"));
var environment_1 = require("../common/environment");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initializeDB = function () {
        return mongoose_1.default.connect(environment_1.environment.db.url, {
            useNewUrlParser: true
        });
    };
    Server.prototype.initRoutes = function (routers) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.app = restify.createServer({
                    name: 'api-meat',
                    version: '1.0.0'
                });
                _this.app.use(restify.plugins.queryParser());
                for (var _i = 0, routers_1 = routers; _i < routers_1.length; _i++) {
                    var router = routers_1[_i];
                    router.applyRoutes(_this.app);
                }
                _this.app.listen(environment_1.environment.server.port, function () {
                    resolve(_this.app);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    };
    Server.prototype.bootstrap = function (routers) {
        var _this = this;
        if (routers === void 0) { routers = []; }
        return this.initializeDB().then(function () {
            return _this.initRoutes(routers).then(function () {
                return _this;
            });
        });
    };
    return Server;
}());
exports.Server = Server;
