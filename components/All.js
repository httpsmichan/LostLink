import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const NotificationCard = ({
  icon,
  title,
  subtitle,
  time,
  primaryButtonText,
  secondaryButtonText,
}) => (
  <View style={styles.notificationCard}>
    <View style={styles.cardHeader}>
      <View style={styles.iconContainer}>{icon}</View>
      <View style={styles.textColumn}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Text style={styles.cardSubtitle}>{subtitle}</Text>
      </View>
    </View>
    <View style={styles.cardFooter}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>{primaryButtonText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>{secondaryButtonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function All({ setActiveTab }) {
  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabItem, styles.tabActive]}
          onPress={() => setActiveTab("All")}
        >
          <Text style={[styles.tabText, styles.tabTextActive]}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab("Unread")}
        >
          <Text style={styles.tabText}>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab("Matches")}
        >
          <Text style={styles.tabText}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab("Claims")}
        >
          <Text style={styles.tabText}>Claims</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab("Update")}
        >
          <Text style={styles.tabText}>Update</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Today</Text>
        <NotificationCard
          icon={<View style={styles.checkIcon} />}
          title="Match found for your lost Wallet"
          subtitle="Someone reported finding a White Wallet at Canteen that matches your lost item description."
          time="10:25 AM"
          primaryButtonText="View Match"
          secondaryButtonText="Dismiss"
        />
        <NotificationCard
          icon={<View style={styles.personIcon} />}
          title="Claim request received"
          subtitle="Taylor Swift submitted a claim for the gold-rimmed glasses you found at the Comfort Room."
          time="9:15 AM"
          primaryButtonText="View Match"
          secondaryButtonText="Dismiss"
        />

        <Text style={styles.sectionTitle}>Yesterday</Text>
        <NotificationCard
          icon={<View style={styles.infoIcon} />}
          title="Report Verification complete"
          subtitle="Your report for the black laptop bag has been verified. We'll notify you if a match is found."
          time="2:39 PM"
          primaryButtonText="View Match"
          secondaryButtonText="Dismiss"
        />
        <NotificationCard
          icon={<View style={styles.checkIcon} />}
          title="Potential match found"
          subtitle="A blue wallet found may match your item. Location differs, but other details match."
          time="10:25 AM"
          primaryButtonText="View Match"
          secondaryButtonText="Dismiss"
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginBottom: 30,
    backgroundColor: "#f9f9f9",
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  tabItem: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginRight: 8,
  },
  tabActive: {
    backgroundColor: "#3b82f6",
  },
  tabText: {
    fontSize: 14,
    color: "#555",
  },
  tabTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
    marginTop: 15,
  },
  notificationCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#e0f2f7",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
  },
  checkIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#81c784",
  },
  personIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#64b5f6",
  },
  infoIcon: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#ffb74d",
  },
  textColumn: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: "#555",
  },
  time: {
    fontSize: 12,
    color: "#777",
    marginLeft: 10,
  },
  cardFooter: {
    marginTop: 12,
    alignItems: "flex-start",
  },
  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
  },
  primaryButton: {
    backgroundColor: "#bbdefb",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginRight: 8,
  },
  primaryButtonText: {
    color: "#1976d2",
    fontSize: 14,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#e0e0e0",
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  secondaryButtonText: {
    color: "#555",
    fontSize: 14,
    fontWeight: "bold",
  },
});
