import React, { Component } from 'react';
import {
 StyleSheet,
 Text,
 View
} from 'react-native';
export default class Test extends Component {
    render () {
    return (
    <View style={styles.container}>
        <View style={[styles.flex, styles.center]}>
            <Text style={styles.white}>酒店</Text>
        </View>
        <View style={styles.flex}>
            <View style={[styles.flex, styles.leftRightLine, styles.bottomLine, styles.center]}>
                <Text style={styles.white}>海外酒店</Text>
            </View>
            <View style={[styles.flex, styles.leftRightLine, styles.center]}>
                <Text style={styles.white}>特价酒店</Text>
            </View>
        </View>
        <View style={styles.flex}>
            <View style={[styles.flex, styles.bottomLine, styles.center]}>
                <Text style={styles.white}>团购</Text>
            </View>
            <View style={[styles.flex, styles.center]}>
                <Text style={styles.white}>民宿•客栈</Text>
            </View>
        </View>
    </View>
    )
    }
}
var styles = StyleSheet.create({
 container: {
    margin: 10,
    marginTop: 25,
    height: 75,
    flexDirection: "row",
    backgroundColor: "#ff607c",
    borderRadius: 5
 },
 flex: {
    flex: 1
 },
 white: {
    color: "white",
    fontWeight: "900",
    textShadowColor: "#ccc",
    textShadowOffset: {width: 1, height: 1}
 },
 center: {
    justifyContent: "center",
    alignItems: "center"
 },
 leftRightLine: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "white"
 },
 bottomLine: {
    borderBottomWidth: 1,
    borderColor: "white"
 }
});
module.exports = Test;
