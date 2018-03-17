/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Button,
  TextInput,
  TouchableHighlight
} from 'react-native';
import NoticeBar from './components/noticeBar/NoticeBar';
import LineChart from './components/lineChart/LineChart';
import { Card,CardContent,CardImage,CardTitle,CardText,CardFooter} from './components/card/Card2';
import MarqueeLabel from './test/MarqueeLabel';
import Layer from './components/layer/Layer';
import Cell from './components/cell/Cell';
import Number from './components/number/Number';
//import { Card, CardTitle, CardImage, CardContent, CardAction } from './CardView';

const imageSrc = "http://photocdn.sohu.com/20130419/Img373254302.jpg";
const iconImg ="http://bpic.588ku.com/element_pic/01/40/42/83573cfd78d2484.jpg";
export default class App extends Component {
  //<LineChart {...props} />
  //<LineChart {...props2}/>
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      txt: "",
      info: ''
    }
  }
  iconPress() {
    console.log('Icon Press!');
    //this.refs.layer1.hide();
  }
  operate1() { 
    console.log('operate1 Press!');
    return '这是错误信息';
  }
  operate2() { 
    console.log('operate2 Press!');
  }

  fun1() {
    let options = {
        title: "浮层标题1",
        clickMask: true,
        operateTxt: "其他操作",
        mask: true,
        operateFun: this.operate1,
        icon: iconImg,
        iconFun: this.iconPress.bind(this)
    };
    this.refs.layer1.show(options);
  }

  fun2() { 
    let options = {
      title: "标题2",
      clickMask: false,
      operateTxt: "操作",
      mask: false,
      innerHeight: 500,
      operateFun: this.operate2
    };
    this.refs.layer2.show(options);
  }

  onEnd(val) { 
    return "这是回显信息:"+val;
  }

  render() {
    
    return (  
        <View style={styles.container}> 
        <Number
          type={2}
          label='手机号码'
          placeHolder='提示文字'
          showClearIcon={true}
          onFocus={this.operate2}
          onEndEditing={this.onEnd}
        />
        <Number
          inputType='mobilePhone'
          placeHolder='139 9999 999'
          leftTextStyles={{ color: 'red' }}
          inputTextStyles={{ color: 'blue' }}
          showClearIcon={true}
          onBlur={this.operate1}
          onFocus={this.operate2}
          showErrorInfo={true}
        />
        <Number
          inputType='creditCard'
          placeHolder='9999 9999 9999 9999'
        />
        <Number
          inputType='debitCard'
        />
        <Number
          inputType='telePhone'
        />


    <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 ,marginTop:20}}
          onChangeText={(text) => this.setState({ input: text })} 
    />
        <Text>{'user input: ' + this.state.input }</Text>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    //flexDirection: "row",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    //alignItems:"center",
  },
  title: {
    fontSize: 20,
    backgroundColor: 'transparent'
  },
  button: {
    marginRight: 10
  },
  comBtnText:{
	  color:'#007aff',
	  textAlign:'center',
	  textAlignVertical:'center',
  },
  comBtnBtnView:{
	  borderWidth:1,
	  borderColor:'#DFDFDF',
	  borderRadius:3,
	  backgroundColor:'#ffffff',
    height: 28,
    width: 100,
    marginBottom: 15,
    marginTop:15
  },
});
