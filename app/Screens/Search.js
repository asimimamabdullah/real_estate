import {
	Image,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { leftArrow, search } from "../../assets/icons";

const Search = () => {
	const [searchText, setSearchText] = useState("");
	return (
		<SafeAreaView
			style={{ flex: 1, paddingHorizontal: 20, backgroundColor: "#fff" }}>
			{/* back button  */}

			<View style={styles.backButtonView}>
				<TouchableOpacity
					style={styles.backButton}
					onPress={() => navigation.goBack()}>
					<Image source={leftArrow} style={styles.backButtonImage} />
				</TouchableOpacity>

				<Text
					style={{
						fontSize: 18,
						color: "rgb(38,44,92)",
						fontWeight: 500,
					}}>
					Search Results
				</Text>

				<View style={{ width: 30, height: 30 }} />
			</View>

			{/* Search */}

			<View
				style={{
					backgroundColor: "#eeeeee",
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 15,
					borderRadius: 15,
				}}>
				<TextInput
					value={searchText}
					placeholder="Search"
					style={{
						paddingVertical: 20,
						flex: 1,
						color: "rgb(54,60,107)",
						fontSize: 15,
						fontWeight: 500,
						// fontWeight: 500,
					}}
				/>
				<Image source={search} style={{ width: 18, height: 18 }} />
			</View>
			<View>
				<Text>Search</Text>
			</View>
		</SafeAreaView>
	);
};

export default Search;

const styles = StyleSheet.create({
	backButtonView: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	backButton: {
		padding: 15,
		borderRadius: 30,
		backgroundColor: "rgb(245,244,249)",
		marginVertical: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	backButtonImage: {
		width: 16,
		height: 16,
		tintColor: "rgb(23,29,82)",
	},
});
