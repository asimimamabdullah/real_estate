import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./app/Screens/Register";
import Login from "./app/Screens/Login";
import BottomTabs from "./app/Navigation/BottomTabs";
import Search from "./app/Screens/Search";
import Building from "./app/Screens/Building";
import { Provider } from "react-redux";
import { store } from "./app/app/store";
import BookedQuery from "./app/Screens/BookedQuery";
import IsAuth from "./app/components/IsAuth";
import Maps from "./app/Screens/Maps";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<IsAuth>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{ headerShown: false }}
						initialRouteName="Tabs">
						<Stack.Screen name="Register" component={Register} />
						<Stack.Screen name="Login" component={Login} />
						<Stack.Screen name="Tabs" component={BottomTabs} />
						<Stack.Screen name="Search" component={Search} />
						<Stack.Screen name="Building" component={Building} />
						<Stack.Screen name="Booked" component={BookedQuery} />
						<Stack.Screen name="Maps" component={Maps} />
						{/* <Stack.Screen name="Home" component={Home} /> */}
					</Stack.Navigator>
				</NavigationContainer>
			</IsAuth>
		</Provider>
	);
}

const styles = StyleSheet.create({});
