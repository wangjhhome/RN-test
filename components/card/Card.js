import React, { Component } from 'react';
import { StyleSheet, View,ViewList,Text,Image,} from 'react-native';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = require('./image/title.png');
export default class Card extends Component {
    constructor(props) { 
        super(props);
    }
    render(){
        const cardStyles = this.props.full ? styles.full : styles.card;
        const imgSrc = this.props.imageSource ? { uri: this.props.imageSource } : DEFAULT_IMAGE;
        return(
            <View style={cardStyles}>
                <View style={styles.header}>
                    <Image source={imgSrc} style={styles.headerImage}/>
                    <Text style={[styles.headerContent,this.props.headerStyle]}>{this.props.header}</Text>
                    <Text style={[styles.headerExtra,this.props.headerExtraStyle]}>{this.props.headerExtra}</Text>
                </View>
                <View style={styles.body}>
                    <Text style={[styles.bodyContent,this.props.bodyStyle]}>{this.props.body}</Text>
                </View>
                <View style={styles.footer}>    
                    <Text style={[styles.footerContent,this.props.footerStyle]}>{this.props.footer}</Text>
                    <Text style={[styles.footerExtra,this.props.footerExtraStyle]}>{this.props.footerExtra}</Text>
                </View>
            </View>   
        );
    }
}

Card.propTypes = {
    //是否全屏
    full: PropTypes.bool,
    //图片路径
    imageSource: PropTypes.string,
    //标题内容
    header: PropTypes.string,
    //标题额外内容
    headerExtra: PropTypes.string,
    //标题内容样式
    headerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //标题额外内容样式
    headerExtraStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //card内容
    body: PropTypes.string,
    //card内容样式
    bodyStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //底部内容
    footer: PropTypes.string,
    //底部额外内容
    footerExtra: PropTypes.string,
    //底部内容样式
    footerStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //底部额外内容样式
    footerExtraStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number])
}

const styles = StyleSheet.create({
    full: {
        marginTop: 15,
        flexDirection: "column",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: "#dddddd",
        backgroundColor: "#ffffff",
        paddingBottom: 5,
    },
    card: {
        margin: 10,
        marginTop: 15,
        flexDirection: "column",
        backgroundColor: "#ffffff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#dddddd",
        paddingBottom: 5,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingRight: 8,
        marginLeft: 10,
    },
    headerContent: {
        alignItems: 'center',
        color: '#000000',
        fontSize: 18,
    },
    headerImage: {
        marginRight: 5,
        width: 64,
        height: 64,
    },
    headerExtra: {
        flex: 1,
        textAlign: 'right',
        fontSize: 15,
        color: '#888888',
    },
    body: {
        flexGrow: 1,
        borderTopWidth: 1,
        borderColor: '#dddddd',
        paddingVertical: 10,
    },
    bodyContent: {
        paddingLeft: 10,
        fontSize: 15,
        color: '#333333',
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 5,
        paddingRight: 8,
    },
    footerContent: {
        fontSize: 14,
        paddingLeft: 10,
        color: '#888888',
    },
    footerExtra: {
        flex: 1,
        textAlign: 'right',
        fontSize: 14,
        color: '#888888',
    }
});