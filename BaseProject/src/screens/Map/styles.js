import { StyleSheet } from "react-native";

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
    map: {
        flex: 1
	},
	container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    bubble: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        paddingHorizontal: 18,
        paddingVertical: 12,
        borderRadius: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginVertical: 20,
        backgroundColor: 'transparent',
    },
});
export default styles;
