import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function About() {
    return (
        <SafeAreaProvider>
            <SafeAreaView  edges={['top']}>
                <View>
                    <Text>About</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default About