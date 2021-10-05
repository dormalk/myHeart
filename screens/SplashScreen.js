import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native'


const SplashScreen = () => {
    return <View style={styles.containerStyle}>
        <View style={{flexDirection: 'row'}}>
            <Text style={styles.textStyle}>Heart</Text>
            <Image  source={require('../assets/images/splash.png')}
                    style={styles.imageStyle}/>
        </View>
    </View>
}


const styles = StyleSheet.create({
    containerStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    imageStyle: {
        height:90,
        width: 90
    },
    textStyle: {
        alignSelf: 'center',
        fontSize: 40
    }
});


export default SplashScreen;


