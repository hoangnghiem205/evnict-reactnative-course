import Model from './Model';

export default class UserModel extends Model{
    constructor(){
        super("test.db");
    }

    saveUserInfo(userName, password){
        this.db.execute(
            "INSERT INTO User_Info(username, password) values (?, ?);",
            [userName, password],
            (result)=>{
                console.log("[UserModel:saveUserOnfo]", result);
            }
        );
    }
}