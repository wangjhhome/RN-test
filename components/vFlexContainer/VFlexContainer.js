/**
 * Created by cherrybomb on 2017/10/11.
 */
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
export default class VFlexContainer extends Component{
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
        console.log('VFlexContainer touched')
        this.props.clickFunc()
    }

    render(){
        return(
            <TouchableHighlight
                underlayColor="#ffffff"
                onPress={this.props.clickFunc?this.clickFunc:null}>
                    <View style={this.initContainerStyle}>
                        {this.props.children}
                    </View>
            </TouchableHighlight>
        )}
}


VFlexContainer.propTypes={
    style:PropTypes.oneOfType([
        PropTypes.arrayOf(TextStylePropTypes),
        TextStylePropTypes
    ]),
    clickFunc:PropTypes.func,//用户自定义的点击事件,
}


const styles=StyleSheet.create({
    container:{
        flexDirection: 'column',
        alignItems:'center',
        justifyContent:'center',

    }
})
