import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';
import { Cell } from 'IFTide';

export default class Cell_Demo extends Component { 
    render() {
        return (
            <View style={styles.container}>
                <Text>占比-proportion（12种）:1~12</Text>
                <Cell proportion={1} cellPadding='S'><Text>Cell1</Text></Cell>
                <Cell proportion={4} cellPadding='S'><Text>Cell4</Text></Cell>
                <Cell proportion={7} cellPadding='S'><Text>Cell7</Text></Cell>
                <Cell proportion={11} cellPadding='S'><Text>Cell11</Text></Cell>
                <Text>对齐方式-alignment：左对齐/居中/右对齐</Text>
                <Cell proportion={6} alignment='left' cellPadding='XS'><Text>Cell6</Text></Cell>
                <Cell proportion={6} alignment='center' cellPadding='XS'><Text>Cell6</Text></Cell>
                <Cell proportion={6} alignment='right' cellPadding='XS'><Text>Cell6</Text></Cell>
                <Text>上下留白-cellPadding：无/XS/S/M/L/XL</Text>
                <Cell proportion={10} cellPadding='XS' cellSpacing='S'><Text>Cell10</Text></Cell>
                <Cell proportion={10} cellPadding='M' cellSpacing='S'><Text>Cell10</Text></Cell>
                <Cell proportion={10} cellPadding='XL' cellSpacing='S'><Text>Cell10</Text></Cell>
                <Text>左右留白-cellSpacing：无/S/M/L</Text>
                <View style={{ flexDirection: "row" }}>
                    <Cell proportion={5} alignment='left' cellSpacing='M' cellPadding='L'><Text>Cell5</Text></Cell>
                    <Cell proportion={5} alignment='left' cellSpacing='M' cellPadding='L'><Text>Cell5</Text></Cell>
                </View><Text>其他样式设置(cellStyles/containerStyles)</Text>
                <Cell proportion={6}
                    alignment='center'
                    cellPadding='L'
                    cellStyles={{ backgroundColor: '#999999' }}>
                    <Text>Cell6</Text>
                </Cell>
                <Cell proportion={6}
                    alignment='center'
                    cellPadding='L'
                    containerStyles={{ borderWidth: 1, borderColor: '#999' }}>
                    <Text>Cell6</Text>
                </Cell>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flexDirection: "column",
    }
})