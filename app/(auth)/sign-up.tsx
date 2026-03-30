import { Link } from 'expo-router'
import React from 'react'
import { Text, View } from 'react-native'


const SignUp = () => {
  return (
    <View>
      <Text>signUp</Text>
      <Link href="/(auth)/sign-in" className="mt-4 p-4 bg-primary rounded text-white">
        Sign In
      </Link>
    </View>
  )
}



export default SignUp