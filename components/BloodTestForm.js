import React,{useState} from 'react';
import {StyleSheet,TextInput,View} from 'react-native';
import AutoSuggest from './AutoSuggest';


const BloodTestForm  = ({onSubmit,suggest}) => {
    const [testName, setTestName] = useState('');
    const [result, setResult] = useState('');

    const onChangeResult = (newResult) => {
        if(newResult != '' && newResult.match(/^[0-9]+$/) == null) return;
        setResult(newResult)
    }

    const handleClickSuggest = () => {
        setTestName(suggest);
        onSubmit({testName:suggest, result})
    }

    return <View style={styles.containerStyle}>
        <TextInput  placeholder="Test Name"
                    value={testName}
                    onChangeText={setTestName}
                    style={styles.inputStyle}
                    onBlur={() => onSubmit({testName,result})}/>
        {suggest && <AutoSuggest    suggest={suggest}
                                    onClick={handleClickSuggest}/>}
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