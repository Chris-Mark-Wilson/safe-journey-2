
import 'react-native-gesture-handler';
import { enableScreens} from 'react-native-screens'
enableScreens();
import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { MyFriends } from "./components/MyFriends";
import { AddFriend } from "./components/AddFriend";
import Header from "./components/Header";
import { Home } from "./components/Home";
import { UserProvider } from "./context/userContext";
import { FriendProvider } from "./context/friendContext";
import { FriendListProvider } from "./context/friendListContext";
import { UserPage } from "./components/UserPage";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <FriendProvider>
      <UserProvider> 
        <FriendListProvider>
        <NavigationContainer>
          <View>
            <Header />
          </View>
          <Drawer.Navigator initialRouteName="Home" screenOptions={{headerTitleStyle: {color:'gray'}, headerTintColor: 'gray'}}>
            <Drawer.Screen name="Home" component={Home}/>
            <Drawer.Screen name="My Friends" component={MyFriends} />
            <Drawer.Screen name="Add Friend" component={AddFriend} />
            <Drawer.Screen name="My Profile " component={UserPage} />
          </Drawer.Navigator>
        </NavigationContainer>
      </FriendListProvider>
    </UserProvider>
  </FriendProvider> 
  );
}
