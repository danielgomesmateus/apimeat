import { Router } from '../common/router';
import * as restify from 'restify';
import { UserModel } from './users.model';

class UsersRouter extends Router {
    applyRoutes(app: restify.Server) {
        app.get('/users', (request, response, next) => {
            UserModel.find({}).then((users) => {
                response.json(users);
                return next();
            });
        });
        app.get('/users/:id', (request, response, next) => {
            UserModel.findById(request.params.id).then((user) => {
                if(user) {
                    response.json(user);
                    return next();
                }
                else {
                    response.send(404);
                }
            });
        });
    }
}

export const usersRouter = new UsersRouter;