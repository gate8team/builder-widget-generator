var WidgetStructure = require('./widget-structure.js');
var structure = new WidgetStructure();
var BuilderWidgetGenerator = function () {};

BuilderWidgetGenerator.prototype.generate = function(params) {
    var widgetName = this.toSnakeCase(params.name, true);
    console.info('generation process for {widgetName} is in progress...'.replace('{widgetName}', widgetName));
};

BuilderWidgetGenerator.prototype.toSnakeCase = function(string, firstUpcase) {
    var string = string.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});

    if (firstUpcase) {
        string = string.charAt(0).toUpperCase() + string.slice(1);
    }

    return string;
};

module.exports = BuilderWidgetGenerator;