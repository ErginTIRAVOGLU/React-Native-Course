import { Button } from '@expo/ui/jetpack-compose';
import { router } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function Index() {
    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['top']}>
                <View>
                    <Text>Index</Text>
                    <Button onPress={() => {
                        router.push("/about");
                    }} >
                        <Text>Go to About</Text>
                    </Button>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Index