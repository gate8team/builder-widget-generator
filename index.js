var BuilderWidgetGenerator = require('./dist/builder-widget-generator.js');
var chalk = require('chalk')

var Generator = function(params) {
    this.args = {
        command: params.command,
        name: params.name
    };

    if (!this.checkIsValidForStart()) {
        this.printPrompt();
    } else {
        this.run();
    }
};

Generator.prototype.checkIsValidForStart = function() {
    var result = true;

    if (this.args.command != 'generate' || this.args.name == null) {
        result = false;
    }

    return result;
};

Generator.prototype.printPrompt = function() {
    console.log(chalk.red('Usage: node index.js generate widget-name ...'));
};

Generator.prototype.run = function() {
    (new BuilderWidgetGenerator()).generate({ name: this.args.name });
};

module.exports = Generator;