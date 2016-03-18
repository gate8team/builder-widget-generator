var Generator = require('./index.js');

new Generator({
    command: process.argv.slice(2, 3)[0],
    name: process.argv.slice(3)[0]
});