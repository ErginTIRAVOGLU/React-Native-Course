 import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { ActivityIndicator, Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Index2() {
  const router = useRouter();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={['top']}>
        <ScrollView style={styles.container}>
           
            <View style={styles.container}>
              <Text style={styles.helloWorldTitle}>Hello World!</Text>
              <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image} />
              <Text style={styles.helloWorldTitle}>Edit src/app/index.tsx to edit this screen3.</Text>
              <TextInput placeholder="Type here to translate!" style={styles.textInput} />
              <ActivityIndicator size="large" color="#0000ff" />
              <Link href="/about" style={styles.helloWorldTitle2}>
                Go to About Page
              </Link>
              <Button title="Go to About Page" onPress={() => {
                 router.push("/about");
              }} />
              <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Text>
            </View>
        
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  helloWorldTitle: {
    color: "red",
  },
   helloWorldTitle2: {
    padding: 20,
    borderWidth: 1,
    borderColor: "red",
    color: "red",
  },
  image: {
    width: 64,
    height: 64,
  },
  textInput: {
    height: 40,
    borderColor: '#000000',
    borderBottomWidth: 1,
    marginBottom: 36,
    width: '80%',
  },
  text: {
    fontSize: 36,
  }

});
