import { useRouter } from "expo-router";
import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";

function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        extraScrollHeight={20}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Login to Continue</Text>

          <View style={styles.form}>
            <TextInput
              placeholder="Email..."
              placeholderTextColor="#999999"
              keyboardType="email-address"
              autoComplete="email"
              autoCapitalize="none"
              style={styles.input}
            />

            <TextInput
              placeholder="Password..."
              placeholderTextColor="#999999"
              secureTextEntry
              autoComplete="password"
              autoCapitalize="none"
              style={styles.input}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.link}
              onPress={() => router.push("/(auth)/signup")}
            >
              <Text style={styles.linkText}>
                Don't have an account?{" "}
                <Text style={styles.linkTextHighlight}>
                  Sign Up
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#666666",
    marginBottom: 24,
  },
  form: {
    width: "100%",
  },
  input: {
    height: 48,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  button: {
    backgroundColor: "#DDDDDD",
    paddingVertical: 14,
    alignItems: "center",
    borderRadius: 6,
  },
  link: {
    marginTop: 16,
    alignItems: "center",
  },
  buttonText: {
    color: "#333333",
    fontWeight: "bold",
  },
  linkText: {
    color: "#666666",
  },
  linkTextHighlight: {
    color: "#333333",
    fontWeight: "bold",
  },
});


export default LoginScreen;