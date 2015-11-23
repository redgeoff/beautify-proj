'use strict';

var beautify = require('./scripts'),
  path = require('path'),
  argv = require('minimist')(process.argv.slice(2));

if (!argv.i || !argv.c) {
  console.log('Usage: beautify-proj -i dir [ -o dir ] -c js-beautify-config-file');
} else {
  beautify(path.resolve(argv.i), argv.o ? path.resolve(argv.o) : null, path.resolve(argv.c))
    .catch(function (err) {
      console.log(err.message);
      process.exit(1);
    });
}
