/**
 * Created by cherrybomb on 2017/11/20.
 */
'use strict';

const ColorPropType = require('ColorPropType');
const React = require('React');
const PropTypes = require('prop-types');
const StyleSheet = require('StyleSheet');
const View = require('View');
const invariant = require('fbjs/lib/invariant');

import TextInput from './mTextInput.js';
import Button from './mButton.js';

class mSearch extends React.Component {

    props: {
        title?: ?string,
        onPress?: () => any,
        disabled?: ?boolean,
    };

    static propTypes = {
        /**
         * 按钮文字
         */
        title: PropTypes.string,
        /**
         * 按钮点击事件
         */
        onPress: PropTypes.func,
        /**
         * 是否可用
         */
        disabled: PropTypes.bool,
    };

    render() {
        const {
            title,
            onPress,
            disabled,
        } = this.props;
        return (
            <View style={styles.container}>
                <TextInput {...this.props} inputTextColor='#909095'/>
                <Button title={title} onPress={onPress} disabled={disabled}
                        type="primary" size="small" color='#888' borderColor='#aaa'
                        backgroundColor='#eee' borderWidth={1} borderRadius={3}
                        paddingLeft={5} paddingRight={5} paddingTop={1} paddingBottom={1}  />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = mSearch;
