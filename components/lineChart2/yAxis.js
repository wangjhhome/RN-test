/* @flow */
import React, { Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { uniqueValuesInDataSet } from './util';
import { PropTypes } from 'prop-types';

const styles = StyleSheet.create({
	yAxisContainer: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		flex: 1,
		paddingVertical: 0,
		paddingRight: 5,
		alignItems: 'flex-end',
	},
});

export default class YAxis extends Component {

	static propTypes = {
		axisColor: PropTypes.any,
		axisLineWidth: PropTypes.number,
		data: PropTypes.arrayOf(PropTypes.array).isRequired,
		height: PropTypes.number.isRequired,
		placement: PropTypes.oneOf(['left', 'right']),
		verticalGridStep: PropTypes.number.isRequired,
		yAxisTransform: PropTypes.func,
	};

	static defaultProps = {
		placement: 'left',
	};

	constructor(props) {
		super(props);
		this.state = { bounds: { min: 0, max: 0 } };
	}

	_createLabelForYAxis = (index) => {
		let minBound = this.props.minVerticalBound;
		let maxBound = this.props.maxVerticalBound;

		// For all same values, create a range anyway
		if (minBound === maxBound) {
			minBound -= this.props.verticalGridStep;
			maxBound += this.props.verticalGridStep;
		}
		minBound = (minBound < 0) ? 0 : minBound;
		let label = minBound + (maxBound - minBound) / this.props.verticalGridStep * index;
		label = Math.round(label);
		if (this.props.yAxisTransform && typeof this.props.yAxisTransform === 'function') {
			label = this.props.yAxisTransform(label);
		}
		return (
			<Text
				style={{
					color: this.props.axisLabelColor,
					fontSize: this.props.labelFontSize,
				}}
				key={index}
			>
				{label}
			</Text>
		);
	};

	render() {
		const range = [];
		const data = this.props.data || [];
		const unique = uniqueValuesInDataSet(data);
		const steps = (unique.length < this.props.verticalGridStep) ? unique.length : this.props.verticalGridStep;
		for (let i = steps; i >= 0; i--) range.push(i);
		return (
			<View
				style={[
					styles.yAxisContainer,
					this.props.style || {},
					this.props.placement === 'left' && { borderRightColor: this.props.axisColor, borderRightWidth: this.props.axisLineWidth },
					this.props.placement === 'right' && { borderLeftColor: this.props.axisColor, borderLeftWidth: this.props.axisLineWidth },
				]}
			>
				{range.map(this._createLabelForYAxis)}
			</View>
		);
	}
}
