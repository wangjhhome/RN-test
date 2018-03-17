/**
 * Created by mac on 2017/12/6.
 */
'use strict';

import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableHighlight,
    TouchableWithoutFeedback,
    StyleSheet,
} from 'react-native';

import PropTypes from "prop-types";

class PickerTitle extends React.Component{

    static propTypes = {

        /**
         * 标题
         */
        title: PropTypes.string,

        /**
         * 左边按钮文字
         */
        leftButton : PropTypes.string,

        /**
         * 右边按钮文字
         */
        rightButton : PropTypes.string,

        /**
         * 左边按钮点击事件
         */
        leftPress : PropTypes.func,

        /**
         * 右边按钮点击事件
         */
        rightPress : PropTypes.func,

        /**
         * 标题
         */
        titleStyle: PropTypes.string,

    }

    static defaultProps = {
        title: '',
    };



    render() {
        const titleStyles = this.props.titleStyle?this.props.titleStyle:[styles.title];
        const leftButtonStyles = [styles.leftButton];
        const rightButtonStyles = [styles.rightButton];
        return (
            <View>
                <View style = {{height: 0.5, backgroundColor: '#a2a2a2'}} />
                <View style = {{height: 40, flexDirection: 'row'}}>
                    <TouchableHighlight
                        onPress={this.props.leftPress}
                        activeOpacity={0.9}
                        underlayColor='transparent'
                        style = {{flex: 0.9, justifyContent: 'center', alignItems: 'flex-start'}}>
                        <View>
                            <Text style={leftButtonStyles}>{this.props.leftButton}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight  style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <View>
                            <Text style={titleStyles}>{this.props.title}</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={this.props.rightPress}
                        activeOpacity={0.9}
                        underlayColor='transparent'
                        style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <View>
                            <Text style={rightButtonStyles}>{this.props.rightButton}</Text>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style = {{height: 0.5, backgroundColor: '#a2a2a2'}} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        color: 'blue',
    },
    leftButton: {
        color: 'red',
        marginLeft: 15,
    },
    rightButton: {
        color: 'red',
        marginRight: 15,
    },
});

module.exports = PickerTitle;