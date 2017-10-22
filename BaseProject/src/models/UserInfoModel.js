import Model from "./Model";

export default class UserInfoModel extends Model{
    constructor(){
        super("Test.db");
    }

    getAll(onGetUserData){
        this.db.execute(
            "SELECT * FROM UserInfo",
            [],
            (result)=>{
                console.log("Select all", result);
                onGetUserData(result);
            }
        );
    }
}