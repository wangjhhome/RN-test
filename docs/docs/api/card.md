# Card

## Usage
![Card](../img/card1.jpg)

  #!js
  import React, { Component } from 'react';
  import {Text,View} from 'react-native';
  import { Card } from 'IFTide';

  export default class Card_Demo extends Component { 
    render() {
        const imageSrc = "http://photocdn.sohu.com/20130419/Img373254302.jpg";
        return (
          <View> 
            <Text style={{fontSize: 15,color: 'black'}}>Default</Text>
            <Card
              header='default header'
              imageSource={imageSrc}
              headerStyle={{ color: 'red', fontSize: 20 }}
              headerExtra='header extra'
              body='this is content of card'
              bodyStyle={{ color: 'blue', fontSize: 18}}
              footer='footer'
              footerExtra='footer extra'
            /> 
          </View>
        );
      }
  }
![Card](../img/card2.jpg)
  #!js
  render() {
       return (
	  <View> 
            <Text style={{fontSize: 15,color: 'black'}}>Full</Text>
            <Card full
              header='full header'
              headerExtra='header extra'
              body='this is content of card'
              footer='footer'
              footerExtra='footer extra'
            /> 
          </View>
       );
  }

## Card Props
| prop | default | type | description   |
| --------- | --------- | --------- | --------- |
| full | false | boolean | card��ͼ�Ƿ�ȫ����ʾ |
| imageSource | none | string | ����ͼƬ·�� |
| header | none | string | header�ı����� |
| headerExtra | none | string | headerExtra�ı����� |
| headerStyle | color:'#000000' fontSize:18 | oneOf(array,number,object) | header�ı���ʽ |
| headerExtraStyle | color:'#888888' fontSize:15 | oneOf(array,number,object) | headerExtra�ı���ʽ |
| body | none | string | card�������� |
| bodyStyle | color:'#333333' fontSize:15 | oneOf(array,number,object) | card�����ı���ʽ |
| footer | none | string | footer�ı����� |
| footerExtra | none | string | footerExtra�ı����� |
| footerStyle | color:'#888888' fontSize:14 | oneOf(array,number,object) | footer�ı���ʽ |
| footerExtraStyle | color:'#888888' fontSize:14 | oneOf(array,number,object) | footerExtra�ı���ʽ |

!!! note
    headerStyle,headerExtraStyle,bodyStyle,footerStyle,footerExtraStyle��ʽ�����н�֧��<Text>����ʽ���ã���color,fontSize,fontFamily��
