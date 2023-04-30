import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { white_building } from "../../assets/images";
import { heart24, heartFilled24, location } from "../../assets/icons";

const HomeCard = ({ navigation, item }) => {
	const [isFavorite, setIsFavorite] = useState(false);
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate("Building")}
			style={{
				height: 185,
				padding: 10,
				borderRadius: 30,
				backgroundColor: "rgb(245,244,249)",
			}}>
			<View
				style={{
					flexDirection: "row",
					justifyContent: "space-between",
					gap: 20,
				}}>
				<View>
					<TouchableOpacity
						style={{
							position: "absolute",
							left: 10,
							top: 10,
							zIndex: 3,
							padding: 10,
							backgroundColor: isFavorite
								? "rgb(139,200,62)"
								: "rgb(210,211,216)",
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
						source={item?.image}
						style={{ height: 160, width: 130, borderRadius: 20 }}
						resizeMode="center"
					/>
				</View>
				{/* all text  */}
				<View style={{ flex: 1, gap: 5 }}>
					<View
						style={{
							alignItems: "flex-end",
						}}>
						<View
							style={{
								paddingVertical: 10,
								gap: 7,
								width: "75%",
							}}>
							<Text
								style={{
									fontSize: 18,
									fontWeight: 600,
									letterSpacing: 0.3,
									lineHeight: 24,
									color: "rgb(33,40,89)",
								}}>
								{item?.name}
							</Text>
							<View>
								<Image />
								<Text
									style={{
										fontWeight: 600,
										fontSize: 14,
										color: "rgb(33,40,89)",
									}}>
									{item?.rating}
								</Text>
							</View>
							<View
								style={{
									flexDirection: "row",
									alignItems: "center",
									gap: 7,
								}}>
								<Image
									source={location}
									style={{ width: 12, height: 12 }}
								/>
								<Text style={{ color: "rgb(33,40,89)" }}>
									{item?.place}
								</Text>
							</View>
						</View>
					</View>
					<View style={{}}>
						<Text style={{ color: "rgb(33,40,89)", letterSpacing: 0.2 }}>
							<Text
								style={{
									fontSize: 18,
									fontWeight: 700,
									color: "rgb(33,40,89)",
								}}>
								$ {item?.price}
							</Text>
							/month
						</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default HomeCard;

const styles = StyleSheet.create({});
