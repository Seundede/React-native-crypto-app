import { View, Text, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import crypto from "../../assets/data/crypto.json";
import CoinChart from "./CoinChart";

export default function CoinDetails() {
  const {
    image: { small },
    name,
    symbol,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = crypto;
  const handleIconColor =
    price_change_percentage_24h < 0 ? "#dc2626" : "#34d399";
  const handleIcon = price_change_percentage_24h < 0 ? "caretdown" : "caretup";
  return (
    <View style={tw`px-3`}>
      <View style={tw`flex flex-row items-center  justify-between`}>
        <Ionicons name="chevron-back" size={24} color="white" />
        <View style={tw`flex flex-row items-center`}>
          <Image source={{ uri: small }} style={tw`h-10 w-10`} />
          <Text style={tw`text-white text-base font-bold mx-2`}>
            {symbol.toUpperCase()}
          </Text>
          <View style={tw`bg-gray-700 px-1 rounded`}>
            <Text style={tw`text-white text-sm font-bold`}>
              #{market_cap_rank}
            </Text>
          </View>
        </View>
        <FontAwesome5 name="user" size={20} color="white" />
      </View>
      <View style={tw`p-3 flex flex-row justify-between`}>
        <View>
          <Text style={tw`text-white text-base`}>{name}</Text>
          <Text style={tw`text-white text-2xl font-bold tracking-wider`}>
            ${current_price.usd}
          </Text>
        </View>

        <View
          style={tw.style(`flex flex-row items-center rounded-md p-2`, {
            backgroundColor: handleIconColor,
          })}
        >
          <AntDesign
            name={handleIcon}
            size={14}
            color="white"
            style={tw`mr-1`}
          />
          <Text style={tw`text-white font-bold`}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <CoinChart />
    </View>
  );
}
