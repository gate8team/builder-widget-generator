var WidgetStructure = function() {
    this.templates = {
        editor: 'templates/editor.html',
        main: 'templates/main.html',
        preview: 'templates/preview.html'
    };

    this.models = {
        widget: 'models/bootstrap-widget.class.js'
    };

    this.helpers = {};
};

module.exports = WidgetStructure;