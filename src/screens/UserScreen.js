import { View, Text, FlatList, Pressable, Modal } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import UserAssestItem from "../components/UserAssestItem";


const UserScreen = ({ navigation }) => { 
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <FlatList
        data={[{ id: "bitcoin" }]}
        renderItem={({ item }) => <UserAssestItem item={item} />}
        ListHeaderComponent={
          <View>
            <View
              style={tw`flex flex-row justify-between items-center mx-2.5 mt-3 mb-2`}
            >
              <View>
                <Text style={tw`text-white font-semibold text-base`}>
                  Current Balance
                </Text>
                <Text style={tw`text-white font-black text-2xl tracking-wide`}>
                  $30986
                </Text>
                <Text
                  style={tw`text-white font-semibold text-base text-green-500`}
                >
                  % change
                </Text>
              </View>
              <View
                style={tw`flex flex-row items-center py-1.5 px-0.5 rounded bg-green-500`}
              >
                <AntDesign
                  name="caretup"
                  size={14}
                  color="white"
                  style={tw`mr-1`}
                />
                <Text style={tw`text-white font-semibold `}>1.24%</Text>
              </View>
            </View>
            <View style={tw`mx-2.5`}>
              <Text style={tw`text-white font-semibold text-lg`}>
                Your Assets
              </Text>
            </View>
          </View>
        }
        ListFooterComponent={
          <View style={tw`flex mt-32 mx-2.5`}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={tw`flex mt-32 mx-2.5 `}>
                <View style={tw` bg-white rounded p-2`}>
                  <Text style={tw`text-black`}>Hello World!</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={tw`bg-red-700 text-center p-2 text-base font-semibold border-none`}
                    >
                      Close
                    </Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={tw`bg-indigo-500 rounded `}
              onPress={() => setModalVisible(true)}
            >
              <Text
                style={tw`text-white p-2 text-center font-semibold text-base `}
              >
                Add Asset
              </Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
};

export default UserScreen;
