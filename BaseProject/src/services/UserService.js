import Service from './Service';
import Setting from '../utils/setting';

export default class UserService extends Service {

    constructor() {
        super();
    }

    getAll(callback) {
        this.http.get(Setting.API_URL, this.header)
        .then( response => response.json() )
        .then( responseJson => callback(responseJson) );
    }

    update(callback) {
        // this.http.post('url://asdfasdf', this.header, {username: 'sa', password: 'sa'})
        // .then( response => response.json() )
        // .then( responseJson => callback(responseJson) );
    }

    delete(callback) {
        
    }

    insert(callback) {

    }

}