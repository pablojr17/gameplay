import { StatusBar } from 'react-native';
import React from 'react';
import { SignIn } from './src/screens/SignIn'

export default function App() {
  return (
    <>
      <SignIn />
      <StatusBar 
        barStyle="light-content"
        translucent
        backgroundColor="transparent" />
    </>
  );
}
