import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const ListContext = createContext();

const ListContextProvider = ({ children }) => {
  const [listData, setListData] = useState([]);

  const getWatchList = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@listData_key");
      setListData(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch (error) {
      console.log(error);
    }
  };
  const getStoreCoinId = async (coinId) => {
    try {
      const newListData = [...listData, coinId];
      const jsonValue = JSON.stringify(newListData);
       await AsyncStorage.setItem("@listData_key", jsonValue);
       setListData(newListData)
    } catch (error) {
      console.log(error);
    }
  };

  const removeStoreCoinId = async(coinId) => {
   const newListData = listData.filter((coinIdValue) => coinIdValue != coinId )
   const jsonValue = JSON.stringify(newListData);
   await AsyncStorage.setItem("@listData_key", jsonValue);
   setListData(newListData);
  }
  useEffect(() => {
    getWatchList();
  }, []);

  return (
    <ListContext.Provider
      value={{ listData, getStoreCoinId, removeStoreCoinId }}
    >
      {children}
    </ListContext.Provider>
  );
};

export default ListContextProvider;
