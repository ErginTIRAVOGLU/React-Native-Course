import { Stack } from 'expo-router';
import React from 'react';

function AuthLayout() {



    return (
        
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="login" />
            <Stack.Screen name="signup" />
        </Stack>
    )
}

export default AuthLayout