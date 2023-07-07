import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import UserData from '../components/auth/UserData';
import LoginForm from '../components/auth/LoginForm';
import useAuth from '../hooks/useAuth';

export default function Account() {
    const {auth} = useAuth();
    return (
      <SafeAreaView style={{flex: 1}}>
          {auth ? <UserData /> : <LoginForm />}
      </SafeAreaView>
  )
}