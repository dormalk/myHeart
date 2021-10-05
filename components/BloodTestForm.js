import React,{useState} from 'react';
import {StyleSheet,TextInput,View,Text} from 'react-native';


const BloodTestForm  = ({onSubmit,suggest}) => {

    const [testName, setTestName] = useState('');
    const [result, setResult] = useState('');
    

    const onChangeResult = (result) => {
        if(result != '' && result.match(/^[0-9]+$/) == null) return;
        const num = parseInt(result)
        setResult(num)
    }

    return <View style={styles.containerStyle}>
        <TextInput  placeholder="Test Name"
                    value={testName}
                    onChangeText={setTestName}
                    style={styles.inputStyle}
                    onBlur={() => onSubmit({testName,result})}/>
        {suggest && <Text style={{alignSelf:'center'}}>Did you mean 
                    <Text style={{fontWeight: 'bold'}}> {suggest}</Text> ?
                    </Text>}
        <TextInput  placeholder="Result"
                    value={result}
                    keyboardType={'numeric'}
                    onBlur={() => onSubmit({testName,result})}
                    onChangeText={onChangeResult}
                    style={styles.inputStyle}/>
    </View>
}

const styles = StyleSheet.create({
    containerStyle:{
        marginVertical: 20,
        marginHorizontal: 25
    },
    inputStyle: {
        borderWidth: .8,
        borderColor: '#999999',
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 3,
        marginVertical: 8
    }
})


export default BloodTestForm;