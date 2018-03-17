/**
 * Created by cherrybomb on 2017/9/28.
 */
/**
 * Created by cherrybomb on 2017/9/22.
 */
import React, { Component } from 'react';
import PropTypes from "prop-types";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import constant from '../../config/theme/standard/constant'


import Carousel, { Pagination } from 'react-native-snap-carousel';

import { sliderWidth, itemWidth } from './styles/SliderEntry.style';

import SliderEntry from '../marquee/SliderEntry';
import styles, { colors } from './styles/Marquee.style';


//目前该组件只支持水平方向的滑动，后续完善垂直方向的功能
export default class Marquee extends Component{
    static propTypes={
        data:PropTypes.arrayOf(PropTypes.object).isRequired,//数据，包括image,暂时不用shape,组织成json方面以后扩展
        itemWidth:PropTypes.number,//每一项的宽度
        sliderWidth:PropTypes.number,//wrapper的宽度
        autoPlay:PropTypes.bool,//是否自动播放
        pagination:PropTypes.bool,//是否含有页码
        itemScale:PropTypes.number,//sliderWith与itemWidth之间的比例
        clickFunc:PropTypes.func,
    };
    static defaultProps={
        sliderWidth:constant.screenWidth,
        autoPlay:true,
        pagination:true
    }


    constructor(props) {
        super(props);
        let itemWidth=null;
        if(this.props.itemWidth){
            itemWidth=this.props.itemWidth;
        }else if(this.props.itemScale){
            itemWidth=this.props.sliderWidth*this.props.itemScale
        }else{
            itemWidth=this.props.sliderWidth;
        }
        this.state={ itemWidth:itemWidth,
            slider1ActiveSlide: 1,
            slider1Ref: null
        };
    }


    _renderItem ({item, index}) {
        return (
            <SliderEntry
                data={item}
                itemWidth={this.state.itemWidth}
                clickFunc={this.props.clickFunc}
                index={index}
            />
        );
    }

    render(){
        const { slider1ActiveSlide, slider1Ref } = this.state;
        return(

            <View style={styles.marqueeContainer}>
                <Carousel
                    ref={(c) => { if (!this.state.slider1Ref) { this.setState({ slider1Ref: c }); } }}
                    data={this.props.data}
                    renderItem={this._renderItem.bind(this)}
                    sliderWidth={this.props.sliderWidth}
                    itemWidth={this.state.itemWidth}
                    inactiveSlideScale={1}
                    inactiveSlideOpacity={1}
                    enableMomentum={true}
                    activeSlideAlignment={'start'}
                    autoplay={this.props.autoPlay}
                    autoplayDelay={500}
                    autoplayInterval={2500}
                    removeClippedSubviews={false}
                    activeSlideOffset={0}
                    swipeThreshold={0}
                    onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index }) }
                />
                <Pagination
                    dotsLength={this.props.data.length}
                    activeDotIndex={slider1ActiveSlide}
                    containerStyle={styles.paginationContainer}
                    dotStyle={styles.paginationDot}
                    inactiveDotColor='#ffffff'
                    dotColor='#ffffff'
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                    carouselRef={slider1Ref}
                    tappableDots={!!slider1Ref}
                />
            </View>

        );
    }
}