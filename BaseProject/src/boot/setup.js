import * as React from "react";
import App from "../App";
export interface Props {}
export interface State {}
export default class Setup extends React.Component<Props, State> {
	constructor() {
		super();
	}

	render() {
		return (
		    <App />
		);
	}
}
