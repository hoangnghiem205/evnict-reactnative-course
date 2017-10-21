// @flow
import * as React from "react";
import Login from "../../screens/Login";
import { Item, Input, Icon, Toast, Form } from "native-base";


var parseString = require('react-native-xml2js').parseString;

export interface Props {
    navigation: any,
}

import UserModel from "../../models/UserModel";

export interface State { }
export default class LoginContainer extends React.Component<Props, State> {

    constructor(props) {
        super(props);
        this.userModel = new UserModel();
        this.demoGET();
        this.demoPOST();
        this.demoXML();
    }

    demoGET() {
        fetch(
            "https://jsonplaceholder.typicode.com/posts?userId=1", {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-type": "application/json"
                },
            }
        ).then((response) => {
            console.log("GET DEMO result", JSON.parse(response._bodyInit));
        }).catch((error) => {
            console.log("GET DEMO Error", error);
        }
            );

    }

    demoPOST() {
        console.log("POST DEMO result");
        fetch(
            "http://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    title: "foo",
                    body: "bar",
                    userID: 1
                })
            }
        ).
            then((response) => {
                console.log("POST DEMO result", JSON.parse(response._bodyInit));
            })
            .catch((error) => {
                console.log("POST DEMO Error", error);
            }
            );
    }

    demoXML(){
        fetch(
            "https://randomuser.me/api/?format=xml", {
                method: "GET",
                headers: {
                    "Accept": "application/xml",
                    "Content-type": "application/xml"
                },
            }
        ).then((response) => {
            console.log("GET DEMO XML", response._bodyInit);

            parseString(response._bodyInit, function (err, result) {
                console.log(" parseString GET DEMO XML", result);
            });


        }).catch((error) => {
            console.log("GET DEMO XML", error);
        }
            );

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