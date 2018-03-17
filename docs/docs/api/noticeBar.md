# NoticeBar

## Usage
![NoticeBar](../img/noticebar.jpg)

  #!js
  import React, { Component } from 'react';
  import {Text,View} from 'react-native';
  import { NoticeBar } from 'IFTide';

  export default class NoticeBar_Demo extends Component { 
    render() {
        return (
            <View >
            <Text>1</Text>
            <NoticeBar
              scroll={true}
              duration={5}
              text={'���Խ����в��Խ����в��Խ�����'}
              textColor={'white'}
              backgroundColor={'grey'} 
              delay={0}
            />
            <Text>2</Text>
            <NoticeBar
              scroll={false}
              duration={5}
              text={'���Խ����в��Խ����в��Խ�����'}
              textColor={'white'}
              backgroundColor={'grey'}
              delay={0}
            />
            <Text>3</Text>
            <NoticeBar
              scroll={true}
              duration={4}
              text={'���Խ����в��Խ����в��Խ�����'}
              textColor={'black'}
              backgroundColor={'white'}
              height={20}
              width={300}
              delay={0}
            />  
          </View>
        );
      }
  }

## NoticeBar Props
| prop | default | type | description   |
| --------- | --------- | --------- | --------- |
| scroll | false | boolean | �ı��Ƿ���� |
| text | none | string | ��Ҫ���й������ı� |
| textColor | white | string | �ı���ɫ |
| backgroudColor | grey | string | �ⲿ�򱳾���ɫ |
| height | 20 | number | �ⲿ��߶� |
| width | none | number | �ⲿ���� |
| duration | 5 | number | �ı�����һ������ʱ�� |
| delay | 0 | number | ÿ�ι���ǰ�ӳ�ʱ�� |


!!! note
    duration��delay��λΪ��