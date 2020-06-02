import React from 'react';
import {AppRegistry, StatusBar,Dimensions,AsyncStorage} from 'react-native';
import { scaleSize} from '../utils/ScreenUtil';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Image from '../resources/Image';
// import store from 'react-native-simple-store';
import ErrorUtil  from '../utils/ErrorUtil'
//判断是不是iphonex
import Config from './Config';
let {height, width} = Dimensions.get('window');
global.px2dp = scaleSize;
global.scale=scale;
global.verticalScale=verticalScale;
global.moderateScale=moderateScale;
global.px2dp = scaleSize;
// 获取屏幕宽度
global.SCREEN_WIDTH = width;
// 获取屏幕高度
global.SCREEN_HEIGHT = height;
// 通过系统API获得屏幕宽高
global.Config=Config;
global.Images=Image;
global.AsyncStorage=AsyncStorage;





