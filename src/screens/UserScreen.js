import {
  View,
  Text,
  FlatList,
  Pressable,
  Modal,
  TextInput,
  ActivityIndicator,
} from "react-native";
import React, { Suspense, useState } from "react";
import tw from "tailwind-react-native-classnames";
import { AntDesign } from "@expo/vector-icons";
import UserAssestItem from "../components/UserAssestItem";
import SearchableDropdown from "react-native-searchable-dropdown";
import { useRecoilState } from "recoil";
import { userAsset } from "../atom/UserAssets";


const UserScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [quantity, setQuantity] = useState();
  
  const [asset, setAsset] = useRecoilState(userAsset);
  
  return (
    <Suspense fallback={<ActivityIndicator size="large" style={tw`mt-24`} />}>
      <View>
        <FlatList
          data={[]}
          renderItem={({ item }) => <UserAssestItem item={item} />}
          ListHeaderComponent={
            <View>
              <View
                style={tw`flex flex-row justify-between items-center mx-2.5 mt-3 mb-2`}
              >
                <View>
                  <Text style={tw`text-white font-semibold text-base`}>
                    Current Balance
                  </Text>
                  <Text
                    style={tw`text-white font-black text-2xl tracking-wide`}
                  >
                    $30986
                  </Text>
                  <Text
                    style={tw`text-white font-semibold text-base text-green-500`}
                  >
                    % change
                  </Text>
                </View>
                <View
                  style={tw`flex flex-row items-center py-1.5 px-0.5 rounded bg-green-500`}
                >
                  <AntDesign
                    name="caretup"
                    size={14}
                    color="white"
                    style={tw`mr-1`}
                  />
                  <Text style={tw`text-white font-semibold `}>1.24%</Text>
                </View>
              </View>
              <View style={tw`mx-2.5`}>
                <Text style={tw`text-white font-semibold text-lg`}>
                  Your Assets
                </Text>
              </View>
            </View>
          }
          ListFooterComponent={
            <View style={tw`flex mt-32 mx-3.5`}>
           
            </View>
          }
        />
      </View>
    </Suspense>
  );
};

export default UserScreen;
