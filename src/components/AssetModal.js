import { View, Text, Pressable, Modal, TextInput, ActivityIndicator } from 'react-native'
import React, { useState ,Suspense } from 'react'
import tw from "tailwind-react-native-classnames";
import SearchableDropDown from 'react-native-searchable-dropdown';
const AssetModal = () => {
     const [modalVisible, setModalVisible] = useState(false);
     const [quantity, setQuantity] = useState();
  return (
    <Suspense fallback={<ActivityIndicator size="large" style={tw`mt-24`} />}>
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
              <SearchableDropDown
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
                  onChangeText={() =>setQuantity()}
                />
                <Text style={tw`text-black font-normal text-xs`}>BTC</Text>
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
        onPress={() => setModalVisible(!modalVisible)}
      >
        <Text style={tw`text-white p-2 text-center font-semibold text-base `}>
          Add New Asset
        </Text>
      </Pressable>
    </Suspense>
  );
}

export default AssetModal