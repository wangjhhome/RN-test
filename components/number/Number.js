import React, {Component} from 'react';
import {
    StyleSheet,  
    View, 
    Text, 
    TextInput,
    Image,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const types = ['信用卡卡号', '借记卡卡号', '国内手机号', '固定电话', '普通数字'];
export default class Number extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            info: '',
            errorInfo: ''
        };
    }

    _chooseRule() { 
        let type = this.props.inputType ? this.props.inputType : 'number';

        let obj = {
            leftText: types[4],
            maxLength: 24,
            ruleArr: []
        }
        if (type) { 
            if (type == 'creditCard') {
                obj.leftText = types[0];
                obj.ruleArr = [4, 8, 12, 16];
                obj.maxLength = 24;
            } else if (type == 'debitCard') {
                obj.leftText = types[1];
                obj.ruleArr = [4, 8, 12, 16, 19];
                obj.maxLength = 24;
            } else if (type == 'mobilePhone') {
                obj.leftText = types[2];
                obj.ruleArr = [3, 7];
                obj.maxLength = 13;
            } else if (type == 'telePhone') {
                obj.leftText = types[3];
                obj.ruleArr = [3, 7];
                obj.maxLength = 14;
            } else { 
                obj.ruleArr = [30];
                obj.maxLength = 30;
            }
        }
        obj.leftText = this.props.leftText ? this.props.leftText : obj.leftText;
        return obj;
    }

    _changeRule(text) {
        let obj = this._chooseRule();
        let ruleArr = obj.ruleArr;
        if (this.props.inputType == 'telePhone') { 
            if (text[1] > 3) { 
                ruleArr = [4, 8];
            }
        }
        let ruleIndex = 0;
        let newText = '';
        if (text) {
          text = text.split(' ').join('');
          for (let i = 0; i < text.length; i++) {
            if (i % ruleArr[ruleIndex] == 0 && i != 0) {
              ruleIndex++;
              newText += ' ' + text[i];
            } else { 
              newText += text[i];
            }
          }
        }
        return newText;
    }

    _onBlur(event) { 
        let text = event.nativeEvent.text;
        if (this.props.onBlur) {
            this.setState({errorInfo: this.props.onBlur(text)});
        }
    }

    _onFocus() { 
        if (this.props.onFocus) { 
            this.props.onFocus();
        }
    }

    _onEndEditing(event) { 
        let text = event.nativeEvent.text;
        if (this.props.onEndEditing) {
            this.setState({ info : this.props.onEndEditing(text)});
        }
    }

    _iconFunc() { 
        if (this.props.rightIconFunc) { 
            this.props.rightIconFunc();
        }
    }

    _clear() { 
        this.refs.textInputRefer.clear();
        this.setState({ info: '', errorInfo: '' });
    }

    render() {

        let obj = this._chooseRule();
        let keyboardType = this.props.keyboardType == 0 ? 'phone-pad' : 'numeric';
        let rightIcon;
        if (this.props.showClearIcon) {
            rightIcon = (
                <TouchableHighlight underlayColor='transparent'
                    onPress={() => { this._clear() }}
                >
                    <Image source={require('./image/icon-close.png')}
                        style={styles.iconClose} />
                </TouchableHighlight>);
        } else { 
            if (this.props.rightIcon) { 
                rightIcon = (
                    <TouchableHighlight underlayColor='transparent' onPress={() => { this._iconFunc() }}>
                        <Image style={[styles.iconClose,this.props.rightIconStyles]} source={{uri: this.props.rightIcon}}/>
                    </TouchableHighlight>
                ); 
            }
        }

        let returnInfo;
        if (this.props.showErrorInfo) {
            returnInfo = (
                <Text style={[styles.errorInfo, this.props.errorInfoStyles]}>{this.state.errorInfo}</Text>
            );
        } else { 
            returnInfo = (
                <Text style={[styles.info, this.props.retrunInfoStyles]}>{this.state.info}</Text>
            );
        }

        let content;
        if (this.props.type && this.props.type == 2) {
            content = (
                <View style={[styles.container2, this.props.containerStyles]}>
                    <Text style={[styles.label]}>{this.props.label}</Text>
                    <View style={styles.inputCon2}>
                        <TextInput
                            ref="textInputRefer"
                            style={[styles.inputTxt2, this.props.inputTextStyles]}
                            onChangeText={(text) => this.setState({ input: this._changeRule(text) })}
                            placeholder={this.props.placeHolder}
                            value={this.state.input}
                            maxLength={obj.maxLength}
                            keyboardType={keyboardType}
                            underlineColorAndroid={"transparent"}
                            onBlur={(event) => this._onBlur(event)}
                            onFocus={() => this._onFocus()}
                            onEndEditing={(event) => this._onEndEditing(event)}
                        />
                        <View style={styles.iconCon}>
                            {rightIcon}
                        </View>
                    </View>
                    <View style={{paddingLeft: 22}}>{returnInfo}</View> 
                    <View style={styles.line}></View>
                </View>
            );
        } else { 
            content = (
                <View style={[styles.container1,this.props.containerStyles]}>
                    <View style={{flexDirection: "row"}}>
                        <View style={styles.titleCon}>
                            <Text style={[styles.titleTxt, this.props.leftTextStyles]}>{obj.leftText}</Text>
                        </View>    
                        <View style={styles.inputCon}>
                            <TextInput
                                ref="textInputRefer"
                                style={[styles.inputTxt, this.props.inputTextStyles]}
                                onChangeText={(text) => this.setState({ input: this._changeRule(text) })}
                                placeholder={this.props.placeHolder}
                                value={this.state.input}
                                maxLength={obj.maxLength}
                                keyboardType={keyboardType}
                                underlineColorAndroid={"transparent"}
                                onBlur={(event) => { this._onBlur(event) }}
                                onFocus={() => { this._onFocus()}}
                                />
                        </View>
                        <View style={styles.iconCon}>
                            {rightIcon}
                        </View>
                    </View> 
                    <View style={{paddingLeft: 100}}>{returnInfo}</View>
            </View>
            );       
        }

        return (
            <View>{content}</View>
            
        );
    }

}

Number.propTypes = {
    //样式类型
    type: PropTypes.number,
    //样式2输入标签
    label: PropTypes.string,
    //样式2是否显示回显信息
    isShowInfo: PropTypes.bool,
    //样式2回显信息样式
    retrunInfoStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //错误信息
    showErrorInfo: PropTypes.bool,
    //错误信息样式
    errorInfoStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //数值输入框类型
    inputType: PropTypes.string,
    //默认显示值
    placeHolder: PropTypes.string,
    //弹起键盘类型 0-无小数点数字键盘（默认）1-带小数点数字键盘
    keyboardType: PropTypes.number,
    //是否显示清除按钮
    showClearIcon: PropTypes.bool,
    //最大长度
    maxLength: PropTypes.number,
    //失去光标是触发的方法
    onBlur: PropTypes.func,
    //聚焦时触发的方法
    onFocus: PropTypes.func,
    //输入结束后触发的方法
    onEndEditing : PropTypes.func,
    //左侧文本
    leftText: PropTypes.string,
    //左侧文本样式
    leftTextStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //输入文本样式
    inputTextStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //右侧Icon
    rightIcon: PropTypes.string,
    //右侧Icon上点击操作
    rightIconFunc: PropTypes.func,
    //右侧Icon样式
    rightIconStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //外部容器样式
    containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
}

Number.defaultProps = {
    type: 1,
    inputType: 'number',
    placeHolder: '请输入...',
    showClearIcon: false,
    keyboardType: 0,
    maxLength: 24,
    showErrorInfo: false,
}

const styles = StyleSheet.create({
    container1: {
        margin: 0,
        padding: 0,
        flexDirection: "column", 
        width: width,
        height: 49,
        borderColor: "#d8d8d8",
        borderWidth: 1, 
        //justifyContent: 'space-between',
        justifyContent: 'flex-start',
    },
    container2: {
        margin: 0,
        padding: 0,
        flexDirection: "column", 
        width: width,
        height: 107,
        borderColor: "#d8d8d8",
        borderWidth: 1, 
        justifyContent: 'flex-start',
    },
    label: {
        paddingTop: 15,
        paddingLeft: 22,
        color: "#989899",
        fontSize: 14,
        fontFamily: "PingFangSC-Medium"
    },
    titleCon: {
        paddingLeft: 13,
        paddingTop: 12,
        width: 100,
    },
    titleTxt: {
        color: "#333",
        fontSize: 14,
        fontFamily: "PingFangSC-Medium"
    },
    inputCon: {
        marginTop: 12,
        height: 20,
        width: width - 145,
        
    },
    inputCon2: {
        paddingLeft: 22,
        width: width,
        flexDirection: "row",
    },
    inputTxt: {
        padding: 0,
        height: 20,
        color: "#666",
        fontSize: 14,
        fontFamily: "PingFangSC-Medium"
    },
    inputTxt2: {
        padding: 0,
        width: width-67,
        color: "#333",
        fontSize: 24,
        fontFamily: "PingFangSC-Medium"
    },
    iconCon: {
        paddingTop: 12,
        paddingLeft: 10,
    },
    iconClose: {
        width: 15,
        height: 15
    },
    info: {
        color: "#989899",
        fontSize: 14,
        fontFamily: "PingFangSC-Medium"
    },
    errorInfo: {
        color: "#da4940",
        fontSize: 12,
        fontFamily: "PingFangSC-Medium"
    },
    line: {
        borderColor: "#d8d8d8",
        borderTopWidth: 2,
        margin: 10,
    }
});