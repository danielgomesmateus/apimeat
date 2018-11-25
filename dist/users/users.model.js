"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users = [
    {
        id: 1,
        name: 'Peter Parker',
        email: 'peter@marvel.com'
    },
    {
        id: 2,
        name: 'Bruce Wayner',
        email: 'bruce@dc.com'
    }
];
var UsersModel = /** @class */ (function () {
    function UsersModel() {
    }
    UsersModel.findAll = function () {
        return Promise.resolve(users);
    };
    UsersModel.findById = function (id) {
        return new Promise(function (resolve) {
            var filtered = users.filter(function (user) { return user.id == id; });
            var user = undefined;
            if (filtered.length > 0) {
                user = filtered[0];
            }
            resolve(user);
        });
    };
    return UsersModel;
}());
exports.UsersModel = UsersModel;
