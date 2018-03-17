import React, {Component} from 'react';
import {
    StyleSheet,  
    View,  
    Image,  
    Text,  
    TouchableHighlight,  
    Animated,  
    Easing,  
    Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');
const headH = 49;
const aHeight = 370; 
const maxHeight = 450; 
const [left, top] = [0, 0];  

export default class Layer extends Component { 
    
    constructor(props) {  
        super(props);  
        this.state = {  
            offset: new Animated.Value(0),  
            opacity: new Animated.Value(0),
            mask: true,
            clickMask : false,
            title: " ",
            innerHeight: aHeight,
            icon: null,
            iconFun : null,
            operateTxt: "操作",
            operateFun: null,
            hide: true,  
        };  
    }
    //显示动画
    _in() {  
        Animated.parallel([  
          Animated.timing(  
            this.state.opacity,  
            {  
              easing: Easing.linear,  
              duration: 500,  
              toValue: 1,  
            }  
          ),  
          Animated.timing(  
            this.state.offset,  
            {  
              easing: Easing.linear,  
              duration: 500,  
              toValue: 1,  
            }  
          )  
        ]).start();  
    } 
    //隐藏动画  
    _out() {
        Animated.parallel([
            Animated.timing(
                this.state.opacity,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 0,
                }
            ),
            Animated.timing(
                this.state.offset,
                {
                    easing: Easing.linear,
                    duration: 500,
                    toValue: 0,
                }
            )
        ]).start((finished) => this.setState({hide: true}));
    }
    _return() { 
        if(!this.state.hide){  
            this._out();  
          } 
    }
    
    render() {
        let maskStyle = this.state.mask ? styles.mask : styles.maskNo;
        let isClickMask = this.state.mask && this.state.clickMask ? true : false;
        let floatHeight = this.state.innerHeight;
        let iconFunction = this.state.iconFun == null ? this._return.bind(this) : this.state.iconFun;
        if (this.state.hide) {
            return (<View />)
        } else {
            return (
                <View style={styles.container}>
                    {
                        isClickMask && <TouchableHighlight style={maskStyle} activeOpacity={0.8}  underlayColor='#383838' onPress={this._out.bind(this)}>
                            <Text></Text></TouchableHighlight>     
                    }
                    {
                       !isClickMask && <TouchableHighlight style={maskStyle} underlayColor='transparent'>
                       <Text></Text></TouchableHighlight> 
                    }
                    <Animated.View style={[styles.float,{height:floatHeight}, {
                        transform: [{
                            translateY: this.state.offset.interpolate({
                                inputRange: [0, 1],
                                outputRange: [height, (height-floatHeight)]
                            }),
                        }]
                    }]}>
                        <View style={styles.floatHead}>
                            {
                                this.state.icon == null &&<TouchableHighlight style={styles.floatReturn} underlayColor='transparent' onPress={this._return.bind(this)}>
                                    <Text style={styles.returnText}>&lt;</Text>
                                </TouchableHighlight>
                            }
                            {
                                this.state.icon != null &&<TouchableHighlight style={styles.floatReturn} underlayColor='transparent' onPress={iconFunction}>
                                    <Image style={{width: 22, height: 22}} source={{uri: this.state.icon}}/>
                                </TouchableHighlight>
                            }
                            <Text style={styles.floatTitle}>{this.state.title}</Text>
                            <TouchableHighlight underlayColor='transparent' onPress={this.state.operateFun}>
                                <Text style={styles.floatCon}>{this.state.operateTxt}</Text>
                            </TouchableHighlight>
                        </View>
                        <View style={styles.content}>{this.props.children}</View>
                    </Animated.View>
                </View>
            );
        }
    }
    //显示浮层方法
    show(options) { 
        if (options) {
            mask = options.mask == undefined ? true : options.mask;
            clickMask = options.clickMask == undefined ? false : options.clickMask;
            title = options.title == undefined ? " " : options.title;
            innerHeight = options.innerHeight == undefined ? aHeight : options.innerHeight;
            if (innerHeight > maxHeight) { 
                innerHeight = aHeight;
            }
            icon = options.icon == undefined ? null : options.icon;
            iconFun = options.icon == undefined ? null : options.iconFun;
            operateTxt = options.operateTxt == undefined ? "操作" : options.operateTxt;
            operateFun = options.operateFun == undefined ? null : options.operateFun;
            if (this.state.hide) {
                this.setState({
                    mask: mask,
                    clickMask: clickMask,
                    title: title,
                    icon: icon,
                    iconFun: iconFun,
                    operateTxt: operateTxt,
                    operateFun: operateFun,
                    innerHeight: innerHeight,
                    hide: false
                }, this._in());
            }
        } else { 
            if (this.state.hide) { 
                this.setState({ hide: false }, this._in());
            }
        }

        
    }
    //隐藏浮层方法
    hide() { 
        this._out();
    }

}

const styles = StyleSheet.create({
    container: {  
        position:"absolute",  
        width:width,  
        height:height,  
        left:left,  
        top:top,  
    },
    maskNo: {
        justifyContent:"center",    
        opacity: 0,
        backgroundColor:"#383838",
        position:"absolute",  
        width:width,  
        height:height,  
        left:left,  
        top:top,
    },
    mask: {  
        justifyContent:"center",  
        backgroundColor:"#383838",  
        opacity:0.8,  
        position:"absolute",  
        width:width,  
        height:height,  
        left:left,  
        top:top,  
    },
    float: {  
        width:width,  
        height: aHeight, 
        backgroundColor:"#fff",  
        alignItems:"center",  
        justifyContent:"space-between",  
    }, 
    floatHead: {
        width:width, 
        height: headH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 13,
        paddingBottom: 12,
        paddingRight: 12,
        paddingLeft: 8,
        borderBottomWidth:2,  
        borderColor:"#D8D8D8" 
    },
    floatTitle: {
        color: "#333333",
        fontSize: 18,
        fontFamily: "PingFangSC-Medium"
    },
    floatCon: {
        color: "#3399FF",
        fontSize: 16,
        fontFamily: "PingFangSC-Medium"
    },
    floatReturn: {
        marginLeft: 8
    },
    returnText: {
        color: "#BDBDBD",
        fontSize: 18,
        fontWeight: '400',
        fontFamily: "PingFangSC-Medium"
    },
    content: {
        flex: 1,
    }
      
});