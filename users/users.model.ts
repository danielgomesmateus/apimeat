const users = [
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

export class UsersModel {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users);
    }
    static findById(id: number): Promise<any> {
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id == id);
            let user = undefined;

            if(filtered.length > 0) {
                user = filtered[0];
            }

            resolve(user);
        });
    }
}