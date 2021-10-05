import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen, TestResultScreen } from './screens';

export default function App() {
  return (
    <>
      <TestResultScreen/>
      <StatusBar style="auto" />
    </>
  );
}
