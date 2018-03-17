/**
 * Created by mac on 2017/12/7.
 */
import React,{ Component} from 'react'

import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

import PropTypes from "prop-types";

export default class InformationContainer extends Component{
    static propTypes = {
        infoFlag: PropTypes.number,
        tips: PropTypes.string,
        information: PropTypes.string,
        minHeight : PropTypes.number,
    }
    constructor(props) {
        super(props);
        this.container = null;
        this.infoBlock = null;
    }

    static defaultProps = {
        infoFlag: 0,
        tips: '温馨提示',
        information:"",
    };

    _onTextLayout(event){

        let descHeight= event.nativeEvent.layout.height;
        if(descHeight > 80){
            this.infoBlock.setNativeProps({
              style:{
                  height:descHeight,
              }
            })

            this.container.setNativeProps({
                style:{
                    height:descHeight + 72,
                }
            })
        }
    }

    render(){
        const {
            infoFlag,
            tips,
            information,
            minHeight
        } = this.props;
        const path = [require('./images/right.png'),require('./images/wrong.png')];
        const containerStyle = [styles.container];
        const infoStyle = [styles.info];
        if(minHeight){
            let containerHeight = minHeight + 72;
            containerStyle.push({height:containerHeight});
            infoStyle.push({minHeight:minHeight});
        }
        return (
            <View style={{flexDirection: 'row'}}>
                <View style={containerStyle} ref={(e) => this.container = e}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={styles.image}>
                            <Image
                                source={path[infoFlag]}
                            />
                        </View>

                        <View style={styles.word}>
                            <Text style={{fontSize:18,color: '#fac306',}}>{tips}</Text>
                        </View>
                    </View>

                    <View style={infoStyle} ref={(e) => this.infoBlock = e}>
                        <Text style={{fontSize:13}} onLayout={this._onTextLayout.bind(this)}>{information}</Text>
                    </View>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height:152,
        borderWidth:1,
        borderColor:'#dddddd',
        backgroundColor: 'white',
        borderRadius: 3,
    },

    image: {
        flex:2,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginRight:5,
    },

    word: {
        flex:3,
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginLeft:5,
    },

    info: {
        minHeight: 80,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    }
});