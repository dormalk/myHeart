import React from 'react';
import { Image,StyleSheet } from 'react-native';
const smile = require(`../assets/images/smile.png`);
const sad = require(`../assets/images/sad.png`);

const BloodTestResult = ({status}) => {
    const imgName = status == 'Good' ? smile : sad;
    return <Image   source={imgName}
                    style={styles.imageStyle}/>
}

const styles = StyleSheet.create({
    imageStyle: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    }
})

export default BloodTestResult;