import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import UserScreen from "./screens/UserScreen"
import { StatusBar } from "react-native"

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator>
        <Stack.Screen
          name="UserInfoApp"
          component={UserScreen}
          options={{
            headerStyle: {
              backgroundColor: "#0e0f14",
            },
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: "600",
              color: "#fff",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

