import React, { Component } from 'react';
import {Text,View,Image} from 'react-native';
import { NoticeBar } from 'IFTide';

export default class NoticeBar_Demo extends Component { 
    render() {
        return (
            <View >
            <Text>1</Text>
            <NoticeBar
              scroll={true}
              direction={'level'}
              duration={4}
              text={'测试进行中测试进行中测试进行中'} 
              delay={2}
            />
            <Text>2</Text>
            <NoticeBar
              scroll={true}
              direction={'vertical'}
              duration={2}
              text={'测试进行中测试进行中测试进行中'}
              delay={0}
            />
            <Text>3</Text>
            <NoticeBar
              scroll={false}
              duration={5}
              text={'测试进行中测试进行中测试进行中'}
              delay={0}
            />
            <Text>4</Text>
            <NoticeBar
              scroll={true}
              direction={'level'}
              duration={4}
              text={'测试进行中测试进行中测试进行中'}
              textColor={'black'}
              backgroundColor={'white'}
              height={20}
              width={300}
              delay={0}
            />
            <Text>5</Text>
            <NoticeBar
              duration={5}
              direction={'level'}
              backgroundColor={'white'}
              width={300}
              height={60}
            >
              <Image
                  style={{width: 500, height: 50, marginTop:5}}
                  source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
                >
              </Image>  
            </NoticeBar>
          </View>
        );
      }
}