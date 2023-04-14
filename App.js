import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./app/Screens/Register";
import Login from "./app/Screens/Login";
import BottomTabs from "./app/Navigation/BottomTabs";
import Search from "./app/Screens/Search";
import Building from "./app/Screens/Building";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="Tabs">
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Tabs" component={BottomTabs} />
				<Stack.Screen name="Search" component={Search} />
				<Stack.Screen name="Building" component={Building} />

				{/* <Stack.Screen name="Home" component={Home} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({});
