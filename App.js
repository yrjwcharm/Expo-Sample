import React,{Component} from 'react';
import {Alert,StyleSheet,Platform, Text, View, YellowBox, StatusBar} from 'react-native';
import {SplashScreen} from 'expo'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import AppContainer from './app/RouterConfig';
import './app/base/Global';
import StatusBarUtil from "./app/utils/StatusBarUtil";
console.disableYellowBox = true;
if (!__DEV__) {
    global.console = {
        info: () => {
        },
        log: () => {
        },
        warn: () => {
        },
        debug: () => {
        },
        error: () => {
        },
        assert: () => {
        }
    };
}
export default  function  App() {

        return(
            <View style={styles.container}>
                {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
                <AppContainer/>
            </View>
        )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
