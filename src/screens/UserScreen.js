import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import UserAssestItem from "../components/UserAssestItem";
import SearchableDropdown from "react-native-searchable-dropdown";


const UserScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState();
  
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
          <View style={tw`flex mt-32 mx-3.5`}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={tw`flex mt-32 mx-3.5 `}>
                <View style={tw` bg-white rounded-md p-2`}>
                  <View style={tw`my-4`}>
                    <SearchableDropdown
                      containerStyle={{ padding: 5, width: "100%" }}
                      itemStyle={{
                        padding: 10,
                        marginTop: 2,
                        backgroundColor: "#FAF9F8",
                        borderColor: "#bbb",
                        borderWidth: 1,
                        borderRadius: 5,
                      }}
                      itemTextStyle={{
                        color: "#222",
                      }}
                      itemsContainerStyle={{ maxHeight: 140 }}
                      resetValue={false}
                      items={[]}
                      onItemSelect={(item) => console.log(item)}
                      textInputProps={{
                        placeholder: "Enter a coin",
                        underlineColorAndroid: "transparent",
                        style: {
                          padding: 12,
                          borderWidth: 1,
                          borderColor: "#ccc",
                          borderRadius: 5,
                          backgroundColor: "#FAF7F6",
                        },
                      }}
                    />

                    <View style={tw`mx-2.5 flex flex-row justify-center mt-4`}>
                      <TextInput
                        value={quantity}
                        placeholder="0"
                        style={tw`text-black text-4xl`}
                        keyboardType="numeric"
                        onChangeText={setQuantity}
                      />
                      <Text style={tw`text-black font-normal text-xs`}>
                        BTC
                      </Text>
                    </View>
                    <Text style={tw`text-center text-gray-600 text-xs mb-10`}>
                      $3000 per coin
                    </Text>
                    <Pressable style={tw`bg-indigo-500 rounded `}>
                      <Text
                      
                        style={tw`text-white p-2 text-center font-semibold text-base `}
                      >
                        Add Asset
                      </Text>
                    </Pressable>
                  </View>

                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={tw`bg-red-700 text-center p-2 text-base font-semibold`}
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
                Add New Asset
              </Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
};

export default UserScreen;
