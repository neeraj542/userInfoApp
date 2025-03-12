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
          name="User-Info"
          component={UserScreen}
          options={{
            headerStyle: {
              backgroundColor: "#fff",
            },
            headerShadowVisible: false,
            headerTitleStyle: {
              fontWeight: "600",
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

