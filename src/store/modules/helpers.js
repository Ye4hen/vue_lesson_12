export function isCorrespondToFilter(candidate, filterObj) {
	for (const props in filterObj) {
		if (filterObj[props] && candidate[props] && !candidate[props].toString().toLowerCase().includes(filterObj[props].toString().toLowerCase())) {
			return false;
		}
	}
	return true;
}