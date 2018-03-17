/**
 * Created by cherrybomb on 2017/10/9.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes'
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native';

//水平弹性布局的容器
export default class HFlexContainer extends Component{
    initContainerStyle=[styles.container]
    constructor(props) {
        super(props);
        if(this.props.style instanceof Array){
            this.initContainerStyle=this.initContainerStyle.concat(this.props.style)
        }else{
            this.initContainerStyle.push(this.props.style);
        }

    }
    clickFunc=()=>{
        console.log('HFlexContainer touched')
        this.props.clickFunc(this.props.params)
    }
    render(){
        return(

        <TouchableHighlight
            underlayColor={this.props.hasclickStyle?"#f3f3f3":"#ffffff"}
            activeOpacity={0.5}
            onPress={this.props.clickFunc?this.clickFunc:null}
            style={styles.touchableContainer}>
            <View style={this.initContainerStyle}>
                {this.props.children}
            </View>
        </TouchableHighlight>
        )}
}


HFlexContainer.propTypes={
    style:PropTypes.oneOfType([
        PropTypes.arrayOf(TextStylePropTypes),
        TextStylePropTypes
    ]),
    clickFunc:PropTypes.func,//用户自定义的点击事件,
    hasclickStyle:PropTypes.bool,
    params:PropTypes.any
}


const styles=StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        flex:1

    },
    touchableContainer:{
        flexDirection: 'row',
        flex:1
    },
})
