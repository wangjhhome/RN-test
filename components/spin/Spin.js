/**
 * Created by cherrybomb on 2017/11/8.
 */
'use strict';

const ColorPropType = require('ColorPropType');
const React = require('React');
const PropTypes = require('prop-types');
const StyleSheet = require('StyleSheet');
const Text = require('Text');
const View = require('View');

import constant from '../../config/theme/standard/constant';


import CircleProgress from './progress/CircleProgress.js';


class Spin extends React.Component {


    static propTypes = {
        /**
         * 提示文字
         */
        text: PropTypes.string,
        /**
         * 文字颜色
         */
        textColor: PropTypes.string,
        /**
         * 进度圈颜色
         */
        circleColor: PropTypes.string,
        /**
         * 背景颜色
         */
        backgroundColor: PropTypes.string,
        /**
         * 进度圈与文字位置关系
         */
        direction: PropTypes.oneOf(['row', 'column']),
        /**
         * 是否可见
         */
        visible: PropTypes.bool,
    };

    static defaultProps = {
        text: '正在载入...',
        textColor: '#ffffff',
        circleColor: '#ff727f',
        // backgroundColor: '#bf333333',
        backgroundColor: '#000000',
        direction: 'row',
    };

    render() {
        const {
            text,
            textColor,
            circleColor,
            backgroundColor,
            direction,
            visible,
        } = this.props;

        const containerStyles = [styles.container];
        const backgoundStyles = [styles.backgound];
        const textStyles = [styles.text];

        backgoundStyles.push({backgroundColor: backgroundColor, flexDirection: direction});
        textStyles.push({color: textColor});

        let spinElement;

        if(visible){
            spinElement = (
                <View style={containerStyles} >
                    <View style={backgoundStyles}>
                        <CircleProgress color={circleColor} duration={250} size={30} />
                        <Text style={textStyles}>{text}</Text>
                    </View>
                </View>
            )
        }else{
            spinElement =(<View></View>)
        }


        return (
            spinElement
        );
    }
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        justifyContent:'center',
        alignItems:'center',
    },
    backgound: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        padding: 5,
        height:constant.screenWidth*2/15,
        width:constant.screenWidth/3,
        opacity:0.5
    },
    text: {
        fontSize: 16,
        marginLeft: 5,
        marginRight: 3,
    },
});

module.exports = Spin;
