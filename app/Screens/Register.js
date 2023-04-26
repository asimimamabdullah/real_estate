import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { email, leftArrow, lock, user } from "../../assets/icons";
import { setCredentials } from "../redux/auth/authSlice";
import { useRegisterMutation } from "../redux/auth/register";

const Register = ({ navigation }) => {
	const [info, setInfo] = useState({ name: "", email: "", password: "" });
	const [errMsg, setErrMsg] = useState(null);
	const [register, { loading }] = useRegisterMutation();
	const dispatch = useDispatch();

	const handleRegister = async () => {
		try {
			const userData = await register({ ...info }).unwrap();
			await AsyncStorage.setItem("token", userData.accessToken);

			dispatch(setCredentials({ ...userData }));
			navigation.navigate("Home");
		} catch (error) {
			console.log("error register: ", error);
			setErrMsg(error?.data?.message);
		}
	};

	return (
		<View
			style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 20 }}>
			<SafeAreaView style={{ gap: 30 }}>
				{/* back button  */}
				<View style={styles.backButtonView}>
					<TouchableOpacity
						style={styles.backButton}
						onPress={() => navigation.goBack()}>
						<Image source={leftArrow} style={styles.backButtonImage} />
					</TouchableOpacity>
				</View>

				<View style={{ marginVertical: 15 }}>
					<Text
						style={{ fontWeight: 400, fontSize: 24, letterSpacing: 1 }}>
						Create your <Text style={{ fontWeight: 700 }}>account</Text>
					</Text>
				</View>

				{/* input fields  */}

				<View style={{ marginTop: 20, gap: 15 }}>
					<View style={styles.inputView}>
						<Image source={user} style={styles.inputViewImage} />
						<TextInput
							style={{ ...styles.input }}
							value={info?.name}
							placeholderTextColor="#666"
							hitSlop={8}
							placeholder="Full Name"
							onChangeText={(text) =>
								setInfo((prevVal) => ({ ...prevVal, name: text }))
							}
						/>
					</View>

					<View style={styles.inputView}>
						<Image source={email} style={styles.inputViewImage} />
						<TextInput
							style={{ ...styles.input }}
							value={info?.email}
							placeholderTextColor="#666"
							hitSlop={8}
							placeholder="Email"
							onChangeText={(text) =>
								setInfo((prevVal) => ({ ...prevVal, email: text }))
							}
						/>
					</View>

					<View style={styles.inputView}>
						<Image source={lock} style={styles.inputViewImage} />
						<TextInput
							style={{ ...styles.input }}
							placeholderTextColor="#666"
							value={info.password}
							hitSlop={8}
							// style={{ paddingHorizontal: 10 }}
							placeholder="Password"
							onChangeText={(text) =>
								setInfo((prevVal) => ({ ...prevVal, password: text }))
							}
						/>
					</View>
				</View>

				{/* terms of services  */}
				<View style={styles.termsOfService} hitSlop={5}>
					<Text style={styles.termsOfServiceText}>Terms of service</Text>
					<TouchableOpacity>
						<Text style={styles.termsOfServiceText}>show password</Text>
					</TouchableOpacity>
				</View>

				{/* button */}
				<View style={styles.submitButtonContainer}>
					<TouchableOpacity
						style={styles.submitButtonView}
						onPress={handleRegister}>
						<Text style={styles.submitButtonText}>Register</Text>
					</TouchableOpacity>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Register;

const styles = StyleSheet.create({
	backButtonView: { flexDirection: "row" },
	backButton: {
		padding: 15,
		borderRadius: 30,
		backgroundColor: "rgb(245,244,249)",
		marginVertical: 10,
		justifyContent: "center",
		alignItems: "center",
	},
	backButtonImage: {
		width: 16,
		height: 16,
		tintColor: "rgb(23,29,82)",
	},
	inputView: {
		paddingHorizontal: 15,
		backgroundColor: "#eeeeee",
		borderRadius: 12,
		flexDirection: "row",
		alignItems: "center",
		gap: 15,
	},
	inputViewImage: {
		width: 18,
		height: 18,
	},
	input: { paddingVertical: 20, flex: 1 },
	termsOfService: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	termsOfServiceText: { fontWeight: 600, color: "rgb(64,102,123)" },
	submitButtonContainer: { marginVertical: 20 },
	submitButtonView: {
		padding: 20,
		backgroundColor: "rgb(139,200,63)",
		borderRadius: 15,
		justifyContent: "center",
	},
	submitButtonText: {
		fontSize: 18,
		color: "#fff",
		textAlign: "center",
	},
});
