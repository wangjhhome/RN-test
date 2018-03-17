/* @flow */
//type Pair = [number, number];
export function uniqueValuesInDataSet(data) {
	return data.reduce((result, d) => {
		if (result.some(p => p[1] === d[1])) return result;
		result.push(d);
		return result;
	}, []);
}
