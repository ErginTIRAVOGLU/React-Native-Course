 
import { router } from 'expo-router';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['top']}>
                <View>
                    <Text>Index</Text>
                    <Button title="Go to About" onPress={() => router.push("/about")} />
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Index