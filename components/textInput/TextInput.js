/**
 * Created by cherrybomb on 2017/11/20.
 */
'use strict';

const ColorPropType = require('ColorPropType');
const React = require('React');
const PropTypes = require('prop-types');
const StyleSheet = require('StyleSheet');
const TextInput = require('TextInput');
const View = require('View');
const Image = require('Image');
const TouchableHighlight = require('TouchableHighlight');

const invariant = require('fbjs/lib/invariant');

class mTextInput extends React.Component {

    props: {
        leftIcon?: ?any,
        showClearIcon?: ?boolean,
        inputTextColor?: ?string,
    };

    static propTypes = {
        /**
         * 左侧图标
         */
        leftIcon: PropTypes.any,
        /**
         * 右侧图标
         */
        showClearIcon: PropTypes.bool,
        /**
         * 文字颜色
         */
        inputTextColor: PropTypes.string,
    };

    static defaultProps = {
        showClearIcon: false,
    };

    render() {
        const {
            leftIcon,
            showClearIcon,
            inputTextColor,
        } = this.props;
        const imageStyles = [styles.image];
        const inputStyles = [styles.input];

        if (inputTextColor) {
            inputStyles.push({color: inputTextColor});
        }

        let leftIconElement;
        if (leftIcon) {
            leftIconElement = (
                <Image
                    source={leftIcon}
                    style={imageStyles}
                />
            );
        }
        let rightIconElement;
        if (showClearIcon) {
            rightIconElement = (
                <TouchableHighlight
                    onPress ={()=>{
                        this.refs.textInputRefer.clear();
                        this.props.onChangeText && this.props.onChangeText('');
                    }}
                    underlayColor='transparent'>
                    <Image
                        source={require('./image/clear.png')}
                        style={imageStyles} />
                </TouchableHighlight>
            );
        }

        return (
            <View style={styles.container}>
                {leftIconElement}
                <TextInput style={inputStyles} {...this.props} underlineColorAndroid='transparent' ref='textInputRefer' />
                {rightIconElement}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8, // 8px
        backgroundColor: 'white',
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 2,
        paddingBottom: 2,
        minHeight: 35,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    input: {
        fontSize: 16, //0.95rem
        textAlign: 'left',
        flex: 1,
        paddingTop: 2,
        paddingBottom: 2,
        paddingRight: 4,
        paddingLeft: 4,
    },
    image: {
        width: 16,  //1.8rem
        height: 16, //2rem
    },
});

module.exports = mTextInput;
