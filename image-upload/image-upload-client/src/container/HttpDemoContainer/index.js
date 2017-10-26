// @flow
import * as React from "react";
import HttpDemo from "../../screens/HttpDemo";

var parseString = require('react-native-xml2js').parseString;

export interface Props {
	navigation: any,
}
export interface State {}
export default class HttpDemoContainer extends React.Component<Props, State> {

	getRequest(){
		console.log("[HttpDemoContainer:getRequest]");
		fetch(
			"https://jsonplaceholder.typicode.com/posts" + "?" + "userId=1",{
				method: "GET",
				headers: {
					'Content-type':'application/json'
				}
			}
		).then((result)=>{
			console.log("[HttpDemoContainer:getRequest]", result);
		}).catch((error)=>{
			console.log("[HttpDemoContainer:getRequest]", error);
		});
	}

	postRequest(){
		console.log("[HttpDemoContainer:postRequest]");
		fetch(
			"https://jsonplaceholder.typicode.com/posts",{
				method: "POST",
				headers: {
					'Content-type':'application/json'
				},
				body: JSON.stringify({
					userId: 1
				})
			}
		).then((result)=>{
			console.log("[HttpDemoContainer:getRequest]",result);
			console.log("[HttpDemoContainer:getRequest]", JSON.parse(result._bodyText));
		}).catch((error)=>{
			console.log("[HttpDemoContainer:getRequest]", error);
		});
	}

	demoXML() {
        fetch(
            "https://randomuser.me/api/?format=xml", {
                method: "GET",
                headers: {
                    "Content-type": "application/xml"
                }
            }
        ).then((response) => {
            parseString(
				response._bodyText,
				(repose, error)=>{
					console.log("[demoXML], ", error);
				}
			);
        }).catch((error) => {
            console.log("GET DEMO XML", error);
        });

    }

	render() {
		return <HttpDemo navigation={this.props.navigation} 
		onRequest={()=>{this.demoXML()}}/>;
	}
}
