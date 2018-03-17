/**
 * Created by mac on 2017/12/14.
 */
import React, { Component } from 'react';
import { View, Text,Image } from 'react-native';
import {InformationContainer} from 'IFOPReact'


export default class InformationContainer_Demo extends Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <InformationContainer
                    information={"示馨提示温馨提示温馨提示"}
                    infoFlag={1}
                    minHeight={50}
                />
            </View>
        );
    }
}