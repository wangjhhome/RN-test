import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PropTypes } from 'prop-types';

export default function LevelSepartor({ label, height }) { 
    return (
        <View style={[styles.container, { height }]}>
            <Text style={styles.label}>
                {label.toFixed(0)}
            </Text>
            <View style={styles.separatorRow} />
        </View>
    );
}

LevelSepartor.propTypes = {
    label: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        textAlign: 'right',
        width: 20,
    },
    separatorRow: {
        width: 250,
        height: 1,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.3)',
        marginHorizontal: 5,
    },
});
module.exports = LevelSepartor;