import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.helloWorldTitle}>Hello World!</Text>
      <Image source = {{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image} />
      <Text style={styles.helloWorldTitle}>Edit src/app/index.tsx to edit this screen3.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  helloWorldTitle: {
    color:"red",
  },
  image: {
    width: 64,
    height: 64,
  }
  
});
