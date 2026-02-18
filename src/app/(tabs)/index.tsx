 
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function Index() {
    const router = useRouter();
    return ( 
            <SafeAreaView style={styles.container} edges={['bottom','top']}>
                <TouchableOpacity style={styles.fab} onPress={() => router.push("/(auth)/login")}>
                    <Text style={styles.fabText}>+</Text>
                </TouchableOpacity> 
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
  fab: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "crimson",
    justifyContent: "center",
    alignItems: "center",
  },
  fabText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
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

export default Index