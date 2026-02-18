import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from 'react-native-safe-area-context';

function SignUpScreen() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const { signUp } = useAuth();
  /*
    useEffect(() => {
      router.push("/(auth)/onboarding");
    }, []);
  */
  const handleSignUp = async () => {
    if (!email || !password) {
      Alert.alert("Please enter both email and password");
      return;
    }

    if (password.length < 6) {
      Alert.alert("Password must be at least 6 characters long");
      return;
    }

    try {
      setIsLoading(true);
      await signUp(email, password);
      router.push("/(auth)/onboarding");
    } catch (error: string | any) {
      Alert.alert("Error signing up", error.message);
      console.error("Sign-up error:", error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.container}>

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        enableOnAndroid
        extraScrollHeight={20}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Create an account to continue</Text>
          <View style={styles.form}>
            <TextInput
              placeholder='Email...'
              placeholderTextColor={"#999999"}
              keyboardType='email-address'
              autoComplete='email'
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
              style={styles.input} />
            <TextInput
              placeholder='Password...'
              placeholderTextColor={"#999999"}
              secureTextEntry={true}
              keyboardType='default'
              autoComplete='password'
              autoCapitalize='none'
              value={password}
              onChangeText={setPassword}
              style={styles.input} />
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
              {isLoading ? (
                <ActivityIndicator size={24} color="#333333" />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress={() => router.push("/(auth)/login")}>
              <Text style={styles.linkText}>Already have an account? <Text style={styles.linkTextHighlight}>Login</Text></Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>

    </SafeAreaView>
  )

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

export default SignUpScreen;