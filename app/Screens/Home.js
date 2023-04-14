import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { downArrow, location, mic, search } from "../../assets/icons";
import HomeCard from "../components/HomeCard";
const Home = ({ navigation }) => {
	const [searchText, setSearchText] = useState("");
	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingHorizontal: 20,
				paddingTop: 15,
				gap: 20,
				backgroundColor: "#ffffff",
			}}>
			{/* locationView */}
			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity style={styles.locationView}>
					<Image
						source={location}
						style={{ width: 15, height: 15, tintColor: "#555555" }}
					/>
					<Text style={{ letterSpacing: 0.5, fontSize: 15 }}>
						Birmingham
					</Text>
					<Image
						source={downArrow}
						style={{ width: 14, height: 14, tintColor: "#555555" }}
					/>
				</TouchableOpacity>
			</View>

			{/* search view  */}
			<View
				style={{
					paddingHorizontal: 20,
					backgroundColor: "rgb(245,244,249)",
					borderRadius: 12,
					flexDirection: "row",
					alignItems: "center",
				}}>
				<View style={{ paddingRight: 15 }}>
					<Image
						source={search}
						style={{
							width: 18,
							height: 18,
							tintColor: "rgb(89,93,131)",
						}}
					/>
				</View>
				<TextInput
					value={searchText}
					placeholder="Search"
					onChangeText={(text) => setSearchText(text)}
					style={{ paddingVertical: 15, flex: 1 }}
				/>
				<View
					style={{
						paddingVertical: 10,
						paddingLeft: 20,
						borderLeftColor: "#cccccc",
						borderLeftWidth: 1,
					}}>
					<Image
						source={mic}
						style={{
							width: 18,
							height: 18,
							tintColor: "rgb(167,171,197)",
						}}
					/>
				</View>
			</View>

			<View style={{ gap: 10 }}>
				<HomeCard navigation={navigation} />
				<HomeCard navigation={navigation} />
				<HomeCard navigation={navigation} />
			</View>
		</SafeAreaView>
	);
};

export default Home;

const styles = StyleSheet.create({
	locationView: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 15,
		paddingHorizontal: 10,
		borderRadius: 40,
		gap: 8,
		borderColor: "#dddddd",
		borderWidth: 1,
	},
});
