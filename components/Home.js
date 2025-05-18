import React, { useState } from "react";

import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { SearchBar } from "react-native-elements";
import Feather from "react-native-vector-icons/Feather";

import { Button } from "react-native-elements";

const recentlyFoundItems = [
  {
    id: 1,
    title: "Airpods Pro",
    location: "Found at Gym",
    image:
      "https://i.pinimg.com/736x/c6/cd/4c/c6cd4c602f2b23e28e1707cecc60e92c.jpg",
  },
  {
    id: 2,
    title: "Iphone 13",
    location: "Found at the Outside",
    image:
      "https://i.pinimg.com/736x/0c/a2/f3/0ca2f3e98277ef86d79fcfa489d41832.jpg",
  },
];

const lostItems = [
  {
    id: 3,
    title: "Wallet",
    location: "Lost at Canteen",
    image:
      "https://i.pinimg.com/736x/f5/d7/d5/f5d7d50d440371b322e570c6e1911335.jpg",
  },
  {
    id: 4,
    title: "Keys",
    location: "Lost at Parking",
    image:
      "https://i.pinimg.com/736x/69/be/43/69be43c050f55b5ac38814dc80524781.jpg",
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
    backgroundColor: "#f9f9f9",
  },
  rightIcons: {
    flexDirection: "row",
    marginLeft: "auto",
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
    backgroundColor: "transparent",
    borderTopWidth: 0,
    borderBottomWidth: 0,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchBarInputContainer: {
    backgroundColor: "#fff",
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
    backgroundColor: "#e0e0e0",
  },
  activeFilterTab: {
    backgroundColor: "#3498db",
  },
  filterText: {
    color: "#333",
  },
  activeFilterText: {
    color: "#fff",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2c3e50",
  },
  itemGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  itemCard: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
    backgroundColor: "#f0f0f0",
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
