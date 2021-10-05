import React from 'react';
import {StyleSheet,Text,StatusBar,View} from 'react-native'
import {BloodTestForm, BloodTestResult} from '../components';
import { useBloodTest } from '../shared/hooks/bloodTest-hook';
import SplashScreen from './SplashScreen';


const TestResultScreen = () => {
    const [state,setUserInput] = useBloodTest(null)
    const {bloodTests,autoSuggest,testStatus} = state;

    if(!bloodTests) return <></>
    return <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>Am I OK?</Text>
        <BloodTestForm  onSubmit={setUserInput}
                        suggest={autoSuggest}/>
        {testStatus && <BloodTestResult status={testStatus}/>}
        
    </View>
}


const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        margin: 15,
        marginTop: StatusBar.currentHeight
    },
    titleStyle: {
        alignSelf: 'center',
        fontSize: 40,
        marginTop: 20,
        color: '#87B81C'
    }
})


export default TestResultScreen;