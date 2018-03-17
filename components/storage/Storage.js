/**
 * Created by cherrybomb on 2017/10/30.
 */
import React ,{Component}from 'react';
import PropTypes from "prop-types";
import {View,WebView } from 'react-native';
import Util from '../../config/util'

class Storage extends React.Component {


    static propTypes = {
        url:PropTypes.string,
        callback:PropTypes.func
    };

    webview = null;
    injectedScript='window.postMessage(JSON.stringify({"localStorage":window.localStorage,"sessionStorage":window.sessionStorage}))'

    onMessage=(evt)=>{
        console.log('initlocalstorage return')

        const message = evt.nativeEvent.data
        Util.setStorage(message,this)

        if(this.props.callback){
            this.props.callback()
        }
    }

    setItem=(type,key,value)=>{
        const script = 'window.'+type+'.setItem("'+key+'",'+value+')';  // eslint-disable-line quotes
        if (this.webview) {
            this.webview.injectJavaScript(script);
        }
    }

    render() {
        return (
            <View style={{
            height: 100,
            width:100
          }}>
                <WebView
                    ref={webview => { this.webview = webview; }}
                    style={{
            height: 100,
            width:100
          }}
                    source={{uri: this.props.url}}
                    scalesPageToFit={true}
                    injectedJavaScript={this.injectedScript}
                    onMessage={this.onMessage}
                />

            </View>
        );
    }
}

let StorageObj={
    obj:null,
    data:null
};
export {Storage,StorageObj}


