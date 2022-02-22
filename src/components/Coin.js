import { Image, Pressable, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Coin({ marketCoin }) {
  const {
    image,
    name,
    market_cap_rank,
    symbol,
    price_change_percentage_24h,
    current_price,
    market_cap,
    id,
  } = marketCoin;
  const handleMarketCap = (market_cap) => {
    if (market_cap > 1e12) {
      return `${Math.floor(market_cap / 1e12)}T`;
    }
    if (market_cap > 1e9) {
      return `${Math.floor(market_cap / 1e9)}B`;
    }
    if (market_cap > 1e6) {
      return `${Math.floor(market_cap / 1e6)}M`;
    }
    if (market_cap > 1e3) {
      return `${Math.floor(market_cap / 1e3)}K`;
    }
    return market_cap;
  };
  const handleIconColor =
    price_change_percentage_24h < 0 ? "#dc2626" : "#34d399";
  const handleIcon = price_change_percentage_24h < 0 ? "caretdown" : "caretup";
  const navigation = useNavigation();
  
  return (
    <Pressable
      style={tw`flex flex-row p-3 border-b-2 border-gray-800`}
      onPress={() => navigation.navigate("CoinDetails", { coinId: id })}
    >
      <Image
        style={tw`h-10 w-10 mr-4 self-center`}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={tw`text-white font-bold mb-2`}>{name}</Text>
        <View style={tw`flex flex-row`}>
          <View style={tw`bg-gray-700 px-1 rounded mr-2`}>
            <Text style={tw`text-white font-bold`}>{market_cap_rank}</Text>
          </View>
          <Text style={tw`mr-2 text-white`}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={handleIcon}
            size={14}
            color={handleIconColor}
            style={tw`self-center mr-2`}
          />
          <Text style={tw.style(`mr-2`, { color: handleIconColor })}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={tw`ml-auto items-end`}>
        <Text style={tw`text-white mb-2`}>{current_price}</Text>
        <Text style={tw`text-white`}>MCap {handleMarketCap(market_cap)}</Text>
      </View>
    </Pressable>
  );
}
