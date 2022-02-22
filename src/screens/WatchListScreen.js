import { FlatList, RefreshControl } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ListContext } from "../Context";
import Coin from "../components/Coin";
import { getWatchListData } from "../Request";

const WatchListScreen = () => {
  const { listData } = useContext(ListContext);

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(false);

  const updatedCoinId = () => listData.join("%2C%20");

  const fetchWatchListCoin = async () => {
    if (loading) {
      return <ActivityIndicator size="large" style={tw`mt-24`} />;
    }
    setLoading(true);
    const watchListData = await getWatchListData(updatedCoinId());
    setCoin(watchListData);
    setLoading(false);
  };
  

  useEffect(() => {
    fetchWatchListCoin();
  }, []);
 
  return (
    <FlatList
      data={coin}
      keyExtractor={(index) => index}
      renderItem={({ item }) => <Coin marketCoin={item} />}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          tintColor="white"
          onRefresh={fetchWatchListCoin}
        />
      }
    />
  );
};

export default WatchListScreen;
