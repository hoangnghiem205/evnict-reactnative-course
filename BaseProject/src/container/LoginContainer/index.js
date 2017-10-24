// @flow
import * as React from "react";
import Login from "../../screens/Login";
import { Item, Input, Icon, Toast, Form } from "native-base";

import UserService from '../../services/UserService';

export interface Props {
	navigation: any,
}
export interface State {}
export default class LoginContainer extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    async componentWillMount() {
        console.log("Will mount");
        let userService = new UserService();
        let data = await userService.getAll();
        this.setState({data: data});
    }

    getMovie() {
        fetch('http://jsonplaceholder.typicode.com/users/1')
        .then((response) => response.json())
        .then((responseJson) => {
            console.log(responseJson);
            this.setState({data: responseJson});
        })
    }
    async getMoviesFromApi() {
        try {
            let response = await fetch('http://jsonplaceholder.typicode.com/users/1');
            let responseJson = await response.json();
            console.log('function ' ,responseJson);
            this.setState({data: responseJson});
            return responseJson;
        } catch(error) {
            console.error(error);
        }
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

    upload() {

    }

    getData() {

    }

	render() {
		return <Login navigation={this.props.navigation} data={JSON.stringify(this.state.data)} onLogin={() => this.login()} />;
	}
}