import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    /*
    <Stack 
      screenOptions={{
        headerStyle: { backgroundColor: "cornflowerblue" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", color: "white"},
          animation: "slide_from_right",       
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen name="about" options={{ headerTitle: "About" }} />
    </Stack>
    */
   <Stack screenOptions={{
    headerShown: false,
        headerStyle: { backgroundColor: "cornflowerblue" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", color: "white"},
          animation: "slide_from_right",       
      }}>
    <Stack.Screen name="(tabs)" />
   </Stack>
  );
}
