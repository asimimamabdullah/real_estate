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
import { Picker } from "@react-native-picker/picker";
import { downArrow, location, mic, search } from "../../assets/icons";
import HomeCard from "../components/HomeCard";
const Home = ({ navigation }) => {
	const [searchText, setSearchText] = useState("");
	const [selectedCity, setSelectedCity] = useState("Birmingham");
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

					<Picker
						style={{
							// backgroundColor: "purple",
							padding: 10,
							flex: 1,
						}}
						itemStyle={{ fontSize: 11 }}
						mode="dialog"
						selectedValue={selectedCity}
						onValueChange={(val, _index) => setSelectedCity(val)}>
						<Picker.Item label="Jakarta" value="Jakarta" />
						<Picker.Item label="Sydney" value="Sydney" />
						<Picker.Item label="Torronto" value="Torronto" />
						<Picker.Item label="Moscow" value="Moscow" />
						<Picker.Item label="Istanbul" value="Istanbul" />
						<Picker.Item label="London" value="London" />
					</Picker>
					{/* <Image
						source={downArrow}
						style={{ width: 14, height: 14, tintColor: "#555555" }}
					/> */}
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
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 40,
		gap: 8,
		borderColor: "#dddddd",
		borderWidth: 1,
		minWidth: 200,
	},
});
