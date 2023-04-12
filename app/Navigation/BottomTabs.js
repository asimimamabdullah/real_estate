import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import {
	heart24,
	heart64,
	heartFilled24,
	home24,
	homeFilled64,
	search,
	user,
	userFilled24,
} from "../../assets/icons";

const TabsBottom = createBottomTabNavigator();

const BottomTabs = () => {
	return (
		<TabsBottom.Navigator
			screenOptions={{
				tabBarShowLabel: false,
				headerShown: false,
				tabBarStyle: {
					height: 85,
					borderWidth: 0,
					elevation: 0,
					paddingHorizontal: 20,
					bottom: 0,
					backgroundColor: "white",
					justifyContent: "center",
					alignItems: "center",
					paddingHorizontal: 60,
				},
			}}>
			<TabsBottom.Screen
				name="Home"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View
							style={{
								padding: 12,

								// justifyContent: "center",
								alignItems: "center",
								// gap: 4,
							}}>
							<Image
								source={focused ? homeFilled64 : home24}
								style={{
									width: 22,
									height: 22,
									tintColor: "rgb(35,79,104)",
								}}
							/>
							{focused && (
								<View
									style={{
										width: 6,
										height: 6,
										borderRadius: 5,
										backgroundColor: "rgb(35,79,104)",
										position: "absolute",
										bottom: 0,
									}}
								/>
							)}
						</View>
					),
				}}
			/>

			<TabsBottom.Screen
				name="Search"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ padding: 12, alignItems: "center" }}>
							<Image
								source={search}
								style={{
									width: 22,
									height: 22,
									tintColor: "rgb(35,79,104)",
								}}
							/>
							{focused && (
								<View
									style={{
										width: 6,
										height: 6,
										borderRadius: 5,
										backgroundColor: "rgb(35,79,104)",
										position: "absolute",
										bottom: 0,
									}}
								/>
							)}
						</View>
					),
				}}
			/>

			<TabsBottom.Screen
				name="Favorite"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ padding: 12, alignItems: "center" }}>
							<Image
								source={focused ? heartFilled24 : heart24}
								style={{
									width: 22,
									height: 22,
									tintColor: "rgb(35,79,104)",
								}}
							/>
							{focused && (
								<View
									style={{
										width: 6,
										height: 6,
										borderRadius: 5,
										backgroundColor: "rgb(35,79,104)",
										position: "absolute",
										bottom: 0,
									}}
								/>
							)}
						</View>
					),
				}}
			/>

			<TabsBottom.Screen
				name="User"
				component={Home}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={{ padding: 12, alignItems: "center" }}>
							<Image
								source={focused ? userFilled24 : user}
								style={{
									width: 22,
									height: 22,
									tintColor: "rgb(35,79,104)",
								}}
							/>
							{focused && (
								<View
									style={{
										width: 6,
										height: 6,
										borderRadius: 5,
										backgroundColor: "rgb(35,79,104)",
										position: "absolute",
										bottom: 0,
									}}
								/>
							)}
						</View>
					),
				}}
			/>
		</TabsBottom.Navigator>
	);
};

export default BottomTabs;

const styles = StyleSheet.create({});
