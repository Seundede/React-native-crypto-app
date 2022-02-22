import { View, Text, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";

const UserAssestItem = () => {
  return (
    <View style={tw`flex flex-row my-4 mx-2.5`}>
      <Image source={{ uri: "" }} style={tw`h-10 w-10`} />
      <View>
        <Text style={tw`text-white text-xs font-bold`}>Bitcoin</Text>
        <Text style={tw`text-gray-500 text-xs`}>BTC</Text>
      </View>
      <View style={tw`ml-auto`}>
        <Text style={tw`text-white`}>$1980</Text>
        <View style={tw`flex flex-row items-center`}>
          <AntDesign
            name="caretup"
            size={14}
            style={tw`text-green-500 mr-0.5`}
          />
          <Text style={tw`text-green-500`}>0.80%</Text>
        </View>
      </View>
      <View style={tw`ml-auto flex items-end`}>
        <Text style={tw`text-white text-xs font-bold`}>$56789</Text>
        <Text style={tw`text-gray-500 text-xs`}>1BTC</Text>
      </View>
    </View>
  );
};

export default UserAssestItem;
