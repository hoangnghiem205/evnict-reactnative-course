import Service from './Service';
import MyHttp from '../utils/http';
export default class UserService extends Service {

    constructor() {
        super();
    }

    async getAll() {
        let response = await new MyHttp().get('http://jsonplaceholder.typicode.com/users/1', {});
        return response.json();
    }

}