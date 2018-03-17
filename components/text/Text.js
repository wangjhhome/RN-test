/**
 * Created by cherrybomb on 2017/9/20.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import TextStylePropTypes from 'react-native/Libraries/Text/TextStylePropTypes'
import {
    Text,
    StyleSheet,
} from 'react-native';

import color from '../../config/theme/standard/color'
import fonts from '../../config/theme/standard/fonts'
import Util from '../../config/util'


export default class TextElement extends Component{

    constructor(props) {
        super(props);
        this.state={
            style:this.setStyle(this.props.customStyle)
        }
    }
    setNativeProps (nativeProps) {
        this._root.setNativeProps(nativeProps);
    }

    setStyle=(style)=>{
        let textStyle=[styles.textPublic,styles["text"+Util.firstUpperCase(this.props.type)],styles["text"+Util.firstUpperCase(this.props.align)]]

        if(style instanceof Array){
            textStyle=textStyle.concat(style)
        }else{
            textStyle.push(style);
        }
        return textStyle
    }

    componentWillReceiveProps(nextProps){
        this.setState({style:this.setStyle(nextProps.customStyle)})
    }

    render(){

        return(
            <Text style={this.state.style} ref={component => this._root = component}>
                {this.props.text}
            </Text>
        );
    }
}

TextElement.propTypes={
    text:PropTypes.string.isRequired,
    type:PropTypes.oneOf(['normal','title']),
    backgroundColor:PropTypes.string,
    color:PropTypes.string,
    size:PropTypes.number,
    align:PropTypes.oneOf(['left','center','right']),
    customStyle:PropTypes.oneOfType([
        PropTypes.arrayOf(TextStylePropTypes),
        TextStylePropTypes
    ])
}

TextElement.defaultProps = {
    type:'normal',
    backgroundColor:color.backgroundColor,
    color:color.normal,
    size:fonts.fontSize,
    align:'left'
};


const styles=StyleSheet.create({
    textPublic:{
        color:color.color.firstNormal,
    },
    textRight:{
        paddingRight:8,
        textAlign:'right'
    },
    textCenter:{
        textAlign:'center'
    },
    textLeft:{
        textAlign:'left'
    },
    textNormal:{
        fontSize:fonts.fontSize
    },
    textTitle:{
        fontSize:fonts.titleFontSize,
        fontWeight: 'bold',
    }

})
