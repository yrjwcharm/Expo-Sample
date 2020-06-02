import React, {PureComponent} from 'react';
import {FlatList,Platform,BackHandler,View,Text,TextInput,Alert,ImageBackground,TouchableOpacity} from 'react-native'
export default class Splash extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
    }
    componentDidMount(){
        AsyncStorage.getItem('userInfo',(error,userInfo)=>{
            if(JSON.parse(userInfo)==null){
                this.props.navigation.navigate('Guide');
            }else{
                this.props.navigation.navigate('Main');
            }
        })
    }

    // 渲染
    render() {
        return (
            <View style={{backgroundColor: 'transparent'}}/>
        );
    }
}
