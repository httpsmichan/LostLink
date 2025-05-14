import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

// Import the local image
import profileImage from "../components/images/izel.jpg"; // Adjust the path if necessary

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topContainer}>
        <View style={styles.imageWrapper}>
          <View style={styles.imageContainer}>
            {/* Use the local image */}
            <Image source={profileImage} style={styles.profileImage} />
          </View>
        </View>
      </View>

      {/* Name and Email */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Roselda "Aizel" Apares</Text>
        <Text style={styles.email}>roselda.apares@hcdc.edu.ph</Text>
      </View>

      {/* Menu Items */}
      {[
        { label: "History", icon: "history" },
        { label: "Settings", icon: "cog" },
        { label: "Help and Support", icon: "question-circle" },
        { label: "Logout", icon: "sign-out-alt", color: "#FF6B6B" },
      ].map((item, index) => (
        <View key={index} style={styles.menuItemContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesome5
              name={item.icon}
              size={16}
              color={item.color || "#777"}
              style={styles.menuItemIcon}
            />
            <Text
              style={[
                styles.menuItemText,
                item.color ? { color: item.color } : null,
              ]}
            >
              {item.label}
            </Text>
            <FontAwesome5 name="chevron-right" size={14} color="#999" />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  topContainer: {
    backgroundColor: "#e0e0f8",
    paddingTop: 100,
    paddingBottom: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: "center",
    position: "relative",
  },
  imageWrapper: {
    position: "absolute",
    bottom: -45,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    borderRadius: 100,
    overflow: "hidden",
    backgroundColor: "#fff",
    borderWidth: 10,
    borderColor: "#f9f9f9",
  },

  profileImage: {
    width: 120,
    height: 120,
  },
  infoContainer: {
    marginTop: 60,
    alignItems: "center",
    marginBottom: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  email: {
    fontSize: 13,
    color: "#777",
  },
  menuItemContainer: {
    paddingHorizontal: 15,
    marginVertical: 6,
  },
  menuItem: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    justifyContent: "space-between",
  },
  menuItemIcon: {
    marginRight: 12,
    width: 20,
    alignItems: "center",
    color: "#777",
  },
  menuItemText: {
    fontSize: 15,
    color: "#333",
    flexGrow: 1,
  },
});

export default Profile;
