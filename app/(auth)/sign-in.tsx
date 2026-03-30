import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'

const SignIn = () => {
  return (
    <View>
      <Text>signIn</Text>
      <Link href="/(auth)/sign-up" className="mt-4 p-4 bg-primary rounded text-white">
        Create Account
      </Link>
    </View>
  )
}

export default SignIn