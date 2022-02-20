import { View, Text, FlatList } from "react-native";
import React, { useContext } from "react";
import tw from "tailwind-react-native-classnames";
import { ListContext } from "../Context";
import Coin from "./Coin";

const WatchListScreen = () => {
  const {listData }= useContext(ListContext);

  return (
    <FlatList
      data={listData}
      renderItem={({ item }) => <Coin marketCoin={item} />}
    />
  );
};

export default WatchListScreen;
