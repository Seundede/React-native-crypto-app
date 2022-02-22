import { View, Text, FlatList, Pressable } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import UserAssestItem from "../components/UserAssestItem";


const UserScreen = () => {
  return (
    <View>
      <FlatList
        data={[{id:'bitcoin'}]}
        renderItem={({item}) => <UserAssestItem item={item}/>}
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
          <Pressable style={tw`bg-indigo-500 rounded mx-2.5 `}>
            <Text
              style={tw`text-white p-2 text-center font-semibold text-base `}
            >
              Add Asset
            </Text>
          </Pressable>
        }
      />
    </View>
  );
};

export default UserScreen;
