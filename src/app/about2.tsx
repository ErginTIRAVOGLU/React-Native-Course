import { Image } from "expo-image";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function About2() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container} edges={['top']}>
                <ScrollView style={styles.container}>

                    <View style={styles.container}>
                        <Text style={styles.helloWorldTitle}>About Page!</Text>
                        <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image} />
                        <Text style={styles.helloWorldTitle}>Edit src/app/index.tsx to edit this screen3.</Text>
                        <TextInput placeholder="Type here to translate!" style={styles.textInput} />
                         
                    </View>

                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    helloWorldTitle: {
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

export default About2