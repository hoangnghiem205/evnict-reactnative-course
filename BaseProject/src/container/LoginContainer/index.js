// @flow
import * as React from "react";
import Login from "../../screens/Login";
import { Item, Input, Icon, Toast, Form } from "native-base";

export interface Props {
	navigation: any,
}
export interface State {}
export default class LoginContainer extends React.Component<Props, State> {

    login() {
        //Lay user name & pass
        // so sanh db
        // if 
        this.props.navigation.navigate("Home");
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
		return <Login navigation={this.props.navigation} onLogin={() => this.login()} />;
	}
}