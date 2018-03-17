import React, {Component} from 'react';
import {
    StyleSheet,  
    View, 
    Text, 
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';

const { width } = Dimensions.get('window');
const aWidth = Math.round(width / 12);

export default class Cell extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        let cWidth = width;
        let proportion = this.props.proportion;
        if (proportion) {
            cWidth = aWidth * proportion;
        } else { 
            cWidth = width;
        }
        
        let alignItems = 'flex-start';
        let alignment = this.props.alignment;
        if (alignment) { 
            if (alignment == 'center') {
                alignItems = 'center';
            } else if (alignment == 'right') {
                alignItems = 'flex-end';
            } else { 
                alignItems = 'flex-start';
            }
        }

        let marginVertical = 0;
        let cellPadding = this.props.cellPadding;
        if (cellPadding) { 
            if (cellPadding == 'XS') {
                marginVertical = 2;
            } else if (cellPadding == 'S') {
                marginVertical = 4;
            } else if (cellPadding == 'M') {
                marginVertical = 6;
            } else if (cellPadding == 'L') {
                marginVertical = 8;
            } else if (cellPadding == 'XL') {
                marginVertical = 10;
            } else { 
                marginVertical = 0;
            }
        }

        let marginHorizontal = 0;
        let cellSpacing = this.props.cellSpacing;
        if (cellSpacing) { 
            if (cellSpacing == 'S') {
                marginHorizontal = 3;
            } else if (cellSpacing == 'M') {
                marginHorizontal = 7;
            } else if (cellSpacing == 'L') {
                marginHorizontal = 10;
            } else { 
                marginHorizontal = 0;
            }
        }
        const newContainerStyles = { alignItems: alignItems };
        const newCellStyles = { width:cWidth, marginHorizontal:marginHorizontal, marginVertical:marginVertical };
        
        return (
            <View style={[styles.container, newContainerStyles, this.props.containerStyles]}>
                <View style={[styles.cell, newCellStyles ,this.props.cellStyles]}>{this.props.children}</View>
            </View>
        );
    }
}

Cell.propTypes = {
    //占比
    proportion: PropTypes.number,
    //对齐方式
    alignment: PropTypes.string,
    //上下留白
    cellPadding: PropTypes.string,
    //左右留白
    cellSpacing: PropTypes.string,
    //样式
    cellStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
    //容器样式
    containerStyles: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.number]),
}

Cell.defaultProps = {
    proportion: width,
    alignment: "left",
    cellPadding: "无",
    cellSpacing: "无",
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "flex-start",
    },
    cell: {
        backgroundColor:"#d8d8d8",
        width: width,
        height: 40,
        marginVertical: 0,
        marginHorizontal: 0,
        alignItems: "center",
        justifyContent: 'center',
    }

})