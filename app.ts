import { Server } from './server/server';
import { usersRouter } from './users/users.router';

const server = new Server();

server.bootstrap([usersRouter]).then(server => {
    console.log('Server is listen on: ', server.app.address());
})
.catch((error) => {
    console.log(error);
    process.exit(1);
});