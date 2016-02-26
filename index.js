var BuilderWidgetGenerator = require('./dist/builder-widget-generator.js');

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
    console.log('Usage: npm index.js generate widget-name ...');
};

Generator.prototype.run = function() {
    (new BuilderWidgetGenerator()).generate({ name: this.args.name });
};

new Generator({
    command: process.argv.slice(2, 3)[0],
    name: process.argv.slice(3)[0]
});