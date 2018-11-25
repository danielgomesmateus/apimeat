import * as restify from 'restify';
import mongoose from 'mongoose';

import { environment } from '../common/environment';
import { Router } from '../common/router';

export class Server {

    public app: restify.Server;

    public initializeDB() {
        return mongoose.connect(environment.db.url, {
            useNewUrlParser: true
        });
    }
    public initRoutes(routers: Router[]): Promise<any> {
        return new Promise((resolve, reject) => {
            try{
                this.app = restify.createServer({
                    name: 'api-meat',
                    version: '1.0.0'
                });

                this.app.use(restify.plugins.queryParser());
                
                for(let router of routers) {
                    router.applyRoutes(this.app);
                }

                this.app.listen(environment.server.port, () => {
                    resolve(this.app);
                });
            }
            catch(error) {
                reject(error);
            }
        });
    }

    public bootstrap(routers: Router[] = []): Promise<Server> {
        return this.initializeDB().then(() => 
               this.initRoutes(routers).then(() => 
               this
        ));
    }
}