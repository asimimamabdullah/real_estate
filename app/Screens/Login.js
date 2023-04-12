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
import { email, facebook, leftArrow, lock } from "../../assets/icons";

const Login = ({ navigation }) => {
	const [info, setInfo] = useState({ email: "", password: "" });
	const [passwordShow, setPasswordShow] = useState(true);
	return (
		<View
			style={{ flex: 1, backgroundColor: "#ffffff", paddingHorizontal: 20 }}>
			<SafeAreaView style={{ gap: 20 }}>
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
						style={{
							fontWeight: 400,
							fontSize: 24,
							letterSpacing: 1,
							color: "rgb(147,169,184)",
						}}>
						Let's{" "}
						<Text style={{ fontWeight: 700, color: "rgb(147,169,184)" }}>
							Sign In
						</Text>
					</Text>
				</View>

				{/* input fields  */}

				<View style={{ marginTop: 30, gap: 15 }}>
					<View style={styles.inputView}>
						<TextInput
							style={{ ...styles.input }}
							value={info?.email}
							placeholderTextColor="#666"
							hitSlop={8}
							placeholder="Email"
							textContentType="emailAddress"
							onChangeText={(text) =>
								setInfo((prevVal) => ({ ...prevVal, email: text }))
							}
						/>
						<Image source={email} style={styles.inputViewImage} />
					</View>

					<View style={styles.inputView}>
						<TextInput
							style={{ ...styles.input }}
							placeholderTextColor="#666"
							value={info.password}
							hitSlop={8}
							textContentType="password"
							secureTextEntry={passwordShow}
							placeholder="Password"
							onChangeText={(text) =>
								setInfo((prevVal) => ({ ...prevVal, password: text }))
							}
						/>
						<Image source={lock} style={styles.inputViewImage} />
					</View>
				</View>

				{/* terms of services  */}
				<View style={styles.termsOfService} hitSlop={5}>
					<Text style={styles.termsOfServiceText}>Forgot Password?</Text>
					<TouchableOpacity onPress={() => setPasswordShow(!passwordShow)}>
						<Text style={styles.termsOfServiceText}>show password</Text>
					</TouchableOpacity>
				</View>

				{/* button */}
				<View style={styles.submitButtonContainer}>
					<TouchableOpacity style={styles.submitButtonView}>
						<Text style={styles.submitButtonText}>Login</Text>
					</TouchableOpacity>
				</View>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						gap: 10,
					}}>
					<View
						style={{
							borderTopColor: "#dddddd",
							borderTopWidth: 1,
							height: 2,
							flex: 1,
						}}></View>
					<Text style={{ fontSize: 20, textAlignVertical: "center" }}>
						OR
					</Text>
					<View
						style={{
							borderTopColor: "#dddddd",
							borderTopWidth: 1,
							height: 2,
							flex: 1,
						}}></View>
				</View>

				{/* facebook button  */}
				<View>
					<TouchableOpacity style={styles.facebookButton}>
						<Image source={facebook} style={{ width: 32, height: 32 }} />
					</TouchableOpacity>
				</View>

				<View style={styles.register}>
					<Text style={{ fontSize: 14, color: "rgb(64,102,123)" }}>
						Don't have an account?{" "}
					</Text>
					<Text
						style={{
							fontWeight: 600,
							fontSize: 14,
							color: "rgb(64,102,139)",
						}}>
						Register
					</Text>
				</View>
			</SafeAreaView>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	backButtonView: { flexDirection: "row", marginVertical: 10 },
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

	facebookButton: {
		padding: 20,
		backgroundColor: "#eeeeee",
		borderRadius: 15,
		justifyContent: "center",
		alignItems: "center",
	},

	register: {
		flexDirection: "row",
		gap: 5,
		justifyContent: "center",
	},
});
