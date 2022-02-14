import { View, Text, Image, Dimensions, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Ionicons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import crypto from "../../assets/data/crypto.json";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import { useNavigation } from "@react-navigation/native";

export default function CoinDetails() {
  const {
    image: { small },
    name,
    symbol,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
  } = crypto;
  const [coinPrice, setCoinPrice] = useState("1");
  const [usdPrice, setUsdPrice] = useState(current_price.usd.toString());
  const handleIconColor =
    price_change_percentage_24h < 0 ? "#dc2626" : "#34d399";
  const handleIcon = price_change_percentage_24h < 0 ? "caretdown" : "caretup";
  const { width: size } = Dimensions.get("window");
  const handleFormat = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };
  const handleChartColor =
    current_price.usd > prices[0][1] ? "#16c784" : "#ea3943";

  const handleUsdPrice = (value) => {
    setUsdPrice(value);
    const floatValue = parseFloat(value) || 0
    const result = (floatValue / current_price.usd).toFixed(4)
    setCoinPrice(result.toString());
  };
  const handlecoinPrice = (value) => {
    setCoinPrice(value);
   const floatValue = parseFloat(value) || 0
   const result = (floatValue * current_price.usd).toFixed(2);
    setUsdPrice(result.toString());
  };
const navigation = useNavigation()
  return (
    <View
      style={tw`px-3`}
    >
      <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothingStrategy: "bezier",
        }}
      >
        <View style={tw`flex flex-row items-center  justify-between`}>
          <Ionicons name="chevron-back" size={24} color="white" onPress={()=>navigation.goBack()}/>
          <View style={tw`flex flex-row items-center`}>
            <Image source={{ uri: small }} style={tw`h-10 w-10`} />
            <Text style={tw`text-white text-base font-bold mx-2`}>
              {symbol.toUpperCase()}
            </Text>
          </View>
          <FontAwesome5 name="user" size={20} color="white" />
        </View>
        <View style={tw`p-3 flex flex-row justify-between`}>
          <View>
            <Text style={tw`text-white text-base`}>{name}</Text>
            <ChartYLabel
              format={handleFormat}
              style={tw`text-white text-2xl font-bold tracking-wider`}
            />
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
        <View>
          <ChartPath
            height={size / 2}
            stroke={handleIconColor} /**Edit to function */
            width={size}
            strokeWidth={2}
          />
          <ChartDot style={{ backgroundColor: handleChartColor }} />
        </View>
        <View style={tw`flex flex-row`}>
          <View style={tw`flex flex-row flex-1`}>
            <Text style={tw`text-white self-center`}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              value={coinPrice}
              style={tw` text-base flex-1 h-10 m-2 border-b-4 border-b-zinc-200 p-2 text-white`}
              keyboardType="numeric"
              onChange={({ nativeEvent: { text } }) => handlecoinPrice(text)}
            />
          </View>
          <View style={tw`flex flex-row flex-1`}>
            <Text style={tw`text-white self-center`}>USD</Text>
            <TextInput
              value={usdPrice}
              style={tw` text-base flex-1 h-10  m-2 border-b-4 border-b-zinc-200 p-2 text-white`}
              keyboardType="numeric"
              onChange={({ nativeEvent: { text } }) => handleUsdPrice(text)}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
}
