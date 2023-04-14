import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { email, facebook, leftArrow, search, user } from "../../assets/icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { random_girl } from "../../assets/images";

const Profile = ({ navigation }) => {
	return (
		<SafeAreaView
			style={{
				flex: 1,
				backgroundColor: "#ffffff",
				paddingHorizontal: 20,
				gap: 20,
				justifyContent: "space-between",
				paddingVertical: 10,
			}}>
			{/* headder  */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "center",
					alignItems: "center",
					height: 54,
				}}>
				{/* back button  */}
				<TouchableOpacity
					style={{
						...styles.backButton,
					}}
					onPress={() => navigation.goBack()}>
					<Image source={leftArrow} style={styles.backButtonImage} />
				</TouchableOpacity>

				<Text
					style={{
						textAlign: "center",
						textAlignVertical: "center",
						fontSize: 15,
						fontWeight: 600,
					}}>
					Profile
				</Text>
			</View>

			{/* image  */}
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Image
					source={random_girl}
					style={{ width: 150, height: 150, borderRadius: 90 }}
				/>
			</View>

			{/* data fields */}

			<View style={{ gap: 15 }}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 25,
						backgroundColor: "rgb(245,244,249)",
						borderRadius: 15,
					}}>
					<Text>Mathew Adam</Text>
					<Image source={user} style={{ width: 16, height: 16 }} />
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 25,
						backgroundColor: "rgb(245,244,249)",
						borderRadius: 15,
					}}>
					<Text>+62 112-3288-9111</Text>
					<Image source={user} style={{ width: 16, height: 16 }} />
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						padding: 25,
						backgroundColor: "rgb(245,244,249)",
						borderRadius: 15,
					}}>
					<Text>Mathew@email.com</Text>
					<Image source={email} style={{ width: 16, height: 16 }} />
				</View>

				<TouchableOpacity
					style={{
						flexDirection: "row",
						gap: 10,
						padding: 25,
						backgroundColor: "rgb(245,244,249)",
						borderRadius: 15,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Image source={facebook} style={{ width: 28, height: 28 }} />
					<Text style={{ fontSize: 18 }}>Link</Text>
				</TouchableOpacity>
			</View>

			<View style={{ bottom: 0 }}>
				<TouchableOpacity
					style={{
						backgroundColor: "rgb(139,200,63)",
						borderRadius: 12,
						padding: 20,
						justifyContent: "center",
					}}>
					<Text
						style={{ color: "#fff", fontSize: 15, textAlign: "center" }}>
						Choose Location
					</Text>
				</TouchableOpacity>
			</View>

			{/* <Text>Profile</Text> */}
		</SafeAreaView>
	);
};

export default Profile;

const styles = StyleSheet.create({
	backButton: {
		padding: 20,
		borderRadius: 30,
		backgroundColor: "rgb(245,244,249)",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 0,
		left: 0,
		zIndex: 4,
	},
	backButtonImage: {
		width: 14,
		height: 14,
		tintColor: "rgb(23,29,82)",
	},
});
