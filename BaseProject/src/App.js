// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import Home from "./container/HomeContainer";
import Login from "./container/LoginContainer";
import Detail from "./container/DetailContainer";
import Sidebar from "./container/SidebarContainer";
import Demo from "./container/DemoContainer";

const Drawer = DrawerNavigator(
	{
		Home: { screen: Home },
		Demo: { screen: Demo },
	},
	{
		initialRouteName: "Home",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
        
		Login: { screen: Login },
		Detail: { screen: Detail },
		Drawer: { screen: Drawer },
	},
	{
		initialRouteName: "Login",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);