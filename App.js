import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ImageBackground,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "react-native-vector-icons/Feather";

import LoginForm from "./forms/LoginForm";
import RegisterForm from "./forms/RegisterForm";
import Home from "./components/Home";
import Upload from "./components/Upload";
import Match from "./components/Match";
import Report from "./components/Report";
import Profile from "./components/Profile";
import Ownership from "./components/Ownership";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 🎯 Bottom Tabs
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="upload" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Match"
        component={Match}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Report"
        component={Report}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="flag" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// 🎬 Splash Screen
function SplashScreen({ navigation }) {
  const [showMain, setShowMain] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => setShowMain(true));
  }, []);

  if (showMain) {
    return (
      <ImageBackground
        source={require("./components/images/gps.jpg")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.topSection}></View>

          <View style={styles.bottomSection}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
        <StatusBar style="dark" />
      </ImageBackground>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.gradientOverlay, { opacity: fadeAnim }]}>
        <LinearGradient
          colors={["#0FAEFF", "#ffffff"]}
          style={StyleSheet.absoluteFillObject}
          start={{ x: 0.5, y: 0.5 }}
          end={{ x: 1, y: 1 }}
        />
      </Animated.View>
      <StatusBar style="light" />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginForm} />
        <Stack.Screen name="Register" component={RegisterForm} />
        <Stack.Screen name="Home" component={MainTabs} />
        <Stack.Screen name="Ownership" component={Ownership} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  gradientOverlay: {
    ...StyleSheet.absoluteFillObject,
  },
  mainContent: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  getStartedText: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#0066cc",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContent: {
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: 30,
    borderRadius: 15,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  topSection: {
    marginTop: 80,
    alignItems: "center",
  },
  bottomSection: {
    alignItems: "center",
  },

  getStartedText: {
    fontSize: 48,
    fontWeight: "900",
    color: "#becde6",
    marginBottom: 20,
    letterSpacing: 2,
    textTransform: "uppercase",
    textShadowColor: "#010101",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  button: {
    backgroundColor: "#0FAEFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 30,
    width: "200%",
  },
  buttonText: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
