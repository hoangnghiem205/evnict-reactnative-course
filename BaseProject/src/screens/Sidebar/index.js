import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Home",
		caption: "Home",
	},
	{
		route: "Home",
		caption: "Menu 1",
	},
	{
		route: "Home",
		caption: "Menu 2",
    },
    {
		route: "Login",
		caption: "Logout",
	},
];

export interface Props {
	navigation: any,
}
export interface State {}

export default class Sidebar extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => this.props.navigation.navigate(data.route)}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
