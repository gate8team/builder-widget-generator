var WidgetStructure = require('./widget-structure.js');
var structure = new WidgetStructure();
var BuilderWidgetGenerator = function () {};
var fse = require('fs-extra');
var fs = require('fs');
var replace = require('replace');
var chalk = require('chalk');

BuilderWidgetGenerator.prototype.generate = function(params) {
    var widgetName = this.toSnakeCase(params.name, true);
    this.copyFiles({ name: widgetName, original: params.name });
};

BuilderWidgetGenerator.prototype.copyFiles = function(params) {
	// templates
	this.copyDefaultStructure({ forStructure: structure.templates, withParams: params });
	// models
	this.copyDefaultStructure({ forStructure: structure.models, withParams: params });
	// helpers
	this.copyDefaultStructure({ forStructure: structure.helpers, withParams: params });
};

BuilderWidgetGenerator.prototype.copyDefaultStructure = function(params) {
	var forStructure = params.forStructure;
	var additionalParams = params.withParams;

	for (var prop in forStructure) {
		if (forStructure.hasOwnProperty(prop)) {
			var widget = forStructure[prop];
			var path = [
					widget.path.output
					.replace(structure.config.shortcodes.widget.name, additionalParams.original)
					.replace(structure.config.shortcodes.widget.original, additionalParams.original),
					widget.name.replace('bootstrap', additionalParams.original)
				].join('');

			fse.copySync(
				[__dirname, '/../', widget.path.input].join(''),
				// [__dirname, '/../', widget.path.output, widget.name.replace('bootstrap', additionalParams.original)].join(''),
				path
			);

			this.prepareFile({
				// filePath: [__dirname, '/../', widget.path.output, widget.name.replace('bootstrap', additionalParams.original)].join(''),
				regexp: structure.config.shortcodes.widget.name,
				filePath: path,
				widgetName: additionalParams.name
			});

			this.prepareFile({
				// filePath: [__dirname, '/../', widget.path.output, widget.name.replace('bootstrap', additionalParams.original)].join(''),
				regexp: structure.config.shortcodes.widget.original,
				filePath: path,
				widgetName: additionalParams.name
			});

			console.log(chalk.gray(path) + ' ' + chalk.green('has successfully generated...'));
		}
	}
};

BuilderWidgetGenerator.prototype.prepareFile = function(params) {
	replace({
		regex: params.regexp,
		replacement: params.widgetName,
		paths: [params.filePath],
		recursive: true,
		silent: true,
	});
};

BuilderWidgetGenerator.prototype.toSnakeCase = function(string, firstUpcase) {
    var string = string.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});

    if (firstUpcase) {
        string = string.charAt(0).toUpperCase() + string.slice(1);
    }

    return string;
};

module.exports = BuilderWidgetGenerator;