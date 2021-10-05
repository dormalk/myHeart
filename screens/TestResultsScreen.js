import React,{useState} from 'react';
import {StyleSheet,Text,StatusBar,View} from 'react-native'
import {BloodTestForm, BloodTestResult} from '../components';
import {findMatchString} from '../helpers/levenshtein';

const DUMMY_DATASET = {  
    "bloodTestConfig":[  
       {  
          "name":"HDL Cholesterol",
          "threshold":40
       },
       {  
          "name":"LDL Cholesterol",
          "threshold":100
       },
       {  
          "name":"A1C",
          "threshold":4
       }
    ]
}

const TestResultScreen = () => {
    const [status, setStatus] = useState(null)
    const [suggest, setSuggest] = useState(null)

    const onSubmitInput = (formObj) => {
        const {testName,result} = formObj;
        const match = findMatchString(DUMMY_DATASET.bloodTestConfig.map((test) => test.name), testName);
        if(!Number.isNaN(result) && testName){
            if(match && testName.toLowerCase() === match.toLowerCase()) {
                const testInfo = DUMMY_DATASET.bloodTestConfig.find((test) => test.name.toLowerCase() == testName.toLowerCase()) 
                setStatus(testInfo.threshold >= result ? 'Good' : 'Bad')
            } else {
                setSuggest(match)
                setStatus(null)
            }
        } else {
            setStatus(null)
        }
    }

    return <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>Am I OK?</Text>
        <BloodTestForm  onSubmit={onSubmitInput}
                        suggest={suggest}/>
        {status && <BloodTestResult status={status}/>}
        
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