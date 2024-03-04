import React, { useState } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Modal from "react-native-modal";
import {
  Appbar,
  Avatar,
  Button,
  Divider,
  RadioButton,
  List,
  TextInput,
} from "react-native-paper";
import { useSelector } from "react-redux";

function EditProfileModal() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [gender, setGender] = useState("");
  const currentUser = useSelector((state) => state.auth?.currentUser);

  const handleRadioButtonChange = (value) => {
    setGender(value);
  };
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <>
      <Button
        style={{ borderRadius: 8 }}
        buttonColor="#dddddd"
        textColor="#000"
        mode="contained"
        onPress={toggleModal}
      >
        Edit profile
      </Button>
      <Modal
        isVisible={isModalVisible}
        backdropColor="#fff"
        backdropOpacity={1}
        style={{ padding: 0, margin: 0 }}
        onBackdropPress={toggleModal}
        avoidKeyboard
      >
        <ScrollView style={{ flex: 1 }} horizontal={false}>
          <Appbar.Header
            style={{ backgroundColor: "#fff" }}
            statusBarHeight={0}
          >
            <Appbar.BackAction onPress={toggleModal} />
            <Appbar.Content
              title="Edit profile"
              titleStyle={{ fontWeight: "bold", fontSize: 22 }}
            />
          </Appbar.Header>
          <Divider />
          <View style={{ flex: 1, paddingHorizontal: 12 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                margin: 10,
              }}
            >
              <Avatar.Image
                source={{ uri: currentUser?.proImgLink }}
                size={100}
                style={{ marginTop: 10 }}
              />
            </View>
            <View>
              <TextInput
                label="Name"
                placeholder="Enter your name"
                value={currentUser?.name}
                mode="outlined"
                activeOutlineColor="#000"
              />
              <TextInput
                label="Email"
                placeholder="Enter your email"
                value={currentUser?.email}
                mode="outlined"
                activeOutlineColor="#000"
              />
              <TextInput
                label="Bio"
                placeholder="Bio"
                value={currentUser?.bio}
                mode="outlined"
                activeOutlineColor="#000"
              />
            </View>

            <View style={{  }}>
            <List.Section>
              <List.Accordion
                title="Gender"
                textColor="#000"
                buttonColor="#dddddd"
                left={(props) => (
                  <List.Icon {...props} icon="human-male-male" />
                )}
              >
                <RadioButton.Group
                  onValueChange={handleRadioButtonChange}
                  value={gender}
                >
                  <List.Item
                    title="Male"
                    onPress={() => handleRadioButtonChange("male")}
                    left={() => <RadioButton value="male" />}
                  />
                  <List.Item
                    title="Female"
                    onPress={() => handleRadioButtonChange("female")}
                    left={() => <RadioButton value="female" />}
                  />
                  <List.Item
                    title="Prefer Not to say"
                    onPress={() => handleRadioButtonChange("prefer_not_to_say")}
                    left={() => <RadioButton value="prefer_not_to_say" />}
                  />
                </RadioButton.Group>
              </List.Accordion>
            </List.Section>
            </View>

          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Button
              mode="contained"
              onPress={toggleModal}
              loading={false}
              style={{ width: "60%", marginTop: 50 }}
            >
              Update Changes
            </Button>
          </View>
        </ScrollView>
      </Modal>
    </>
  );
}

export default EditProfileModal;
const styles = StyleSheet.create({});
