// @flow
import * as React from "react";
import Home from "../../screens/Home";
import ContactModel from "../../models/ContactModel";



export interface Props {
	navigation: any,
}
export interface State { }
export default class HomeContainer extends React.Component<Props, State> {

	constructor(props) {
		super(props);
		this.state = { record:[] };
	}

	componentWillMount() {
		this.contactModel = new ContactModel();
		this.contactModel.getAll( results => {
			this.setState({ record: results });
		});
	}

	render() {
		return <Home navigation={this.props.navigation} list={this.state.record} />;
	}
}