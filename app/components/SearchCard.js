import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";

import { white_building } from "../../assets/images";
import { heart24, heartFilled24, location, star24 } from "../../assets/icons";

const SearchCard = ({ navigation }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Building")}
			style={{
				padding: 10,
				paddingBottom: 20,
				borderRadius: 30,
				backgroundColor: "rgb(245,244,249)",
				flex: 1,
				minWidth: 150,
				gap: 8,
			}}>
			<View>
				<TouchableOpacity
					style={{
						position: "absolute",
						right: 10,
						top: 10,
						zIndex: 3,
						padding: 10,
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

				<Image
					source={white_building}
					resizeMode="center"
					style={{ borderRadius: 30, width: "100%", height: 180 }}
				/>

				<LinearGradient
					colors={[
						"#213f5690",
						"rgb(33,63,86)",
						"#213f5690",
						"rgb(33,63,86)",
					]}
					start={{ x: -0.8, y: 0.3 }}
					end={{ x: 0.7, y: 1.3 }}
					style={{
						bottom: 10,
						right: 10,
						position: "absolute",
						padding: 7,
						borderRadius: 12,
						// opacity: 0.8,
					}}>
					<Text
						style={{
							color: "#ffffff",
							fontSize: 10,
							letterSpacing: 0.3,
						}}>
						<Text style={{ fontWeight: 700, fontSize: 14 }}>$ 370</Text>
						/month
					</Text>
				</LinearGradient>
			</View>
			<Text
				style={{
					fontSize: 15,
					fontWeight: 600,
					letterSpacing: 0.2,
					color: "rgb(38,44,92)",
				}}>
				Bungalow House
			</Text>
			<View style={{ flexDirection: "row", gap: 5 }}>
				<View
					style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
					<Image source={star24} style={{ width: 13, height: 13 }} />
					<Text style={{ fontSize: 13, color: "rgb(38,44,92)" }}>4.7</Text>
				</View>
				<View
					style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
					<Image
						source={location}
						style={{ width: 14, height: 14, tintColor: "rgb(38,44,92)" }}
					/>
					<Text style={{ fontSize: 12, color: "rgb(38,44,92)" }}>
						Jakarta, Indonesia
					</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default SearchCard;

const styles = StyleSheet.create({});
