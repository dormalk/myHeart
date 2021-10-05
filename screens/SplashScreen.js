import React from 'react';
import {View,Text,StyleSheet} from 'react-native'


const SplashScreen = () => {
    return <View style={styles.textStyle}>
        <Text style={styles.textStyle}>MyHeart</Text>
    </View>
}


const styles = StyleSheet.create({
    containerStyle:{
        justifyContent: 'center'
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 40
    }
});


export default SplashScreen;


