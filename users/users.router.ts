import { Router } from '../common/router';
import * as restify from 'restify';
import { UsersModel } from './users.model';

class UsersRouter extends Router {
    applyRoutes(app: restify.Server) {
        app.get('/users', (request, response, next) => {
            UsersModel.findAll().then(users => {
                response.json(users);
                return next();
            });
        });
        app.get('/users/:id', (request, response, next) => {
            UsersModel.findById(request.params.id).then(user => {
                if(user) {
                    response.json(user);
                }
                else {
                    response.send(404);
                }
                return next();
            });
        });
        app.get('/users/add', (request, response, next) => {
            response.json({message: 'adicionar usuários'});
        });
    }
}

export const usersRouter = new UsersRouter;