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
import Search from "../Screens/Search";
import Favorites from "../Screens/Favorites";
import Profile from "../Screens/Profile";

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
					borderTopWidth: 0,
					paddingHorizontal: 20,
					bottom: 0,
					backgroundColor: "#fff",
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
								alignItems: "center",
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
				component={Search}
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
				component={Favorites}
				options={{
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: { borderBottomWidth: 0 },
					headerTitleStyle: { borderBottomWidth: 0 },
					headerTitle: "My favourite",
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
				component={Profile}
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
