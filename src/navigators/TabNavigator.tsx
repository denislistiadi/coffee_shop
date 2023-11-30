/* eslint-disable react/no-unstable-nested-components */
import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import FavScreen from '../screens/FavScreen';
import OrderScreen from '../screens/OrderScreen';
import {COLORS} from '../theme/theme';
import CustomIcon from '../components/CustomIcon';

const Tab = createBottomTabNavigator();

interface ITabIcon {
  name: string;
  focused: any;
}

const BluerEffect = () => (
  <BlurView overlayColor="" blurAmount={15} style={styles.BlurViewStyles} />
);

const TabIcon = ({name, focused}: ITabIcon) => (
  <CustomIcon
    name={name}
    size={24}
    color={focused ? COLORS.primaryOrangeHex : COLORS.primaryLightGreyHex}
  />
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarBackground: () => <BluerEffect />,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon name="home" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon name="cart" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon name="like" focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({focused}) => <TabIcon name="bell" focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    height: 80,
    position: 'absolute',
    backgroundColor: COLORS.primaryBlackRGBA,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: 'transparent',
  },
  BlurViewStyles: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
