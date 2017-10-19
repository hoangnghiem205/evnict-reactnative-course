
import Model from "./Model";

export default class ContactModel extends Model{

    constructor() {
        super('test.db');
    }

    getAll(callback) {
        this.db.execute('SELECT * FROM users', [], (tx, results) => {
			var datas = [];
			for (let i = 0; i < results.rows.length; i++) {
				datas.push(results.rows.item(i));
            }
            callback(datas);
		});
    }

    insert(params, callback) {
        let query = 'INSERT INTO users VALUES(?,?,?)';
        this.db.execute(query, params, (tx, results) => callback(results));
    }

    update(params, callback) {
        let query = 'UPDATE users SET (username = ?, age = ?, address = ?) WHERE id = ?';
        this.db.execute(query, params, (tx, results) => callback(results));
    }

    delete(params, callback) {
        let query = 'DELETE FROM users WHERE id = ?';
        this.db.execute(query, params, (tx, results) => callback(results));
    }

}