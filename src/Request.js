import axios from "axios";


export const getCoinRequest = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}`
    );
    return response.data
  } catch (err) {
    console.log(err);
  }
};

export const getMarketChart = async (coinId) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=1&interval=hourly`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getMarketData= async () => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=40&page=1&sparkline=false&price_change_percentage=24h"
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
