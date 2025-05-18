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
import { Button } from "react-native-elements";
import LocationImage from "../components/images/location.png";

export default function RegisterForm() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={LocationImage}
          style={styles.logoImage}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Register</Text>

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
              }}
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
              }}
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
    alignItems: "stretch",
    backgroundColor: "#ffffff",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
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
    color: "#007bff",
  },
  logoImage: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#2c3e50",
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
    backgroundColor: "#d3d9e3",
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
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
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    fontSize: 16,
    color: "#34495e",
  },
  nameInput: {
    marginTop: 10,
    marginBottom: 5,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    position: "relative",
  },
  passwordInput: {
    flex: 1,
    paddingRight: 40,
  },
  eyeIcon: {
    position: "absolute",
    right: 20,
    top: "50%",
    transform: [{ translateY: -12 }],
    padding: 5,
    marginTop: -10,
  },
  eyeIconImage: {
    width: 20,
    height: 20,
  },
  signUpButton: {
    backgroundColor: "#0FAEFF",
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
    color: "#3498db",
    textAlign: "center",
  },
  messageText: {
    marginTop: 20,
    textAlign: "center",
    color: "#e74c3c",
  },
});
