// @flow
import * as React from "react";
import Home from "../../screens/Home";

export interface Props {
    navigation: any,
}
export interface State {}
export default class HomeContainer extends React.Component<Props, State> {
	render() {
        let data = [
			{name: "Hoang", phone: '0909009090'},
			{name: "Hoa", phone: '0909009091'},
			{name: "Hung", phone: '0909009092'},
			{name: "Hanh", phone: '0909009093'},
			{name: "Huong", phone: '0909009094'},
			{name: "Hue", phone: '0909009095'},
        ];
		return <Home navigation={this.props.navigation} list={data} />;
	}
}