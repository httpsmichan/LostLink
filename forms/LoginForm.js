// LoginForm.js
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

export default function LoginForm() {
  const navigation = useNavigation();

  // Default credentials
  const defaultEmail = "janedoe@gmail.com";
  const defaultPassword = "janedoe123";

  // State to track email, password, success, and error message
  const [email, setEmail] = useState(defaultEmail); // Pre-fill email with default
  const [password, setPassword] = useState(defaultPassword); // Pre-fill password with default
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // Success message state

  const handleLogin = () => {
    // Check if email and password match the default ones
    if (email === defaultEmail && password === defaultPassword) {
      setError(""); // Clear any previous error
      setSuccess("Login successful!"); // Set success message
      setTimeout(() => {
        navigation.navigate("Home"); // Navigate to Home after 2 seconds
      }, 2000);
    } else {
      setError("Invalid email or password."); // Set error message
      setSuccess(""); // Clear success message if there's an error
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        value={email} // Set the value of email field to the email state
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={password} // Set the value of password field to the password state
        onChangeText={(text) => setPassword(text)}
      />

      {/* Display error message if there's one */}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {/* Display success message if login is successful */}
      {success ? <Text style={styles.successText}>{success}</Text> : null}

      <Button title="Login" onPress={handleLogin} />

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={styles.linkText}>Not a member yet? Register here</Text>
      </TouchableOpacity>
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
  errorText: {
    position: "absolute",
    bottom: 20,
    left: 50,
    right: 50,
    textAlign: "center",
    fontSize: 14,
    color: "black",
    backgroundColor: "rgba(240, 240, 240, 0.5)", // Gray background with 50% opacity
    paddingVertical: 5,
    borderRadius: 20,
  },
  successText: {
    position: "absolute",
    bottom: 20,
    left: 50,
    right: 50,
    textAlign: "center",
    fontSize: 14,
    color: "black",
    backgroundColor: "rgba(240, 240, 240, 0.5)", // Success background
    paddingVertical: 5,
    borderRadius: 20,
  },
});
