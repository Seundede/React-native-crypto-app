import {  FlatList } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../Context";
import Coin from "./Coin";
import { getWatchListData } from "../Request";

const WatchListScreen = () => {
  const { listData } = useContext(ListContext);

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchWatchListCoin = () => {
    setLoading(true)
    getWatchListData(coinId)
  };


  useEffect(() => {
    fetchWatchListCoin();
  }, []);
  return (
    <FlatList
      data={listData}
      renderItem={({ item }) => <Coin marketCoin={item} />}
    />
  );
};

export default WatchListScreen;
