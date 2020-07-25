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
    const array = val.match(
      /[0-9]+ *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)/gi
    );
    const result = array.reduce((a, b) => (isNaN(a) ? ms(a) : a) + ms(b), '0s');
    return result;
  }
};
