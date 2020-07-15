import React from 'react';
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/MaterialIcons";


import Home from "./pages/Home";
import Places from "./pages/Places";
import About from "./pages/About";

import Plans from "./pages/More/Plans";
import Join from "./pages/More/Join";
import Guideline from "./pages/More/Guideline";

import Categories from "./pages/New/Categories";
import StoresList from "./pages/New/StoresList";
import Company from "./pages/New/Company";
import ProductList from "./pages/New/ProductList";
import Ticket from "./pages/New/Ticket";

export default createAppContainer(
    createSwitchNavigator({
        App: createBottomTabNavigator({
            Home,
            Places,
            New: {
                screen: createStackNavigator({
                    Categories,
                    StoresList,
                    Company,
                    ProductList,
                    Ticket
                }, {
                    defaultNavigationOptions: {
                        headerTransparent: true,
                        headerTintColor: '#fff',
                        headerLeftContainerStyle: {
                            marginLeft: 20,
                        },
                    }
                }),
                navigationOptions: {
                    tabBarLabel: 'Categorias',
                    tabBarVisible: true,
                    tabBarIcon: ( <Icon name="local-play" size={25} color="#fff" /> )
                } 
            },
            About,
            More: {
                screen: createStackNavigator({
                    Guideline,
                    Plans,
                    Join
                },
                {
                    defaultNavigationOptions: {
                        headerTransparent: true,
                        headerTintColor: '#fff',
                        headerLeftContainerStyle: {
                            marginLeft: 20,
                        },
                    }
                }),
                    navigationOptions: {
                    tabBarLabel: 'Empresa',
                    tabBarVisible: true,
                    tabBarIcon: ( <Icon name="account-box" size={20} color="#fff" /> )
                } 
            },
        }, {
            resetOnBlur: true,
            tabBarOptions: {
                keyboardHidesTabBar: true,
                activeTintColor: '#fff',
                inactiveTintColor: 'rgba(255, 255, 255, 0.8)',
                style: {
                    backgroundColor: '#ab59c1',
                }
            }
        })
    })
)
