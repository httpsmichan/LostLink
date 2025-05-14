import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements"; // Added SearchBar
import Feather from "react-native-vector-icons/Feather";

// import { Bell, User, Search, ChevronRight } from 'react-native-vector-icons/feather'; // Removed Feather Icons
import { Button } from "react-native-elements"; //Added Button
// Dummy data for recently found and lost items
const recentlyFoundItems = [
  {
    id: 1,
    title: "Airpods Pro",
    location: "Found at Gym",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Iphone 13",
    location: "Found at the Outside",
    image: "https://via.placeholder.com/150",
  },
];

const lostItems = [
  {
    id: 3,
    title: "Wallet",
    location: "Lost at Canteen",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "Keys",
    location: "Lost at Parking",
    image: "https://via.placeholder.com/150",
  },
];

const Home = () => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <View style={styles.rightIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="bell" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Feather name="user" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Search Bar */}
      <SearchBar
        placeholder="Search Lost Items..."
        onChangeText={setSearch}
        value={search}
        containerStyle={styles.searchBarContainer}
        inputContainerStyle={styles.searchBarInputContainer}
        inputStyle={styles.searchBarInput}
      />

      {/* Filter Tabs */}
      <View style={styles.filterTabs}>
        <TouchableOpacity style={[styles.filterTab, styles.activeFilterTab]}>
          <Text style={styles.activeFilterText}>All Items</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterText}>Electronics</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterTab}>
          <Text style={styles.filterText}>More</Text>
        </TouchableOpacity>
      </View>

      {/* Recently Found Items */}
      <ScrollView style={styles.scrollView}>
        <Text style={styles.sectionTitle}>Recently Found</Text>
        <View style={styles.itemGrid}>
          {recentlyFoundItems.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
          ))}
        </View>

        {/* Lost Items */}
        <Text style={styles.sectionTitle}>Lost Items</Text>
        <View style={styles.itemGrid}>
          {lostItems.map((item) => (
            <View key={item.id} style={styles.itemCard}>
              <Image source={{ uri: item.image }} style={styles.itemImage} />
              <Text style={styles.itemTitle}>{item.title}</Text>
              <Text style={styles.itemLocation}>{item.location}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
    backgroundColor: "#f9f9f9", // Light background
  },
  rightIcons: {
    flexDirection: "row",
    marginLeft: "auto", // pushes icons to the right
  },
  iconButton: {
    marginLeft: 15,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: "transparent",
  },
  iconButton: {
    padding: 10,
  },
  searchBarContainer: {
    backgroundColor: "transparent", // Make the background transparent
    borderTopWidth: 0, // Remove top border
    borderBottomWidth: 0, // Remove bottom border
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchBarInputContainer: {
    backgroundColor: "#fff", // White background for the input container
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  searchBarInput: {
    fontSize: 16,
    color: "#333",
  },
  filterTabs: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  filterTab: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#e0e0e0", // Light gray background
  },
  activeFilterTab: {
    backgroundColor: "#3498db", // Blue for active tab
  },
  filterText: {
    color: "#333",
  },
  activeFilterText: {
    color: "#fff", // White text for active tab
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2c3e50", // Dark gray
  },
  itemGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemCard: {
    width: "48%", // Two items per row with a small gap
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // For Android shadow
  },
  itemImage: {
    width: "100%",
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: "#ddd",
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  itemLocation: {
    fontSize: 12,
    color: "#777",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "#f0f0f0", // Light background for bottom nav
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  bottomNavItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});

export default Home;
