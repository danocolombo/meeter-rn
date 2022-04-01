import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, Entypo, FontAwesome5 } from '@expo/vector-icons';
import { GlobalStyles } from './constants/styles';
import Dashboard from './screens/Dashboard';
import Users from './screens/Admin/Users';
import Groups from './screens/Admin/Groups';
import Configs from './screens/Admin/Configs';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AdminTopics() {
    return (
        <BottomTabs.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                headerTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: GlobalStyles.colors.primary500,
                },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
            }}
        >
            <BottomTabs.Screen
                name='Groups'
                component={Groups}
                options={{
                    headerShown: false,
                    title: 'Groups',
                    tabBarLabel: 'Groups',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name='boxes' size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name='Users'
                component={Users}
                options={{
                    headerShown: false,
                    title: 'Users',
                    tabBarLabel: 'Users',
                    tabBarIcon: ({ color, size }) => (
                        <Entypo name='users' size={size} color={color} />
                    ),
                }}
            />
            <BottomTabs.Screen
                name='Configs'
                component={Configs}
                options={{
                    headerShown: false,
                    title: 'Configs',
                    tabBarLabel: 'Configs',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name='settings-sharp'
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}
export default function App() {
    return (
        <>
            <StatusBar style='auto' />
            <NavigationContainer
                screenOptions={{
                    headerStyle: {
                        backgroundColor: GlobalStyles.colors.primary500,
                    },
                }}
            >
                <Stack.Navigator>
                    <Stack.Screen
                        name='AdminTools'
                        component={AdminTopics}
                        options={{
                            headerStyle: {
                                backgroundColor: GlobalStyles.colors.primary500,
                            },
                            headerTintColor: 'white',
                            title: 'Admin Tools',
                        }}
                    />
                    <Stack.Screen name='Dashboard' component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
