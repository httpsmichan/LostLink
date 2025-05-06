import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RegisterForm() {
  const navigation = useNavigation();

  // Default values for registration
  const defaultFullName = "Jane Doe";
  const defaultEmail = "janedoe@gmail.com";
  const defaultPassword = "janedoe123";

  // State to track form input values
  const [fullName, setFullName] = useState(defaultFullName);
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [confirmPassword, setConfirmPassword] = useState(defaultPassword); // Default password for confirmation field
  const [message, setMessage] = useState(""); // State for the message to display

  const handleRegister = () => {
    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }
    setMessage("Registration successful!");

    // After successful registration, navigate to Home screen
    setTimeout(() => {
      navigation.navigate("Home"); // Navigate to Home screen
    }, 2000); // Optional delay before navigation
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        placeholder="Full Name"
        style={styles.input}
        value={fullName} // Pre-fill with default full name
        onChangeText={(text) => setFullName(text)}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email} // Pre-fill with default email
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password} // Pre-fill with default password
        onChangeText={(text) => setPassword(text)}
      />

      <TextInput
        placeholder="Confirm Password"
        style={styles.input}
        secureTextEntry
        value={confirmPassword} // Pre-fill with default password for confirmation
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <Button title="Register" onPress={handleRegister} />

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.linkText}>Already have an account? Login here</Text>
      </TouchableOpacity>

      {/* Display the message at the bottom of the screen */}
      {message ? <Text style={styles.messageText}>{message}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
  },
  linkText: {
    marginTop: 20,
    textAlign: "center",
    color: "#007bff",
  },
  messageText: {
    position: "absolute",
    bottom: 20,
    left: 50, // This centers the message
    right: 50, // This centers the message
    textAlign: "center",
    fontSize: 14,
    color: "black", // Black text color
    backgroundColor: "rgba(240, 240, 240, 0.5)", // Gray background with 50% opacity
    paddingVertical: 5, // Add some padding for better visibility
    borderRadius: 20, // More rounded corners
  },
});
