import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { balloons_128, homeFilled64 } from "../../assets/icons";

const BookedQuery = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
				paddingHorizontal: 20,
				gap: 40,
			}}>
			<Image source={balloons_128} style={{ width: 130, height: 130 }} />
			<Text style={{}}>Successfully booked a query</Text>

			<View
				style={{
					position: "absolute",
					bottom: 40,
					flexDirection: "row",
				}}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Home")}
					style={{
						paddingVertical: 15,
						paddingHorizontal: 20,
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
						backgroundColor: "dodgerblue",
						borderRadius: 10,
						gap: 20,
						flex: 1,
					}}>
					<Image
						source={homeFilled64}
						style={{
							width: 24,
							height: 24,
							tintColor: "#fff",
							position: "absolute",
							left: 20,
						}}
					/>
					<Text style={{ color: "#fff", textAlign: "center" }}>
						Back to Home
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default BookedQuery;

const styles = StyleSheet.create({});
