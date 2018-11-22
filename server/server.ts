import * as restify from 'restify';
import { environment } from '../common/environment';

export class Server {

    public app: restify.Server;

    public initRoutes(): Promise<any> {
        return new Promise((resolve, reject) => {
            try{
                this.app = restify.createServer({
                    name: 'api-meat',
                    version: '1.0.0'
                });

                this.app.use(restify.plugins.queryParser());

                this.app.get('/', (request, response, next) => {
                    response.json({
                        message: 'Hello World!'
                    });
                    response.status(200);
                    next();
                });

                this.app.listen(environment.server.port, () => {
                    resolve(this.app);
                });
            }
            catch(error) {
                reject(error);
            }
        });
    }

    public bootstrap(): Promise<Server> {
        return this.initRoutes().then(() => this);
    }
}