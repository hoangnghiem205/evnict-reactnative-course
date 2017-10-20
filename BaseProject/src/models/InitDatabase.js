
import Model from "./Model";

export default class InitDatabase extends Model {

    constructor() {
        super('test.db');
    }

    initTable() {
        this.db.execute(
            "CREATE TABLE IF NOT EXISTS User_Info (" +
            "id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "username VARCHAR(50) NOT NULL," +
            "password VARCHAR(50) NOT NULL);"
            ,
            [],
            (result) => {
                console.log("[ContactModel:initTable]", result);
            }
        );

        this.db.execute(
            "CREATE TABLE IF NOT EXISTS Contacts (" +
            "id INTEGER PRIMARY KEY AUTOINCREMENT," +
            "name VARCHAR(50) NOT NULL," +
            "phonenumber VARCHAR(20) NOT NULL);"
            ,
            [],
            (result) => {
                console.log("[ContactModel:initTable]", result);
                if (result.rowsAffected > 0) {
                    this.db.execute(
                        "INSERT INTO Contacts(name, phonenumber) VALUES" +
                        "(\'hong\',\'1234qwer\')," +
                        "(\'hoa\',\'1234qwer\')," +
                        "(\'phuong\',\'1234qwer\')",
                        [],
                        (result) => {
                            console.log("[ContactModel:initTable] Contacts", result);
                        }
                    );
                }

            }
        );



    }

}