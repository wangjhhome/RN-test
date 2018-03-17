import React, { Component } from 'react';
import {
StyleSheet,
Animated,
Easing,
View,
Text,
} from 'react-native';


export default class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: new Animated.Value(0),
    };
  }

  bgViewWOnLayout(e) {
    this.bgViewWidth = e.nativeEvent.layout.width;
    console.log("bg:"+this.bgViewWidth);
  }
  
  textWOnLayout(e) { 
    this.textWidth = e.nativeEvent.layout.width;
    console.log("text:" + this.textWidth);
    this.startAnimate();
  }

  startAnimate() {
    this.state.translateX.setValue(this.textWidth);
    Animated.timing(this.state.translateX, {
      toValue: -this.textWidth,                      
      duration: 4000,              
      Easing: Easing.linear,                
      delay: 0                 
    }).start(() => {
      this.startAnimate();  //循环动画
    })
  }

  render() {
    return(
      <View style={styles.container}
          onLayout={(event) => {
            return this.bgViewWOnLayout(event);
          }}  
      >
      <Animated.Text
        style={[styles.text, {
          transform: [{
            translateX: this.state.translateX
          }]
        }
          ]}
        onLayout={(event) => {
            return this.textWOnLayout(event);
        }}  
      >
      进行进行中进行中进行中进行中进行中进行中进行中
      </Animated.Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    height: 20,
    width: 300,
    overflow: 'hidden',
    backgroundColor: 'grey',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: 'white',
  },
 
});
module.exports = Marquee;