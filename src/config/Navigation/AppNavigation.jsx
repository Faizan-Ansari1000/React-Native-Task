import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Welcome from "../../Screens/Welcome";
import ProductDetails from "../../Screens/ProductDetails";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Products from "../../Screens/Products";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Camera from "../../Screens/Camera";
import { StatusBar } from "react-native";

// tab navigation
export const MainTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#fff',
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    height: 50,
                    paddingBottom: 10,
                },
            }}
        >
            <Tab.Screen name="Home" component={Products} options={{ tabBarIcon: ({ focused }) => (<MaterialIcons name="shopping-cart" color={focused ? '#f09a10' : '#888'} size={focused ? 28 : 24} />), }}
            />
            <Tab.Screen name="Camera" component={Camera} options={{ tabBarIcon: ({ focused }) => (<MaterialIcons name="image" color={focused ? '#f09a10' : '#888'} size={focused ? 28 : 24} />), }}
            />
        </Tab.Navigator>

    )
}

// stack navigation
export default function AppNavigation() {

    const Stack = createNativeStackNavigator();

    return (
        <>
            <StatusBar barStyle={'dark-content'} backgroundColor={'#ebedef'} />
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="ProductDetails" component={ProductDetails} />
                    <Stack.Screen name="Products" component={MainTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}