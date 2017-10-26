import * as React from "react";
import App from "../App";
export interface Props {}
export interface State {}

import InitDatabase from "../models/InitDatabase";

export default class Setup extends React.Component<Props, State> {
	constructor() {
		super();
		var initModel = new InitDatabase();
		initModel.initTable();
	}

	render() {
		return (
		    <App />
		);
	}
}
