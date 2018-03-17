/**
 * Created by cherrybomb on 2017/11/5.
 */
import React ,{Component}from 'react';
import PropTypes from "prop-types";
import {View,StyleSheet} from 'react-native';


export default class Body extends React.Component {
    static propTypes = {
        url:PropTypes.string,
        handleData:PropTypes.func
    };

    constructor(props) {
        super(props);
    }


    renderChildren=()=>{
        return(this.props.children)

    }

    render() {
        return (
            <View style={[styles.bodyContainer]}>
                {this.renderChildren()}
            </View>
        );
    }
}
var styles = StyleSheet.create({
        bodyContainer: {
            backgroundColor: '#f3f3f3',
            flexDirection: 'column',
            flex: 1,
        }
    }
)
