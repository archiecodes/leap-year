'use strict';
module.exports = (year = new Date()) => {
	if (!(year instanceof Date) && typeof year !== 'number') {
		throw new TypeError(`Expected \`year\` to be of type \`Date\` or \`number\`, got \`${typeof year}\``);
	}

	year = year instanceof Date ? year.getFullYear() : year;
	return new Date(year, 1, 29).getDate() === 29;
};
