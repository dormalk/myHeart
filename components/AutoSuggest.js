import React from 'react';
import { StyleSheet,Text,TouchableWithoutFeedback  } from 'react-native';


const AutoSuggest = ({onClick, suggest}) => {
    return <Text style={styles.styleContainer}>
                Did you mean 
                <TouchableWithoutFeedback  onPress={onClick}>
                    <Text style={styles.suggestStyle}> {suggest} </Text> 
                </TouchableWithoutFeedback>
                ?
            </Text>
}

const styles = StyleSheet.create({
    styleContainer: {
        alignSelf: 'center',
    },
    suggestStyle: {
        fontWeight: 'bold',
        color: '#87B81C',
    }
})

export default AutoSuggest;
