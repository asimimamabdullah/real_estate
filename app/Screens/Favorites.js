import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchCard from "../components/SearchCard";
import { SafeAreaView } from "react-native-safe-area-context";

const Favorites = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{ backgroundColor: "#fff", flex: 1, paddingVertical: 10 }}>
			<ScrollView
				contentContainerStyle={{
					gap: 20,
					paddingVertical: 10,
					flex: 1,
					paddingHorizontal: 20,
				}}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						marginVertical: 20,
					}}>
					<Text style={{ fontSize: 18 }}>My Favourite</Text>
				</View>
				<View>
					<Text style={{ fontSize: 18 }}>
						<Text style={{ fontWeight: 700 }}>0</Text> estates
					</Text>
				</View>

				<View
					style={{
						flexDirection: "row",
						gap: 20,
						flexWrap: "wrap",
						justifyContent: "space-between",
						paddingVertical: 10,
					}}>
					<SearchCard navigation={navigation} />
					<SearchCard navigation={navigation} />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default Favorites;

const styles = StyleSheet.create({});
