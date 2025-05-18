import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from "react-native";
import { FontAwesome } from "react-native-vector-icons";
import { Calendar as RNCalendar } from "react-native-calendars";

const Ownership = ({ navigation }) => {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [image, setImage] = useState(null);
  const [location, setLocation] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleImageUpload = () => {
    // Implement image upload logic here
    console.log("Image upload");
  };

  const handleDateChange = (day) => {
    setDate(day.dateString);
  };

  const handleClaimItem = () => {
    setIsModalVisible(true);
    console.log("Claim Item submitted:", {
      fullName,
      phoneNumber,
      email,
      description,
      date,
      location,
    });
  };

  const closeModal = () => {
    setIsModalVisible(false);
    navigation.goBack();
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Claim Item</Text>

      <Text style={styles.label}>Upload Proof of Ownership</Text>
      <TouchableOpacity style={styles.imageUpload} onPress={handleImageUpload}>
        {image ? (
          <Text>Image Uploaded</Text>
        ) : (
          <Text>Drag and Drop or Click to Upload</Text>
        )}
        <Text style={styles.imageInfo}>
          Supported formats: JPG, PNG, PDF (Max 10MB)
        </Text>
      </TouchableOpacity>

      <Text style={styles.label}>Full Name</Text>
      <TextInput
        placeholder="Enter your full name"
        value={fullName}
        onChangeText={setFullName}
        style={styles.input}
      />

      <Text style={styles.label}>Contact Information</Text>
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Email Address"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        style={styles.input}
      />

      <Text style={styles.label}>Description of Ownership</Text>
      <TextInput
        placeholder="Describe the item and provide details proving ownership..."
        value={description}
        onChangeText={setDescription}
        multiline
        style={styles.textarea}
      />

      <Text style={styles.label}>Date</Text>
      <RNCalendar
        onDayPress={handleDateChange}
        markedDates={
          date ? { [date]: { selected: true, selectedColor: "#3498db" } } : {}
        }
        style={styles.calendar}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#3498db",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#3498db",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#3498db",
          monthTextColor: "#43515c",
          indicatorColor: "blue",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />

      {date && <Text style={styles.dateText}>Date: {date}</Text>}

      <Text style={styles.label}>Location</Text>
      <TextInput
        placeholder="Where was it Found?"
        value={location}
        onChangeText={setLocation}
        style={styles.input}
      />

      <TouchableOpacity onPress={handleClaimItem} style={styles.claimButton}>
        <Text style={styles.buttonText}>Claim Item</Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Claim Submitted Successfully</Text>
            <Text style={styles.modalText}>
              Thank you! Your claim has been submitted. We will review the
              information and contact you shortly.
            </Text>
            <View style={styles.modalWhatsNextContainer}>
              <Text style={styles.modalWhatsNextTitle}>What's Next?</Text>
              <View style={styles.modalNextItemContainer}>
                <FontAwesome name="check" size={16} color="#2ecc71" />
                <Text style={styles.modalNextItem}>
                  • You'll receive a confirmation email shortly
                </Text>
              </View>
              <View style={styles.modalNextItemContainer}>
                <FontAwesome name="check" size={16} color="#2ecc71" />
                <Text style={styles.modalNextItem}>
                  • Our team will review your claim
                </Text>
              </View>
              <View style={styles.modalNextItemContainer}>
                <FontAwesome name="check" size={16} color="#2ecc71" />
                <Text style={styles.modalNextItem}>
                  • We'll contact you for verification or to arrange item pickup
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeModal}
            >
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "#555",
    marginTop: 10,
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    backgroundColor: "#fff",
  },
  textarea: {
    height: 100,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    marginTop: 5,
    backgroundColor: "#fff",
    textAlignVertical: "top",
  },
  imageUpload: {
    height: 100,
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#ddd",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 5,
    backgroundColor: "#fff",
  },
  imageInfo: {
    fontSize: 12,
    color: "#777",
    marginTop: 5,
  },
  calendar: {
    borderRadius: 6,
    marginVertical: 10,
    backgroundColor: "#fff",
  },
  dateText: {
    fontSize: 14,
    color: "#555",
    marginTop: 10,
    marginBottom: 20,
  },
  claimButton: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
    marginBottom: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 20,
    width: "95%",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#3498db",
    textAlign: "center",
  },
  modalText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
    textAlign: "center",
  },
  modalWhatsNextContainer: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
  },
  modalWhatsNextTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  modalNextItem: {
    fontSize: 14,
    color: "#555",
    marginBottom: 5,
  },
  modalCloseButton: {
    backgroundColor: "#3498db",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
    alignSelf: "center",
    width: "100%",
  },
  modalCloseButtonText: {
    alignSelf: "center",
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Ownership;
