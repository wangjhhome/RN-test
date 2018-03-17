import React, { Component } from 'react';
import { View, Animated, Text, StyleSheet,Easing} from 'react-native';
import PropTypes from 'prop-types';

export default class NoticeBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            translateX: new Animated.Value(0),
            translateY: new Animated.Value(0),
        };
        this.firstEx = true;
    }

    bgViewWOnLayout(e) {
        this.bgWidth = e.nativeEvent.layout.width;
        if (this.textWidth && this.props.scroll) { 
            this.startXAnimate();
        }
    }

    bgViewHOnLayout(e) { 
        this.bgHeight = e.nativeEvent.layout.height;
        if (this.textHeight && this.props.scroll) { 
            this.startYAnimate();
        }
    }

    textWOnLayout(e) {
        this.textWidth = e.nativeEvent.layout.width;
        if (this.bgWidth && this.props.scroll) { 
            this.startXAnimate();
        }    
    }

    textHOnLayout(e) { 
        this.textHeight = e.nativeEvent.layout.height;
        if (this.bgWidth && this.props.scroll) { 
            this.startYAnimate();
        }
    }

    initAnimate() { 
        this.duration = this.props.duration * 1000;
        if (this.firstEx) {
            this.delay = 0;
        } else { 
            this.delay = this.props.delay * 1000;
        }
    }

    //水平方向滚动
    startXAnimate() {
        this.initAnimate();
        this.state.translateX.setValue(this.bgWidth);
        Animated.timing(this.state.translateX, {
          toValue: -this.textWidth,                      
          duration: this.duration,              
          Easing: Easing.linear,                
          delay: this.delay,                
        }).start(() => {
            this.firstEx = false;
            this.startXAnimate();  //循环动画
        })
    }
    //垂直方向滚动
    startYAnimate() { 
        this.initAnimate();
        this.state.translateY.setValue(this.bgHeight);
        Animated.timing(this.state.translateY, {
            toValue: -this.textHeight,
            duration: this.duration,
            Easing: Easing.linear,
            delay: this.delay,
        }).start(() => {
            this.firstEx = false;
            this.startYAnimate();
        })
    }
    
    render() {
        const newStyles = this.props.style || {};
        return(
        <View style={[styles.bgView,newStyles,{
                height: this.props.height,
                width: this.props.width,
                backgroundColor: this.props.backgroundColor,
                alignItems: this.props.scroll ? 'stretch' : 'center',
            }]}
            onLayout={(event) => {
                if (this.props.direction == 'level') {
                    return this.bgViewWOnLayout(event);
                } else if (this.props.direction == 'vertical') {
                    return this.bgViewHOnLayout(event);
                }
              }}    
            >
            <View
                style={[styles.containerStyle]}
            >
            {
                this.props.children ? <Animated.View
                style={[
                    {
                        transform: this.props.direction == 'level' ? [{ translateX: this.state.translateX }] : [{ translateY: this.state.translateY }]
                    }
                ]}
                onLayout={(event) => {
                    if (this.props.direction == 'level') {
                        return this.textWOnLayout(event);
                    } else if (this.props.direction == 'vertical') {
                        return this.textHOnLayout(event);
                    }
                }}
                >
                {this.props.children}
            </Animated.View>
                : <Animated.Text
                    style={[{ color: this.props.textColor ? this.props.textColor : 'white', fontSize: 15 },
                    {
                        transform: this.props.direction == 'level' ? [{ translateX: this.state.translateX }] : [{ translateY: this.state.translateY }]
                    }
                    ]}
                    onLayout={(event) => {
                        if (this.props.direction == 'level') {
                            return this.textWOnLayout(event);
                        } else if (this.props.direction == 'vertical') {
                            return this.textHOnLayout(event);
                        }
                    }}
                >
                    {this.props.text}
                </Animated.Text>}
            </View>            
        </View>
        );
    }
}

NoticeBar.propTypes = {
    //是否滚动
    scroll: PropTypes.bool,
    //滚动方向
    direction: PropTypes.string,
    //滚动文本
    text: PropTypes.string,
    //文本颜色
    textColor: PropTypes.string,
    //背景颜色
    backgroundColor: PropTypes.string,
    //外部框高度
    height: PropTypes.number,
    //外部框宽度
    width: PropTypes.number,
    //滚动时间
    duration: PropTypes.number,
    //延迟时间
    delay: PropTypes.number
}

NoticeBar.defaultProps = {
    duration: 5,
    delay: 0,
    direction: 'level',
    height: 20,
    backgroundColor: 'grey',
    scroll: true
}

const styles = StyleSheet.create({
    bgView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'scroll',
    },
    containerStyle: {
        overflow: 'hidden',
    }
});


