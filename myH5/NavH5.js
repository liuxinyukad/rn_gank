/**
 * Created by lxy on 2017/3/28.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    StatusBar
} from 'react-native';

import MyH5 from './MyH5'

export default class NavH5 extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{component: MyH5}}
                configureScene={this.configureScene}
                renderScene={this.renderScene}/>
        );
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
    }

    renderScene(route, navigator) {

        return <route.component navigator={navigator}  {...route.passProps} />;
    }

}

AppRegistry.registerComponent('NavH5', () => NavH5);


