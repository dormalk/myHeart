import React from 'react';
import { Image,StyleSheet,Text,View } from 'react-native';
const smile = require(`../assets/images/smile.png`);
const sad = require(`../assets/images/sad.png`);
const unknonwn = require('../assets/images/thinking.png')

const BloodTestResult = ({status}) => {
    const imgName = status == 'Good' ? smile : status == 'Bad' ? sad : unknonwn;
    const textColor = status == 'Good' ? '#87B81C' : status == 'Bad' ? '#f72246' : '#999999';
    const textContent =  status == 'unknown' ? 'Unkown Test Category' : 'Blood Test Category';
    return <View style={styles.containerStyle}>
        <Text style={{...styles.textStyle, color: textColor}}>{textContent}</Text>
        <Image   source={imgName}
                        style={styles.imageStyle}/>
    </View>
}

const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: 30
    },
    imageStyle: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 24,
        marginBottom: 15,

    }
})

export default BloodTestResult;