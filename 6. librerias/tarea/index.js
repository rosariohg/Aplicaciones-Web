var param_replacer = require('./source/funciones');

if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = param_replacer;
	}
	exports.param_replacer = param_replacer;
} else {
	root.param_replacer = param_replacer;
}