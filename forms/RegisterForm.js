import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements"; // Added react-native-elements

export default function RegisterForm() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("Registration successful!");
    setTimeout(() => {
      navigation.navigate("Home");
    }, 2000);
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      {/* Logo (Placeholder - You can replace this with your actual logo) */}
      <View style={styles.logoContainer}>
        <Text style={styles.logo}>Logo</Text>
      </View>

      <Text style={styles.title}>Welcome!</Text>

      {/* Form Container */}
      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <TextInput
          placeholder=""
          style={[styles.input, styles.nameInput]}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder=""
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputLabel}>Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder=""
            style={[styles.input, styles.passwordInput]}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={togglePasswordVisibility}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/a1/6b/e3/a16be3ace82df3682c215886f31fc929.jpg",
              }} // URL of the eye icon
              style={styles.eyeIconImage}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.inputLabel}>Confirm Password</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder=""
            style={[styles.input, styles.passwordInput]}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={toggleConfirmPasswordVisibility}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/a1/6b/e3/a16be3ace82df3682c215886f31fc929.jpg",
              }} // URL of the eye icon
              style={styles.eyeIconImage}
            />
          </TouchableOpacity>
        </View>

        <Button
          title="Sign Up"
          onPress={handleRegister}
          buttonStyle={styles.signUpButton}
          titleStyle={styles.signUpButtonText}
        />

        {message ? <Text style={styles.messageText}>{message}</Text> : null}
      </View>

      <View style={styles.separatorContainer}>
        <Text style={styles.separatorText}>
          -------- or continue with --------
        </Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/59/7f/11/597f11b631d7d94492f1adb95110cc44.jpg",
              }}
              style={styles.socialButtonImage}
            />
            <Text style={styles.socialButtonText}>Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButton}>
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/57/89/43/578943fe258769a4d9e457ea0809a22d.jpg",
              }}
              style={styles.socialButtonImage}
            />

            <Text style={styles.socialButtonText}>Facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.loginLink}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "stretch", // Make children stretch to container width
    backgroundColor: "#ffffff", // Light blueish background
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  separatorText: {
    marginBottom: 15,
    fontSize: 14,
    color: "#777",
  },
  separatorContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  logo: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#007bff", // Blue color
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#2c3e50", // Dark gray title
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
    backgroundColor: "#f5f5f5",
    padding: 10,
    borderRadius: 6,
  },
  socialButtonImage: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialButtonText: {
    fontSize: 16,
    color: "#333",
  },
  formContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    elevation: 5, // Adds shadow for Android devices
    shadowColor: "#000", // For iOS shadow
    shadowOpacity: 0.1, // For iOS shadow
    shadowRadius: 8, // For iOS shadow
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    marginBottom: 5,
    borderRadius: 8,
    backgroundColor: "#ffffff", // White input background
    borderWidth: 1,
    borderColor: "#e0e0e0", // Light gray border
    fontSize: 16,
    color: "#34495e", // Darker text color
  },
  nameInput: {
    marginTop: 10, // Adjust this value as needed
    marginBottom: 5, // Adjust this value as needed
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    position: "relative", // Add this to position the icon absolutely
  },
  passwordInput: {
    flex: 1,
    paddingRight: 40, // Make space for the icon
  },
  eyeIcon: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: [{ translateY: -12 }], // Center the icon vertically
    padding: 5,
    marginTop: -10,
  },
  eyeIconImage: {
    width: 20, // Adjust size as necessary
    height: 20, // Adjust size as necessary
  },
  signUpButton: {
    backgroundColor: "#3498db", // Blue button color
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 10,
  },
  signUpButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginLink: {
    marginTop: 25,
    fontSize: 14,
    color: "#3498db", // Blue link color
    textAlign: "center",
  },
  messageText: {
    marginTop: 20,
    textAlign: "center",
    color: "#e74c3c", // Red error message color
  },
});
