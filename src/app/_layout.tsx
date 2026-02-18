import { AuthProvider, useAuth } from "@/context/AuthContext";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

function RouteGuard() {

  const router = useRouter();
  const { user } = useAuth();
  const segments = useSegments();

  const inAuthGroup = segments[0] === "(auth)";
  const inTabsGroup = segments[0] === "(tabs)";


  useEffect(() => {
    if (!user) {
      if (!inAuthGroup) {
        router.push("/(auth)/login");
      }

    } else {
      if (!inTabsGroup) {
        router.push("/(tabs)");
      }
    }
  }, [user, segments, router]);

  return (
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
  )
}

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

    <AuthProvider>
      <RouteGuard />
    </AuthProvider>
  );
}
