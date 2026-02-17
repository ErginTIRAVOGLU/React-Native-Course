import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

function Profile() {
    return (
        <SafeAreaProvider>
            <SafeAreaView edges={['top']}>
                <View>
                    <Text>Profile</Text>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

export default Profile