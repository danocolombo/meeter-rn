import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './screens/Dashboard';
import Users from './screens/Admin/Users';
import Groups from './screens/Admin/Groups';
import Configs from './screens/Admin/Configs';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function AdminTopics() {
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen
                name='Groups'
                component={Groups}
                options={{ headerShown: false }}
            />
            <BottomTabs.Screen
                name='Users'
                component={Users}
                options={{ headerShown: false }}
            />
            <BottomTabs.Screen
                name='Configs'
                component={Configs}
                options={{ headerShown: false }}
            />
        </BottomTabs.Navigator>
    );
}
export default function App() {
    return (
        <>
            <StatusBar style='auto' />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Admin Tools' component={AdminTopics} />
                    <Stack.Screen name='Dashboard' component={Dashboard} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}
