import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Platform,
  Dimensions
} from 'react-native';
import Echarts from './echarts';
import PropTypes from "prop-types";

const { width } = Dimensions.get('window');

export default class LineChart extends Component {

    constructor(props) {
        super(props);
    }

    addLegend(data) { 
        let legends = [];
        for (let i = 0; i < data.length; i++) { 
            legends.push(data[i].label);
        };
        return legends;
    }
   
    addColor(data) { 
        let colors = [];
        for (let i = 0; i < data.length; i++) { 
            colors.push(data[i].color);
        };
        return colors;
    }
    
    addSeriesData(data) { 
        let series = [];
        for (let i = 0; i < data.length; i++) { 
            let item = {
                name: data[i].label,
                type: 'line',
                data: data[i].value,
            }
            series.push(item);
        };
        return series;
    }
    render() {
        const option = {
        //标题
        title: {
            text: this.props.title,
            x: 'center'
        },
        //点击某一个点的数据的时候，显示出悬浮窗
        tooltip : {
            trigger: 'axis',
        }, 
        //可以手动选择现实几个图标
        legend: {
            bottom: 10,
            data: this.addLegend(this.props.data)
        },
        xAxis : [
            {
                //就是一月份这个显示为一个线段，而不是数轴那种一个点点
                boundaryGap:true,
                type : 'category',
                name : this.props.xLabel,
                data : this.props.xData,
            }
        ],
        yAxis : [
            {
                type : 'value',
                name : this.props.yLabel
            }
        ],
        //图形的颜色组
        color: this.addColor(this.props.data),
        //需要显示的图形名称，类型，以及数据设置
        series : this.addSeriesData(this.props.data),
    };
    return (
        <View style={styles.container}>
            <Echarts option={option} height={this.props.height} width={this.props.width}/>
        </View>
    );
    }
}

LineChart.propTypes = {
    //标题
    title: PropTypes.string,
    //X坐标轴名称
    xLabel: PropTypes.string,
    //X坐标轴数据
    xData: PropTypes.array,
    //Y坐标轴名称
    yLabel: PropTypes.string,
    //数据，数据格式见demo
    data: PropTypes.array.isRequired,
    //高度
    height: PropTypes.number.isRequired,
    //宽度
    width: PropTypes.number
}

LineChart.defaultProps = {
    title: '',
    xLabel: '',
    yLabel: '',
    width: width
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
})