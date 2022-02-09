import { View, FlatList } from 'react-native'
import React from 'react'
import Coin from '../components/Coin';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json'
import CoinDetails from '../components/CoinDetails';
export default function Home() {
  return (
    <View>
      {/**<FlatList
        data={cryptocurrencies}
        renderItem={({ item }) => <Coin marketCoin={item} />}
      />**/}
      <CoinDetails />
    </View>
  );
}