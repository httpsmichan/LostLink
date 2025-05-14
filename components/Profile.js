import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Profile = () => {
  return (
    <View style={styles.container}>
      {/* Top Container */}
      <View style={styles.topContainer}>
        <Image
          source={{ uri: "https://via.placeholder.com/100x100" }} // Added placeholder image
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Roselda "Aizel" Apares</Text>
          <Text style={styles.email}>roselda.apares@hcdc.edu.ph</Text>
        </View>
      </View>

      {/* Menu Items */}
      <View style={styles.menuItemContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>History</Text>
          <Text style={styles.menuItemArrow}>></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItemContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Settings</Text>
          <Text style={styles.menuItemArrow}>></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItemContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Help and Support</Text>
          <Text style={styles.menuItemArrow}>></Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuItemContainer}>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={[styles.menuItemText, { color: "#FF6B6B" }]}>
            Logout
          </Text>
          <Text style={styles.menuItemArrow}>></Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  topContainer: {
    backgroundColor: "#E0E0E0",
    padding: 20,
    alignItems: "center",
    paddingTop: 50,
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.3, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow radius for iOS
    elevation: 5, // Android shadow
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    backgroundColor: "#ddd",
  },
  textContainer: {
    alignItems: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#555",
  },
  menuItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5, // Added for spacing between items
    shadowColor: "#000", // iOS shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for iOS
    shadowOpacity: 0.2, // Shadow opacity for iOS
    shadowRadius: 3, // Shadow radius for iOS
    elevation: 3, // Android shadow
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between", // Added to push text to the left and arrow to the right
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "90%", // Ensure items don't take full width and stay centered
    backgroundColor: "#fff", // Added background color for contrast
    borderRadius: 5, // Optional: adds rounded corners
  },
  menuItemIcon: {
    marginRight: 15,
  },
  menuItemText: {
    fontSize: 16,
    color: "#333",
  },
  menuItemArrow: {
    fontSize: 16,
    color: "#C0C0C0",
  },
});

export default Profile;
