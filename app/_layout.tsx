import { Stack } from "expo-router";
import "../global.css";
import React from 'react'

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name="forecast" options={{headerShown: false}}/>
      <Stack.Screen name="qrcode" options={{title : 'Go to my Official Website'}}/>
    </Stack>
  )
}

export default Layout
