import React from 'react';
import { View, StyleSheet,Text } from 'react-native';
import { PropTypes } from 'prop-types';
import LevelSepartor from './LevelSepartor';

export const range = (n) => {
  return [...Array(n).keys()];
};

function createSeparator(totalCount, topValue, index, height) {
  return (
    <LevelSepartor
      key={index}
      label={topValue * (totalCount - index) / totalCount}
      height={height / totalCount}
    />
  );
}

function SeparatorsLayer({ topValue, separators, height, children, style }) {
  return (
    <View style={[styles.container, style]}>
      {range(separators + 1).map((separatorNumber) => {
        return createSeparator(separators, topValue, separatorNumber, height);
      })}
      {children}
    </View>
  );
}

SeparatorsLayer.propTypes = {
  topValue: PropTypes.number.isRequired,
  separators: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute'
  }
});

export default SeparatorsLayer;