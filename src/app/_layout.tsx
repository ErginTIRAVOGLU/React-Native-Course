import { AuthProvider } from "@/context/AuthContext";
import { Stack, useRouter } from "expo-router";
import { useEffect } from "react";

export default function RootLayout() {

  const router = useRouter();
  let isAuth = false;

  useEffect(() => {
    if (isAuth) {
      router.push("/(tabs)");
    } else {
      router.push("/(auth)/login");
    }
  }, []);

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

    <AuthProvider>
      <Stack screenOptions={{
        headerShown: false,
        headerStyle: { backgroundColor: "cornflowerblue" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold", color: "white" },
        animation: "slide_from_right",
      }}>
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="(auth)" />
      </Stack>
    </AuthProvider>
  );
}
