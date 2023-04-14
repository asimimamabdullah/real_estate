import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { leftArrow, search } from "../../assets/icons";
import SearchCard from "../components/SearchCard";

const Search = ({ navigation }) => {
	const [searchText, setSearchText] = useState("");
	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingHorizontal: 20,
				backgroundColor: "#fff",
				gap: 15,
			}}>
			<View style={styles.backButtonView}>
				{/* back button  */}
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
					backgroundColor: "rgb(245,244,249)",
					flexDirection: "row",
					alignItems: "center",
					paddingHorizontal: 15,
					borderRadius: 18,
				}}>
				<TextInput
					value={searchText}
					placeholder="Search"
					onChangeText={(text) => setSearchText(text)}
					style={{
						paddingVertical: 20,
						flex: 1,
						color: "rgb(24,31,83)",
						fontSize: 16,
					}}
				/>
				<Image
					source={search}
					style={{ width: 20, height: 20, tintColor: "rgb(24,31,83)" }}
				/>
			</View>

			<Text
				style={{
					fontSize: 16,
					fontWeight: 500,
					letterSpacing: 0.2,
					lineHeight: 18,
				}}>
				Found <Text style={{ fontWeight: 700 }}>128</Text> estates
			</Text>

			<ScrollView
				contentContainerStyle={{
					flexDirection: "row",
					gap: 10,
					flexWrap: "wrap",
					justifyContent: "space-between",
					paddingVertical: 10,
				}}
				style={{}}>
				<SearchCard navigation={navigation} />
				<SearchCard navigation={navigation} />
				<SearchCard navigation={navigation} />
				<SearchCard navigation={navigation} />
			</ScrollView>
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
