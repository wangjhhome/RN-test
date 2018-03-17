/**
 * Created by cherrybomb on 2017/9/22.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

import TextElement from '../text/Text'

export default class DoubleLabel extends Component{
    static propTypes={
        topText:PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render(){
        return(

            <View>
                    <TextElement text="123" type="title" align="center" />
            </View>

        );
    }
}