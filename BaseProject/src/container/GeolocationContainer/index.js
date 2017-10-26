// @flow
import * as React from "react";
import Geolocation from "../../screens/Geolocation";
export interface Props {
	navigation: any,
}
export interface State {}
export default class GeolocationContainer extends React.Component<Props, State> {
	render() {
		return <Geolocation navigation={this.props.navigation} />;
	}
}
