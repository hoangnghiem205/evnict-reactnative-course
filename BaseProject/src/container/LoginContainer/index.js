// @flow
import * as React from "react";
import Login from "../../screens/Login";
import { Item, Input, Icon, Toast, Form } from "native-base";

export interface Props {
	navigation: any,
}

import UserModel from "../../models/UserModel";

export interface State {}
export default class LoginContainer extends React.Component<Props, State> {

    constructor(props){
        super(props);
        this.userModel = new UserModel();
    }

    login(usename, password) {
        console.log("[LoginContainer]", usename, password);
        this.userModel.saveUserInfo(usename, password);
        this.props.navigation.navigate("Home");
        //Lay user name & pass
        // so sanh db
        // if 
        
        //else 
        // Toast.show({
        //     text: "Enter Valid Username & password!",
        //     duration: 2000,
        //     position: "top",
        //     textStyle: { textAlign: "center" },
        // });
    }


    upload() {

    }

    getData() {

    }

	render() {
		return <Login navigation={this.props.navigation} onLogin={(username, password) => this.login(username, password)} />;
	}
}