const ms = require('./index');
const moment = require('moment');
require('moment-duration-format');

module.exports = (val, options = {}) => {
  if (!isNaN(val)) {
    let format = 'D[d] H[h] m[m] s[s]';
    if (options.long) format = 'D[day(s)] H[hour(s)] m[min(s)] s[sec]';
    if (options.format) format = options.format;
    const result = moment.duration(val).format(format);
    return result;
  } else {
    const array = val.match(/[0-9]+ *[a-z]+/gi);
    const result = array.reduce((a, b) => ms(a) + ms(b), "0s");
    return result;
  }
};
