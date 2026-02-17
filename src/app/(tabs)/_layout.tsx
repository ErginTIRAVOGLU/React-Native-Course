import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{
      headerStyle: { backgroundColor: "cornflowerblue" },
      headerTintColor: "white",
      headerTitleStyle: { fontWeight: "bold", color: "white"},
      tabBarActiveTintColor:"crimson"    
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
          ),
        }} />
      <Tabs.Screen
        name="about"
        options={{
          headerTitle: "About",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "information-circle" : "information-circle-outline"} color={color} size={size} />
          ),
        }} />
      <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name={focused ? "person" : "person-outline"} color={color} size={size} />
          ),
        }} />
    </Tabs>
  );
}
