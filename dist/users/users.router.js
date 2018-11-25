"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("../common/router");
var users_model_1 = require("./users.model");
var UsersRouter = /** @class */ (function (_super) {
    __extends(UsersRouter, _super);
    function UsersRouter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsersRouter.prototype.applyRoutes = function (app) {
        app.get('/users', function (request, response, next) {
            users_model_1.UsersModel.findAll().then(function (users) {
                response.json(users);
                return next();
            });
        });
        app.get('/users/:id', function (request, response, next) {
            users_model_1.UsersModel.findById(request.params.id).then(function (user) {
                if (user) {
                    response.json(user);
                }
                else {
                    response.send(404);
                }
                return next();
            });
        });
        app.get('/users/add', function (request, response, next) {
            response.json({ message: 'adicionar usuários' });
        });
    };
    return UsersRouter;
}(router_1.Router));
exports.usersRouter = new UsersRouter;
