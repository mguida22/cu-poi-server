var normalize = function(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-z ]/g, '');
  str = str.replace(/\s\s+/g, ' ');
  return str.trim();
};

module.exports = normalize;
