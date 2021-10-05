import { StatusBar } from 'expo-status-bar';
import React,{useEffect,useState} from 'react';
import { SplashScreen, TestResultScreen } from './screens';

export default function App() {
  const [showSplash,setShowSplash] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false)
    },2500)
  }, [])

  return (
    <>
      {showSplash ? <SplashScreen/> : <TestResultScreen/>}
      <StatusBar style="auto" />
    </>
  );
}
