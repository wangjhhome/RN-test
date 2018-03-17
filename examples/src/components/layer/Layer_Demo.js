import React, { Component } from 'react';
import {StyleSheet,Text,View,TouchableHighlight} from 'react-native';
import { Layer } from 'IFTide';

const iconImg ="http://bpic.588ku.com/element_pic/01/40/42/83573cfd78d2484.jpg";
export default class Layer_Demo extends Component {
    
    iconPress() {
        console.log('Icon Press!');
        this.refs.layer1.hide();
      }
    operate1() { 
        console.log('operate1 Press!');
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
            operateFun: this.operate1.bind(this),
            icon: iconImg,
            iconFun: this.iconPress
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
    render() {
        return (
            <View style={styles.container}> 
              
                <TouchableHighlight style={styles.comBtnBtnView} underlayColor='transparent' onPress={this.fun1.bind(this)}>  
                  <Text style={[styles.comBtnText]}>效果1</Text>  
                </TouchableHighlight>
                <TouchableHighlight style={styles.comBtnBtnView} underlayColor='transparent' onPress={this.fun2.bind(this)}>  
                  <Text style={[styles.comBtnText]}>效果2</Text>  
                </TouchableHighlight>
                
                <Layer ref="layer1" ><Text>内容区域</Text></Layer>
                <Layer ref="layer2" ><Text>内容区域</Text></Layer>
            </View>
          );
      }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
      alignItems:"center",
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
    }
})