// @flow
import * as React from "react";
import Login from "../../screens/Login";
import { Item, Input, Icon, Toast, Form } from "native-base";

import UserService from '../../services/UserService';

export interface Props {
    navigation: any,
}

import UserModel from "../../models/UserModel";

export interface State { }
export default class LoginContainer extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        console.log("Will mount");
        let userService = new UserService();
        userService.getAll(data => this.setState({data: data}));
    }

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

	render() {
		return <Login navigation={this.props.navigation} data={JSON.stringify(this.state.data)} onLogin={() => this.login()} />;
	}
}