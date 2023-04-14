import {
	Button,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { white_building } from "../../assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	heart24,
	heartFilled24,
	leftArrow,
	location,
	star24,
} from "../../assets/icons";
import { LinearGradient } from "expo-linear-gradient";

const Building = ({ navigation }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [buyType, setBuyType] = useState("");
	return (
		<SafeAreaView
			style={{
				flex: 1,
				paddingHorizontal: 15,
				backgroundColor: "#ffffff",
				gap: 10,
			}}>
			{/* Image  */}
			<View style={{ flex: 0.9, marginBottom: 10 }}>
				{/* back button  */}
				<TouchableOpacity
					style={{
						...styles.backButton,
					}}
					onPress={() => navigation.goBack()}>
					<Image source={leftArrow} style={styles.backButtonImage} />
				</TouchableOpacity>

				<Image
					source={white_building}
					style={{
						flex: 1,
						height: "100%",
						width: "100%",
						minWidth: 250,
						minHeight: 450,
						borderRadius: 30,
					}}
				/>

				{/* favorite button  */}
				<TouchableOpacity
					style={{
						position: "absolute",
						right: 10,
						top: 10,
						zIndex: 3,
						padding: 18,
						backgroundColor: isFavorite
							? "rgb(139,200,62)"
							: "rgb(218,225,235)",
						borderRadius: 30,
						alignItems: "center",
						justifyContent: "center",
					}}
					onPress={() => setIsFavorite(!isFavorite)}>
					<Image
						source={isFavorite ? heartFilled24 : heart24}
						style={{
							width: 16,
							height: 16,
							tintColor: isFavorite ? "#ffffff" : "red",
						}}
					/>
				</TouchableOpacity>

				<View
					style={{
						position: "absolute",
						bottom: 10,
						left: 10,
						flexDirection: "row",
						alignItems: "center",
						gap: 10,
					}}>
					<LinearGradient
						colors={[
							"rgb(33,63,86)",
							"#213f5699",
							"rgb(33,63,86)",
							"#213f5699",
						]}
						start={{ x: -0.8, y: 0.3 }}
						end={{ x: 0.7, y: 1.3 }}
						style={{
							paddingVertical: 12,
							paddingHorizontal: 20,
							borderRadius: 25,
							flexDirection: "row",
							alignItems: "center",
							gap: 8,
						}}>
						<Image source={star24} style={{ width: 20, height: 20 }} />
						<Text
							style={{
								color: "rgb(35,79,104)",
								fontSize: 14,
								fontWeight: 700,
								letterSpacing: 0.2,
								zIndex: 4,
								color: "#ffffff",
							}}>
							4.9
						</Text>
					</LinearGradient>
					<LinearGradient
						colors={[
							"rgb(33,63,86)",
							"#213f5699",
							"rgb(33,63,86)",
							"#213f5699",
						]}
						start={{ x: -0.8, y: 0.3 }}
						end={{ x: 0.7, y: 1.3 }}
						style={{
							paddingVertical: 12,
							paddingHorizontal: 20,
							borderRadius: 25,
							flexDirection: "row",
							alignItems: "center",
							gap: 8,
						}}>
						<Text style={{ color: "#ffffff" }}>Apartment</Text>
					</LinearGradient>
				</View>
			</View>

			{/* text */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
					marginBottom: 20,
				}}>
				<View style={{ gap: 10 }}>
					<Text
						style={{ fontSize: 20, fontWeight: 700, letterSpacing: 0.1 }}>
						Wings Tower
					</Text>
					<View
						style={{
							flexDirection: "row",
							gap: 5,
							alignItems: "flex-end",
						}}>
						<Image
							source={location}
							style={{
								width: 14,
								height: 14,
								tintColor: "rgb(22,69,107)",
							}}
						/>
						<Text style={{ fontSize: 14, color: "rgb(22,69,107)" }}>
							Jakarta, Indosia
						</Text>
					</View>
				</View>
				<View style={{ gap: 10 }}>
					<Text
						style={{ fontSize: 20, fontWeight: 700, letterSpacing: 0.1 }}>
						$ 220
					</Text>
					<Text
						style={{
							color: "rgb(22,69,107)",
							// textAlignVertical: "center",
						}}>
						per month
					</Text>
				</View>
			</View>

			{/* buttons */}
			<View style={{ flexDirection: "row", gap: 20, marginBottom: 10 }}>
				<TouchableOpacity
					onPress={() => {
						if (buyType === "Rent") setBuyType("");
						else setBuyType("Rent");
					}}
					style={{
						paddingHorizontal: 20,
						paddingVertical: 13,
						backgroundColor:
							buyType === "Rent"
								? "rgb(35,79,104)"
								: buyType === ""
								? "rgb(245,244,249)"
								: "rgb(245,244,249)",
						borderRadius: 12,
					}}>
					<Text
						style={{
							fontSize: 14,
							color:
								buyType === "Rent"
									? "#ffffff"
									: buyType === ""
									? "rgb(35,79,104)"
									: "rgb(35,79,104)",
						}}>
						Rent
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => {
						if (buyType === "Buy") setBuyType("");
						else setBuyType("Buy");
					}}
					style={{
						paddingHorizontal: 20,
						paddingVertical: 13,
						backgroundColor:
							buyType === "Buy"
								? "rgb(35,79,104)"
								: buyType === ""
								? "rgb(245,244,249)"
								: "rgb(245,244,249)",
						borderRadius: 12,
					}}>
					<Text
						style={{
							fontSize: 14,
							color:
								buyType === "Buy"
									? "#ffffff"
									: buyType === ""
									? "rgb(35,79,104)"
									: "rgb(35,79,104)",
						}}>
						Buy
					</Text>
				</TouchableOpacity>
			</View>

			{/* Send query button  */}
			<View
				style={{
					paddingVertical: 15,
					marginTop: 20,
					paddingHorizontal: 30,
					borderTopColor: "rgb(241,242,246)",
					borderTopWidth: 1,
				}}>
				<TouchableOpacity
					style={{
						backgroundColor: "rgb(139,200,63)",
						borderRadius: 15,
						paddingVertical: 20,
						paddingHorizontal: 20,
					}}>
					<Text
						style={{
							color: "#ffffff",
							fontWeight: 500,
							letterSpacing: 0.3,
							fontSize: 17,
							textAlign: "center",
							textAlignVertical: "center",
						}}>
						Send query
					</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

export default Building;

const styles = StyleSheet.create({
	backButton: {
		padding: 20,
		borderRadius: 30,
		backgroundColor: "rgb(245,244,249)",
		justifyContent: "center",
		alignItems: "center",
		position: "absolute",
		top: 10,
		left: 10,
		zIndex: 4,
	},
	backButtonImage: {
		width: 14,
		height: 14,
		tintColor: "rgb(23,29,82)",
	},
});
