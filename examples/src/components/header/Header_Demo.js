/**
 * Created by cherrybomb on 2017/11/20.
 */
import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import {Header} from 'IFOPReact'


export default class Header_Demo extends Component{
    constructor(props) {
        super(props);
    }

    leftButtonFunc(){
        console.log('left BUTTON click');

    }
    rightButtonFunc(){
        console.log('right BUTTON click');

    }


    render() {
        let header= {
            leftButton: '返回',
            title: '境内汇款',
            rightButton:'下一步',
            leftButtonFunc:this.leftButtonFunc,
            rightButtonFunc:this.rightButtonFunc,
            rightButtonType:'more'
        }
        return (
            <View>
                <Text>示例一</Text>
                <Header {...header}/>


            </View>
        );
    }
}