const { head, tail, toUpper } = require('rambdax');

module.exports.toKebabCase = function(value) {
  return value.replace(new RegExp('(\\s|_|-)+', 'gmi'), '-');
};

module.exports.startCase = function(value) {
  return `${head(toUpper(value))}${tail(value)}`;
};
