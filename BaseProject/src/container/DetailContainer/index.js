// @flow
import * as React from "react";
import Detail from "../../screens/Detail";

export interface Props {
    navigation: any,
}
export interface State {}
export default class DetailContainer extends React.Component<Props, State> {
	render() {
		return <Detail navigation={this.props.navigation} />;
	}
}