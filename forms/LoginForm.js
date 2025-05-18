import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Checkbox } from "react-native-paper";
import { Button } from "react-native-elements";
import LocationImage from "../components/images/location.png";

export default function LoginForm() {
  const navigation = useNavigation();

  const defaultEmail = "janedoe@gmail.com";
  const defaultPassword = "janedoe123";

  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false); // Dummy state for checkbox

  const handleLogin = () => {
    if (email === defaultEmail && password === defaultPassword) {
      setError("");
      setSuccess("Login successful!");
      setTimeout(() => {
        navigation.navigate("Home");
      }, 2000);
    } else {
      setError("Invalid email or password.");
      setSuccess("");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={LocationImage}
          style={styles.logoImage}
          resizeMode="contain"
        />
        <Text style={styles.title}>LogIn</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TouchableOpacity
          onPress={() => console.log("Forgot Password pressed")}
        >
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <View style={styles.checkboxContainer}>
          <Checkbox
            status={keepSignedIn ? "checked" : "unchecked"}
            onPress={() => setKeepSignedIn(!keepSignedIn)}
          />
          <Text style={styles.checkboxLabel}>Keep me signed in</Text>
        </View>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}
        {success ? <Text style={styles.successText}>{success}</Text> : null}

        <Button
          title="Login"
          onPress={handleLogin}
          buttonStyle={{
            backgroundColor: "#0FAEFF",
            borderRadius: 8,
            paddingVertical: 12,
          }}
          titleStyle={{
            fontSize: 18,
            fontWeight: "bold",
            backgroundColor: "#0FAEFF",
          }}
        />
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
        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.linkText}>Not a member yet? Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  inputLabel: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  forgotPasswordText: {
    color: "#007bff",
    marginBottom: 5,
    textAlign: "right",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#2c3e50",
  },
  formContainer: {
    backgroundColor: "#d3d9e3",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 12,
    marginBottom: 15,
    borderRadius: 6,
    backgroundColor: "#fff",
  },

  linkText: {
    marginTop: 30,
    textAlign: "center",
    color: "#007bff",
  },
  errorText: {
    textAlign: "center",
    fontSize: 14,
    color: "red",
    marginBottom: 10,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  logoImage: {
    width: 60,
    height: 60,
    alignSelf: "center",
  },
  successText: {
    textAlign: "center",
    fontSize: 14,
    color: "green",
    marginBottom: 10,
  },
  separatorContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  separatorText: {
    marginBottom: 15,
    fontSize: 14,
    color: "#777",
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
});
