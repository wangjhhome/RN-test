# LineChart

## Usage
![LineChart](../img/linechart1.jpg)

  #!js
  import React, { Component } from 'react';
  import {Text,View} from 'react-native';
  import { LineChart } from 'IFTide';

  const props = {
    title: 'ˮ������ͳ��ͼ',
    height: 300,
    //width: 300,
    xLabel: 'ʱ��',
    xData: ['1��', '2��', '3��', '4��', '5��', '6��', '7��', '8��'],
    yLabel: '����(kg)',
    data: [
      {label:'ƻ��',color:'rgb(249,159,94)',value:[2, 4, 7, 2, 2, 7, 13, 16]},
      {label:'����',color:'rgb(67,205,126)',value:[6, 9, 9, -2, 8, 7, 17, 18]},
      {label:'�㽶',color:'rgb(255,185,15)',value:[4, -7, 8, 3, 9, 2, 15, 13]}
    ]
  };

  export default class LineChart_Demo extends Component { 
    render() {
        return (
            <View >
                <LineChart {...props} />   
            </View>
        );
      }
  }
![LineChart](../img/linechart2.jpg)
  #!js
  const props = {
    height: 300,
    xLabel: '�·�',
    xData: ['һ��', '����', '����', '����', '����', '����'],
    yLabel: '����(��)',
    data: [
      {label:'����',color:'#aa4643',value:[130, 110, 150, 99, 136, 78]},
      {label:'֧��',color:'#89a54e',value:[150, 120, 180, 110, 160, 150]},
      {label:'����',color:'#4572a7',value:[90, 100, 40, 85, 50, 20]}
    ]
  };
  render() {
       return (
	  <View> 
            <LineChart {...props} /> 
          </View>
       );
  }

## LineChart Props
| prop | default | type | description   |
| --------- | --------- | --------- | --------- |
| title | none | string | ����ͼ���� |
| xLabel | none | string | x������ |
| xData | none | array | x������ |
| yLabel | none | string | y������ |
| data | none | array | ����ͼ���� |
| height | none | number | ����ͼ�߶� |
| width | ��Ļ��� | number |  ����ͼ��� |


!!! note
    data�����ݾ����ʽ���demo��height��dataΪ��Ҫ������