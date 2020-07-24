const ms = require('./index');
const moment = require('moment');
require('moment-duration-format');

module.exports = (val, options = {}) => {
  if (!isNaN(val)) {
    let format = 'd[d] h[h] m[m] s[s]';
    if (options.long) format = 'day(s)[d] hour(s)[h] minute(s)[m] second(s)[s]';
    if (options.format) format = options.format;
    const result = moment.duration(val).format(format);
    return result;
  } else {
    const array = val.match(/[0-9]+ *[a-z]+/gi);
    const result = array.reduce((a, b) => ms(a) + ms(b));
    return result;
  }
};