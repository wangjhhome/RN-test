import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card,CardContent,CardImage,CardTitle,CardText,CardFooter } from 'IFTide';

export default class Card_Demo extends Component { 
    onPress() { 
      console.log('press');
    }
    render() {
        const imageSrc = "http://photocdn.sohu.com/20130419/Img373254302.jpg";
        return (
          <View style={{flex:1}}> 
            <Card full
              onPress={this.onPress}
            >
            <CardTitle
              leftTitle='跨境（行内）'
              leftTitleStyle={{ fontSize: 14, color: 'grey' }}
              rightTitle='HET464642356'
              rightTitleStyle={{fontSize:15,color:'black'}}
             />
            <CardContent>
              <CardText
                text1='RMB'
                text1Style={{ fontSize: 17, color: '#333333' }}
                text2='654,153,22'
                text2Style={{fontSize:19,color:'#ff6565'}}
              />
            </CardContent>
            <CardFooter>
              <CardText
                text1='指令状态:'
                text1Style={{ fontSize: 18, color: 'black' }}
                text2='代付款'
                text2Style={{ fontSize: 18, color: '#989899' }}
              />
            </CardFooter>
          </Card>
  
          <Card>
            <CardTitle
              leftTitle='网上存款'
              leftTitleStyle={{ fontSize: 15, color: 'black' }}
              rightTitle='HET464642356'
              rightTitleStyle={{fontSize:16,color:'black'}}
            />
            <CardContent style={{ borderTopWidth: 2, borderColor: '#d8d8d8' }}>
              <CardText
                text1='金额：'
                text1Style={{ fontSize: 17, color: 'black' }}
                text2='654,153,22'
                text2Style={{ fontSize: 20, color: 'red' }}
                text3='元'
                text3Style={{fontSize: 17, color: 'black'}}
              />
              <CardImage>
                <Image
                  style={{width: 30, height: 30}}
                  source={{uri: imageSrc}}
                />
              </CardImage>
            </CardContent>
          </Card>
  
          <Card>
            <CardTitle
              leftTitle='代发工资'
              leftTitleStyle={{ fontSize: 14, color: 'grey' }}
              rightTitle='HET464642356'
              rightTitleStyle={{fontSize:15,color:'black'}}
            />
            <CardContent>
              <CardText
                text1='RMB'
                text1Style={{ fontSize: 17, color: '#333333' }}
                text2='654,153,22'
                text2Style={{fontSize:19,color:'#666666'}}
              />
            </CardContent>
            <CardFooter>
              <CardText
                text1='指令状态：待付款'
                text1Style={{ fontSize: 18, color: 'black' }}
              />  
              <CardImage>
                <Image
                  style={{width: 60, height: 20}}
                  source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
                >
                </Image>
              </CardImage>
            </CardFooter>
          </Card>
            
          </View>
        );
      }
}