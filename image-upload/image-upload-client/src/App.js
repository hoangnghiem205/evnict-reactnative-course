// @flow
import React from "react";
import { StackNavigator, DrawerNavigator } from "react-navigation";
import { Root } from "native-base";
import HomeContainer from "./container/HomeContainer";
import Login from "./container/LoginContainer";
import Detail from "./container/DetailContainer";
import Sidebar from "./container/SidebarContainer";
import Demo from "./container/DemoContainer";
import HttpDemoContainer from "./container/HttpDemoContainer";
import MapContainer from "./container/MapContainer";
import GeolocationContainer from "./container/GeolocationContainer";

const Drawer = DrawerNavigator(
	{
		HomeContainer: { screen: HomeContainer },
		Demo: { screen: Demo },
	},
	{
		initialRouteName: "HomeContainer",
		contentComponent: props => <Sidebar {...props} />,
	}
);

const App = StackNavigator(
	{
		GeolocationContainer: {screen:GeolocationContainer},
		HttpDemoContainer: {screen: HttpDemoContainer},
		MapContainer: {screen: MapContainer},
		Login: { screen: Login },
		Detail: { screen: Detail },
		Drawer: { screen: Drawer },
		HomeContainer: { screen: HomeContainer }
	},
	{
		initialRouteName: "HomeContainer",
		headerMode: "none",
	}
);

export default () => (
	<Root>
		<App />
	</Root>
);