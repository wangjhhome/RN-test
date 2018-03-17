import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles/SliderEntry.style';

export default class SliderEntry extends Component {
    //根据itemWidth，以及真实图片的width，height，itemHeight，防止拉伸
    static propTypes = {
        data: PropTypes.object.isRequired,
        itemWidth:PropTypes.number.isRequired,
        clickFunc:PropTypes.func,
        index:PropTypes.number.isRequired
    };


    constructor(props) {
        super(props);
        // 初始状态
        this.state={
            width: 0,
            height: 0,
        }
    }



    refreshImageSize=()=>{


        Image.getSize(this.props.data.picUrl, (width, height) => {
            height = this.props.itemWidth * height / width; //按照屏幕宽度进行等比缩放
            this.setState({width, height});
        });
    }

    componentDidMount() {
        this.refreshImageSize();
    }
    clickFunc=()=>{
        this.props.clickFunc(this.props.index);
    }


    render () {
        const { data: {picUrl } } = this.props;

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={[styles.slideInnerContainer]}
              onPress={this.clickFunc}
              >
                <View style={[styles.imageContainer,{width:this.props.itemWidth,height:this.state.height}]}>
                    <Image
                        source={{ uri: this.props.data.picUrl}}
                        style={[styles.image]}
                    />
                    <View style={[styles.radiusMask]} />
                </View>
            </TouchableOpacity>
        );
    }
}
