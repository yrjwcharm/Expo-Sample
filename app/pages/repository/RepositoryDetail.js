import React, {PureComponent} from 'react';
import {
    ScrollView,
    Dimensions,
    Linking,
    SafeAreaView,
    StyleSheet,
    DeviceEventEmitter,
    Image,
    FlatList,
    Platform,
    BackHandler,
    View,
    Text,
    TextInput,
    Alert,
    ImageBackground,
    TouchableOpacity
} from 'react-native'
import Title from '../../components/Title'
import {Drawer} from "native-base";
import {StringUtils} from "../../utils/StringUtils";
 import HTML from "react-native-htmlview";
import Loading from "../../components/Loading";

export default class RepositoryDetail extends PureComponent {
    // 默认属性
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            visible: true,
            title: '',
            txt: '',
            description: '',
        }
    }

    componentDidMount(){
        const {params} = this.props.navigation.state;
        let url = Config.requestUrl + Config.informationPage.listDetail + `?id=${params.id}`;
        fetch(url, {method: 'POST'}).then(res => res.json()).then(responseText => {
            this.setState({visible: false}, () => {
                if (responseText.code === '200') {
                    const {title, description, txt, releaseDate} = responseText.body;
                    console.log(333, responseText);
                    this.setState({title, txt, description, releaseDate});
                }
            })

        }).catch(error => {
            Toast.fail(error)
        })
    }

    _renderHtml = (html) => {
        if (!StringUtils.isEmpty(html)) {
            console.log(333, html);
            return (
                <View style={{marginHorizontal: px2dp(30)}}>
                    <HTML value={html}/>
                </View>
            );
        } else {
            return (<View/>);
        }
    }

    // 渲染
    render() {
        const {title, description, releaseDate, txt: html} = this.state;
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={{height: global.height, justifyContent: 'center', backgroundColor: '#5691F7'}}>
                    <View style={{
                        marginHorizontal: px2dp(34),
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                        <TouchableOpacity activeOpacity={0.8} onPress={() => this.props.navigation.goBack()}>
                            <Image source={Images.back} style={{width: px2dp(40), height: px2dp(40)}}/>
                        </TouchableOpacity>
                        <Text style={{
                            fontSize: px2dp(36),
                            color: "#ffffff"
                        }}>知识库</Text>
                        <Image source={null} style={{width: px2dp(42), height: px2dp(36)}}/>
                    </View>
                </View>
                <ScrollView keyboardShouldPersistTaps={Platform.OS === 'android' ? 'always' : 'never'}
                            showsVerticalScrollIndicator={false}>
                    <View style={{padding: px2dp(30), backgroundColor: '#ffff'}}>
                        <Text style={{
                            fontSize: moderateScale(21),
                            color: "#222222",
                            lineHeight: px2dp(58),
                        }}>
                            {title}
                        </Text>
                        <Text style={{
                            marginVertical: px2dp(20),
                            marginLeft: px2dp(8),
                            fontSize: moderateScale(16),
                            color: "#999999"
                        }}>{releaseDate}</Text>
                        {this._renderHtml(html)}
                    </View>
                </ScrollView>
                <Loading visible={this.state.visible}/>
            </SafeAreaView>
        );
    }

}
