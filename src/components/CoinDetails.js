import {
  View,
  Text,
  Image,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { getCoinRequest, getMarketChart } from "../Request";
import { ListContext } from "../Context";

export default function CoinDetails() {
  const { listData, getStoreCoinId, removeStoreCoinId } =
    useContext(ListContext);
  const navigation = useNavigation();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [chatData, setChatData] = useState(null);
  const [coinPrice, setCoinPrice] = useState("1");
  const [usdPrice, setUsdPrice] = useState("");

  const route = useRoute();
  const {
    params: { coinId },
  } = route;

  const getCoinInformation = async () => {
    setLoading(true);
    const getCoinData = await getCoinRequest(coinId);
    const getCoinChart = await getMarketChart(coinId);
    setData(getCoinData);
    setChatData(getCoinChart);
    setUsdPrice(getCoinData.market_data.current_price.usd.toString());
    setLoading(false);
  };

  useEffect(() => {
    getCoinInformation();
  }, []);

  if (loading || !data) {
    return <ActivityIndicator size="large" style={tw`mt-24`} />;
  }
  const {
    image: { small },
    name,
    symbol,
    market_data: { current_price, price_change_percentage_24h },
    description: { en },
  } = data;
  const { prices } = chatData;

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
    const floatValue = parseFloat(value) || 0;
    const result = (floatValue / current_price.usd).toFixed(4);
    setCoinPrice(result.toString());
  };

  const handlecoinPrice = (value) => {
    setCoinPrice(value);
    const floatValue = parseFloat(value) || 0;
    const result = (floatValue * current_price.usd).toFixed(2);
    setUsdPrice(result.toString());
  };

  const handleWatchListIconColor = () => {
    return listData.some((coinIdValue) => coinIdValue === coinId);
  };

  const handleWatchListFunction = () => {
    if (handleWatchListIconColor()) {
      return removeStoreCoinId(coinId);
    } else {
      return getStoreCoinId(coinId);
    }
  };

  return (
    <View style={tw`px-3`}>
      <ChartPathProvider
        data={{
          points: prices.map((price) => ({ x: price[0], y: price[1] })),
          smoothingStrategy: "bezier",
        }}
      >
        <View style={tw`flex flex-row items-center justify-between`}>
          <Ionicons
            name="chevron-back"
            size={24}
            color="white"
            onPress={() => navigation.goBack()}
          />
          <View style={tw`flex flex-row items-center`}>
            <Image source={{ uri: small }} style={tw`h-10 w-10`} />
            <Text style={tw`text-white text-base font-bold mx-2`}>
              {symbol.toUpperCase()}
            </Text>
          </View>
          <Ionicons
            name="star"
            size={20}
            color={handleWatchListIconColor() ? "yellow" : "white"}
            onPress={() => handleWatchListFunction()}
          />
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
            stroke={handleIconColor}
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
              style={tw` text-base flex-1 h-10 m-2 border-b-4 border-gray-800 p-2 text-white`}
              keyboardType="numeric"
              onChange={({ nativeEvent: { text } }) => handlecoinPrice(text)}
            />
          </View>
          <View style={tw`flex flex-row flex-1`}>
            <Text style={tw`text-white self-center`}>USD</Text>
            <TextInput
              value={usdPrice}
              style={tw` text-base flex-1 h-10  m-2 border-b-4 border-gray-500 p-2 text-white`}
              keyboardType="numeric"
              onChange={({ nativeEvent: { text } }) => handleUsdPrice(text)}
            />
          </View>
        </View>
      </ChartPathProvider>
      <Text style={tw`text-white mt-6 mb-3 text-center text-lg`}>History</Text>
      <Text style={tw`text-white px-3`}>{en}</Text>
    </View>
  );
}
