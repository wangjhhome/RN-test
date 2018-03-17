/**
 * Created by cherrybomb on 2017/9/6.
 * 这个结构写得有点乱，后续有时间完善一下
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Text,
    View,
    StyleSheet,
    TouchableHighlight,
    Image
} from 'react-native';

import TextElement from '../text/Text'

import ModalBox from '../modalbox/ModalBox'


import color from '../../config/theme/standard/color'


//可点击的文本
class ClickAbleText extends Component {
    constructor(props) {
        super(props);

    }

    clickFunc=()=>{
        if(this.props.clickFunc){
            this.props.clickFunc();
        }

    }

    renderLeftImage(){
        if(this.props.hasLeftImage){
            return this.renderImage()
        }
    }
    renderContent(){
        if(this.props.isImage){
            return <Image
                style={styles.clickableTextImage}
                source={this.props.title}
            />
        }else{
            return <TextElement text={this.props.title} customStyle={styles.clickableTextTitle} align={this.props.align}/>
        }
    }
    renderImage(){
        return(
            <Image
                style={styles.clickableTextIcon}
                source={require('./image/navbar_btn_arrow_new.png')}
            />
        )
    }

    render(){
        return(
            <TouchableHighlight
                underlayColor="#ffffff"
                onPress={this.clickFunc}>
                <View style={styles.clickableTextContainer}>
                    {this.renderLeftImage()}
                    {this.renderContent()}
                </View>
            </TouchableHighlight>
        );
    }
}
ClickAbleText.propTypes={
    // title:PropTypes.string,
    hasLeftImage:PropTypes.bool,
    clickFunc:PropTypes.func,
    align:PropTypes.string,
    isImage:PropTypes.bool
}
ClickAbleText.defaultProps = {
    hasLeftImage:true,
    align:'left',
    isImage:false
};


export default class Header extends Component{
    constructor(props) {
        super(props);
    }

    renderRight(){
        if(this.props.rightButtonType=='text'){
            return <ClickAbleText  style={styles.cellRight} title={this.props.rightButton} hasLeftImage={false} clickFunc={this.props.rightButtonFunc} align='right'/>
        }else if(this.props.rightButtonType=='more'){
            return <ClickAbleText title={require('./image/more_right_btn.png')} hasLeftImage={false} isImage={true} clickFunc={this.props.rightButtonFunc} align='right'/>
        }
    }

    render(){
        return(

            <View style={styles.flexContainer}>
                <ClickAbleText style={styles.cellLeft} title={this.props.leftButton} clickFunc={this.props.leftButtonFunc}/>
                <View style={styles.cellCenter}>
                    <TextElement text={this.props.title} type="title" align="center" />
                </View>
                {this.renderRight()}
            </View>

        );
    }
}

Header.propTypes={
    leftButton:PropTypes.string,
    hasLeftImage:PropTypes.bool,
    rightButton:PropTypes.string,
    title:PropTypes.string,
    leftButtonFunc:PropTypes.func,
    rightButtonFunc:PropTypes.func,
    rightButtonType:PropTypes.oneOf(['text','more'])//右侧按钮的类型，默认为文字(text),more则显示...，且rightButton失效
}

Header.defaultProps = {
    hasLeftImage:true,
    rightButtonType:'text'//
};

var styles = StyleSheet.create({
    flexContainer: {
        // 容器需要添加direction才能变成让子元素flex
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor:'rgba(181,201,210,.6)',
        borderBottomWidth:1,
        backgroundColor:'#fff',
    },
    cellCenter: {
        flex: 1,
        height: 50,
        alignSelf:'center',
        justifyContent: 'center',
    },
    cellLeft: {
        height: 50,
        width: 80,
        alignSelf:'center',
        justifyContent: 'flex-start'
    },
    cellRight: {
        height: 50,
        width: 80,
        alignSelf:'center',
        justifyContent: 'center',
    },


    clickableTextContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: 50,
        width: 80,
        paddingRight:10
    },

    clickableTextTitle:{
        flex: 1,
        alignSelf:'center',
        justifyContent: 'center',
        fontSize:16
    },
    clickableTextIcon:{
        height:25,
        width:18,
        marginLeft:10,
        marginRight:5,
        alignSelf:'center',
        justifyContent: 'center'
    },
    clickableTextImage:{
        height:6,
        width:27,
        resizeMode: 'stretch'
    },

    clickableTextTouch:{
        opacity:0.5
    },

});