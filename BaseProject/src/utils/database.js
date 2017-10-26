var SQLite = require('react-native-sqlite-storage');
const create_table_query = "create table users (id integer primary key autoincrement,username varchar(500), age integer, address varchar(500))";
const insert_query = "insert into users(username, age, address) values('hoangnm', 12, 'hanoi')"
export default class Database {

	constructor(DB_NAME) {
		this.db = this.open(DB_NAME);
		// this.initDB();
	}

	initDB() {
		this.db.executeSql(create_table_query, [], 
			() => console.log('ok'), 
			(err) => console.log('err ', err));
	}

	open(DB_NAME) {
		return SQLite.openDatabase({ name: DB_NAME, location: 'Library' }, this.openCB, this.errorCB);
	}

	execute(query, params, callback) {
		this.db.executeSql(query, params, callback);
	}

	executeTrans(query, params, callback) {
		this.db.transaction((tx) => {
			tx.executeSql(query, params, callback);
		});
	}

	errorCB(err) {
		console.error("SQL Error: ", err);
		
	}

	successCB() {
		console.log("SQL executed fine");
	}

	openCB() {
		console.log("Database OPENED");
	}
}