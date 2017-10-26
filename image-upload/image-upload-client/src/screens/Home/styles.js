import { StyleSheet, PixelRatio } from "react-native";

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FBFAFA",
	},
	row: {
		flex: 1,
		alignItems: "center",
	},
	text: {
		fontSize: 20,
		marginBottom: 15,
		alignItems: "center",
	},
	mt: {
		marginTop: 18,
	},
	avatarContainer: {
		borderColor: '#9B9B9B',
		borderWidth: 1 / PixelRatio.get(),
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatar: {
		width: 250,
		height: 350
	}

});
export default styles;
