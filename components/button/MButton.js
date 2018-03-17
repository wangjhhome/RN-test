/**
 * Created by cherrybomb on 2017/10/16.
 */
'use strict';

import React from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    StyleSheet
} from 'react-native';
import invariant from 'fbjs/lib/invariant';
import ColorPropType from 'ColorPropType';
import PropTypes from "prop-types";

class MButton extends React.Component {



    static propTypes = {
        /**
         * 按钮文字
         */
        title: PropTypes.string,
        /**
         * 按钮点击事件
         */
        onPress: PropTypes.func,
        /**
         * 按钮显示类型.
         */
        type: PropTypes.oneOf(['primary', 'label', 'radius']),
        /**
         * 按钮大小
         */
        size: PropTypes.oneOf(['small', 'normal', 'large']),  // 未实现large
        /**
         * 图标路径
         */
        icon: PropTypes.any,
        /**
         * 图标是否右侧显示
         */
        iconRight: PropTypes.bool,
        /**
         * 是否可用
         */
        disabled: PropTypes.bool,
        /**
         * 未被选中状态
         */
        unActived: PropTypes.bool,
        /**
         * 支持部分属性自定义
         */
        backgroundColor: PropTypes.string,
        borderColor: PropTypes.string,
        borderWidth: PropTypes.number,
        borderRadius: PropTypes.number,
        color: PropTypes.string,
        paddingLeft: PropTypes.number,
        paddingRight: PropTypes.number,
        paddingTop: PropTypes.number,
        paddingBottom: PropTypes.number,
    };

    static defaultProps = {
        title: '',
        type: 'primary',
        size: 'normal',
        disabled: false,
        unActived: false,
    };

    render() {
        const {
            title,
            onPress,
            type,
            size,
            icon,
            iconRight,
            disabled,
            unActived,
            backgroundColor,
            borderColor,
            borderWidth,
            borderRadius,
            color,
            paddingLeft,
            paddingRight,
            paddingTop,
            paddingBottom,
        } = this.props;
        const buttonStyles = [styles.button];
        const textStyles = [styles.text];
        const imageStyles = [styles.image];
        invariant(
            typeof title === 'string',
            'The title prop of a Button must be a string',
        );
        switch (type) {
            case 'label':
                buttonStyles.push({backgroundColor: lebalBackgroundColor, borderRadius: 0});
                textStyles.push({color: letlebalTextColor});
                break;
            case 'radius':
                buttonStyles.push({borderRadius: 4});
                break;
            default:
                break;
        }
        switch (size) {
            case 'large':
                break;
            case 'small':
                buttonStyles.push({minHeight: 10, margin: 3});
                break;
            default:
                break;
        }
        if (unActived) {
            buttonStyles.push({backgroundColor: unActivedBackgroundColor});
            textStyles.push({color: unActivedTextColor});
        }
        if (disabled) {
            buttonStyles.push({backgroundColor: disabledBackgroundColor});
            textStyles.push({color: disableTextColor});
        }
        if (backgroundColor) {
            buttonStyles.push({backgroundColor: backgroundColor});
        }
        if (borderColor) {
            buttonStyles.push({borderColor: borderColor});
        }
        if (borderWidth) {
            buttonStyles.push({borderWidth: borderWidth});
        }
        if (borderRadius) {
            buttonStyles.push({borderRadius: borderRadius});
        }
        if (color) {
            textStyles.push({color: color});
        }
        if (paddingLeft) {
            buttonStyles.push({paddingLeft: paddingLeft});
        }
        if (paddingRight) {
            buttonStyles.push({paddingRight: paddingRight});
        }
        if (paddingTop) {
            buttonStyles.push({paddingTop: paddingTop});
        }
        if (paddingBottom) {
            buttonStyles.push({paddingBottom: paddingBottom});
        }
        let iconElement;
        if (icon) {
            iconElement = (
                <Image
                    source={icon}
                    style={imageStyles}
                />
            );
        }
        return (
            <TouchableHighlight
                disabled={disabled}
                onPress={onPress}
                activeOpacity={0.9}
                underlayColor='transparent'>
                <View style={buttonStyles}>
                    {!iconRight && iconElement}
                    <Text style={textStyles}>{title}</Text>
                    {iconRight && iconElement}
                </View>
            </TouchableHighlight>
        );
    }
}

let primaryBackgroundColor = '#FF7B7B';
let primaryTextColor = 'white';
let lebalBackgroundColor = 'transparent';
let letlebalTextColor = '#333333';
let disabledBackgroundColor = '#dfdfdf';
let disableTextColor = '#a1a1a1';
let unActivedBackgroundColor = '#B7B7B7';
let unActivedTextColor = '#ffffff';
let minHeight = 40;

const styles = StyleSheet.create({
    button: {
        backgroundColor: primaryBackgroundColor,
        borderRadius: 2, //2px
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        minHeight: 40,  //40px
        margin: 5,
    },
    text: {
        color: primaryTextColor,
        fontSize: 16, // 0.95rem
        padding: 2, // 0px 2pxs
        textAlign: 'center',
    },
    image: {
        width: 32,  //1.8rem
        height: 32, //2rem
    },
});

module.exports = MButton;
