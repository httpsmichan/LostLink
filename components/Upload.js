import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
// import { ArrowLeft, UploadCloud } from 'react-native-vector-icons/feather'; // Removed Feather Icons
import { Button, ButtonGroup } from "react-native-elements"; // Added ButtonGroup

const Upload = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const buttons = ["Lost", "Found"];
  const [category, setCategory] = useState("Select a Category");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Upload Item</Text>
      </View>

      {/* Image Upload Area */}
      <TouchableOpacity style={styles.imageUpload}>
        {/* <UploadCloud name="upload-cloud" size={50} color="#999" /> */}
        <Text style={styles.uploadText}>Drop your image here or</Text>
        <Text style={styles.browseText}>browse files</Text>
      </TouchableOpacity>

      {/* Item Status */}
      <Text style={styles.sectionTitle}>Item Status</Text>
      <ButtonGroup
        buttons={buttons}
        selectedIndex={selectedIndex}
        onPress={(value) => {
          setSelectedIndex(value);
        }}
        containerStyle={styles.buttonGroupContainer}
        selectedButtonStyle={styles.selectedButton}
        buttonStyle={styles.unselectedButton}
        textStyle={styles.buttonText}
        selectedTextStyle={styles.selectedButtonText}
      />

      {/* Item Name */}
      <Text style={styles.label}>Item Name</Text>
      <TextInput style={styles.input} placeholder="e.g., Wallet, Keys, Phone" />

      {/* Category */}
      <Text style={styles.label}>Category</Text>
      <TouchableOpacity
        style={styles.selectInput}
        onPress={() => {
          /* Handle category selection */
        }}
      >
        <Text style={styles.selectText}>{category}</Text>
        {/* <ChevronDown name="chevron-down" size={20} color="#777" /> */}
        <Text>Down</Text>
      </TouchableOpacity>

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.multilineInput}
        placeholder="Provide details about the item..."
        multiline
        numberOfLines={3}
        textAlignVertical="top"
      />

      {/* Location */}
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Where was it Lost?"
        onChangeText={setLocation}
        value={location}
      />
      {/* Date */}
      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="dd/mm/yyyy"
        onChangeText={setDate}
        value={date}
      />

      {/* Contact Information */}
      <Text style={styles.sectionTitle}>Contact Information</Text>
      <TextInput
        style={styles.input}
        placeholder="Your name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="Email address"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone number (optional)"
        keyboardType="phone-pad"
        onChangeText={setPhone}
        value={phone}
      />

      {/* Upload Button */}
      <TouchableOpacity style={styles.uploadButton}>
        <Text style={styles.uploadButtonText}>Upload Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  imageUpload: {
    borderWidth: 2,
    borderColor: "#ddd",
    borderStyle: "dashed",
    borderRadius: 10,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  uploadText: {
    color: "#777",
    fontSize: 16,
  },
  browseText: {
    color: "#3498db",
    fontSize: 16,
    marginTop: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "#333",
  },
  selectInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "#333",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  selectText: {
    fontSize: 16,
    color: "#333",
  },
  multilineInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
    color: "#333",
    fontSize: 16,
  },
  uploadButton: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 50,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonGroupContainer: {
    height: 40,
    borderRadius: 8,
    marginBottom: 15,
  },
  selectedButton: {
    backgroundColor: "#3498db",
  },
  unselectedButton: {
    backgroundColor: "#e0e0e0",
  },
  buttonText: {
    color: "#333",
    fontSize: 16,
  },
  selectedButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Upload;
