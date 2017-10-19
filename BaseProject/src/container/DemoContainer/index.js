// @flow
import * as React from "react";
import Demo from "../../screens/Demo";
export interface Props {
	navigation: any,
}
export interface State {}
export default class DemoContainer extends React.Component<Props, State> {
	render() {
		return <Demo navigation={this.props.navigation} />;
	}
}
