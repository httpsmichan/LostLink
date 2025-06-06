import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
// import { ArrowLeft } from 'react-native-vector-icons/feather'; // Removed Feather Icons
import { Button } from "react-native-elements"; // Added Button

const Match = () => {
  const navigation = useNavigation();
  // Dummy data for matched items
  const matchedItems = [
    {
      id: 1,
      title: "YSL Wallet",
      location: "Found at Spa",
      matchPercent: "75% Match",
      image:
        "https://i.pinimg.com/736x/19/47/62/194762ba9fe300e189008d6f32f978a4.jpg",
    },
    {
      id: 2,
      title: "White Wallet",
      location: "Found at Canteen",
      matchPercent: "100% Match",
      image:
        "https://i.pinimg.com/736x/7e/f0/6c/7ef06c5ba419b6de7f3769eca445a38e.jpg",
    },
    {
      id: 3,
      title: "Wallet",
      location: "Found at Canteen",
      matchPercent: "80% Match",
      image:
        "https://i.pinimg.com/736x/c5/db/a8/c5dba8ce16eab52a9e4e65d325548eac.jpg",
    },
    {
      id: 4,
      title: "Wallet",
      location: "Found at Canteen",
      matchPercent: "80% Match",
      image:
        "https://i.pinimg.com/736x/53/44/95/5344953e1edefeefd46af6d4740e5dac.jpg",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Your Missing Item</Text>
      </View>

      {/* Missing Item Details */}
      <View style={styles.missingItemContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/736x/ab/d6/9e/abd69e61bee63ac03bb8afb10cac779f.jpg",
          }}
          style={styles.missingItemImage}
        />
        <View style={styles.missingItemTextContainer}>
          <Text style={styles.missingItemTitle}>Wallet</Text>
          <Text style={styles.missingItemLocation}>Lost at Canteen</Text>
          <Text style={styles.potentialMatches}>3 Potential Matches</Text>
        </View>
      </View>

      {/* Match Details */}
      <View style={styles.matchDetailsContainer}>
        <Text style={styles.matchDetailsTitle}>Match Details</Text>
        <Text style={styles.withinDistance}>Found within 200m</Text>

        {/* Matched Items List */}
        {matchedItems.map((item) => (
          <View key={item.id} style={styles.matchedItemCard}>
            <Image
              source={{ uri: item.image }}
              style={styles.matchedItemImage}
            />
            <View style={styles.matchedItemTextContainer}>
              <Text style={styles.matchedItemTitle}>{item.title}</Text>
              <Text style={styles.matchedItemLocation}>{item.location}</Text>
              <Text style={styles.matchPercent}>{item.matchPercent}</Text>
            </View>
            <View style={styles.matchedItemButtons}>
              <Button
                title="Claim Now"
                buttonStyle={styles.claimButton}
                titleStyle={styles.claimButtonText}
                onPress={() => navigation.navigate("Ownership")}
              />

              <Button
                title="Contact Finder"
                buttonStyle={styles.contactButton}
                titleStyle={styles.contactButtonText}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  backButtonText: {
    color: "#3498db",
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  missingItemContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  missingItemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: "#ddd",
  },
  missingItemTextContainer: {
    flex: 1,
  },
  missingItemTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  missingItemLocation: {
    fontSize: 14,
    color: "#777",
    marginBottom: 5,
  },
  potentialMatches: {
    fontSize: 14,
    color: "#3498db",
    fontWeight: "bold",
  },
  matchDetailsContainer: {
    paddingHorizontal: 15,
  },
  matchDetailsTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  withinDistance: {
    fontSize: 14,
    color: "#777",
    marginBottom: 15,
  },
  matchedItemCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  matchedItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: "#ddd",
  },
  matchedItemTextContainer: {
    flex: 1,
    marginRight: 10,
  },
  matchedItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  matchedItemLocation: {
    fontSize: 12,
    color: "#777",
    marginBottom: 5,
  },
  matchPercent: {
    fontSize: 14,
    color: "#2ecc71",
    fontWeight: "bold",
  },
  matchedItemButtons: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  claimButton: {
    backgroundColor: "#3498db",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  claimButtonText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
  contactButton: {
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderColor: "#3498db",
    borderWidth: 1,
  },
  contactButtonText: {
    color: "#3498db",
    fontSize: 14,
    textAlign: "center",
  },
});

export default Match;
