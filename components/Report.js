import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
} from "react-native";
// import { ArrowLeft, UploadCloud, ChevronDown } from 'react-native-vector-icons/feather'; // Removed Feather Icons
import { Button, ButtonGroup } from "react-native-elements"; // Added Button and ButtonGroup

const Report = () => {
  const [reportType, setReportType] = useState("Select a Category"); // Changed initial state to match image
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [itemStatus, setItemStatus] = useState(0); // 0: Lost, 1: Found -  Changed to itemStatus
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null); // Added state for image

  const reportTypes = [
    "Electronics",
    "Clothing",
    "Books",
    "Personal Items",
    "Other",
  ];

  const handleReportTypeSelect = (type) => {
    setReportType(type);
    setShowReportTypeDropdown(false);
  };

  const [showReportTypeDropdown, setShowReportTypeDropdown] = useState(false);

  const handleImageSelect = () => {
    //  Image selection logic here (using a library)
    console.log("Image selected");
    setImage({ uri: "https://via.placeholder.com/150" }); // Dummy image
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Report Found Item</Text>{" "}
        {/* Changed title */}
      </View>

      {/* Image Upload Area */}
      <TouchableOpacity style={styles.imageUpload} onPress={handleImageSelect}>
        {image ? (
          <Image source={image} style={styles.uploadedImage} />
        ) : (
          <>
            {/* <UploadCloud name="upload-cloud" size={50} color="#999" /> */}
            <Text>UploadCloud</Text>
            <Text style={styles.uploadText}>Drop your image here or</Text>
            <Text style={styles.browseText}>browse files</Text>
          </>
        )}
      </TouchableOpacity>

      {/* Item Status */}
      <Text style={styles.sectionTitle}>Item Status</Text>
      <ButtonGroup
        buttons={["Lost", "Found"]}
        selectedIndex={itemStatus}
        onPress={(value) => setItemStatus(value)}
        containerStyle={styles.buttonGroupContainer}
        selectedButtonStyle={styles.selectedButton}
        buttonStyle={styles.unselectedButton}
        textStyle={styles.buttonText}
        selectedTextStyle={styles.selectedButtonText}
      />

      {/* Item Name */}
      <Text style={styles.label}>Item Name</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., Wallet, Keys, Phone"
        onChangeText={setName}
        value={name}
      />

      {/* Category */}
      <Text style={styles.label}>Category</Text>
      <TouchableOpacity
        style={styles.selectInput}
        onPress={() => setShowReportTypeDropdown(!showReportTypeDropdown)}
      >
        <Text style={styles.selectText}>{reportType}</Text>
        {/* <ChevronDown name="chevron-down" size={20} color="#777" /> */}
        <Text>Down</Text>
      </TouchableOpacity>

      {/* Category Dropdown */}
      {showReportTypeDropdown && (
        <View style={styles.dropdown}>
          {reportTypes.map((type) => (
            <TouchableOpacity
              key={type}
              style={styles.dropdownItem}
              onPress={() => handleReportTypeSelect(type)}
            >
              <Text style={styles.dropdownText}>{type}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Description */}
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.multilineInput}
        placeholder="Provide details about the item..."
        multiline
        numberOfLines={3}
        textAlignVertical="top"
        onChangeText={setDescription}
        value={description}
      />

      {/* Location */}
      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Where was it found?" // Changed placeholder
        onChangeText={setDescription}
        value={description}
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
        {/* <Flag name="flag" size={20} color="#fff" style={{ marginRight: 10 }} /> */}
        <Text style={styles.submitButtonText}>Upload Item</Text>
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
  backButtonText: {
    color: "#3498db",
    fontSize: 18,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
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
    fontSize: 16,
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
    textAlignVertical: "top",
    numberOfLines: 3,
    minHeight: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    marginTop: 20,
  },
  submitButton: {
    backgroundColor: "#3498db",
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    flexDirection: "row",
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdown: {
    position: "absolute",
    top: 220, // Adjust as necessary
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
    maxHeight: 200,
    overflowY: "scroll",
  },
  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  dropdownText: {
    fontSize: 16,
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
  uploadedImage: {
    width: 150, // Or whatever size you want
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
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

export default Report;
