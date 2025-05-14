import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import All from "./All";
import Unread from "./Unread";
import Matches from "./Matches";
import Claims from "./Claims";
import Update from "./Update";

export default function ReportScreen() {
  const [activeTab, setActiveTab] = useState("All");

  const renderTab = () => {
    switch (activeTab) {
      case "All":
        return <All setActiveTab={setActiveTab} />;
      case "Unread":
        return <Unread setActiveTab={setActiveTab} />;
      case "Matches":
        return <Matches setActiveTab={setActiveTab} />;
      case "Claims":
        return <Claims setActiveTab={setActiveTab} />;
      case "Update":
        return <Update setActiveTab={setActiveTab} />;
      default:
        return <All setActiveTab={setActiveTab} />;
    }
  };

  return <View style={styles.container}>{renderTab()}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
});
