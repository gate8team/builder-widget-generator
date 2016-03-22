var WidgetStructure = function() {
    var path = {
        model: '/Users/cloud/castle/rails/nearby/gems/ha-dashboard/webpack/assets/javascripts/modules/content-builder/models/widgets/{WIDGET_NAME_CAMEL_CASE}/',
        helper: '/Users/cloud/castle/rails/nearby/gems/ha-dashboard/webpack/assets/javascripts/modules/content-builder/models/widgets/{WIDGET_NAME_CAMEL_CASE}/',
        template: '/Users/cloud/castle/rails/nearby/gems/ha-dashboard/app/assets/templates/ha-dashboard/content-builder/{WIDGET_NAME}/'
    };

    this.templates = {
        editor: {
        	path: {
        		input: 'bootstrap/widget/templates/editor.html',
        		output: path.template
        	},
        	name: 'editor.html'
        },
        main: {
        	path: {
        		input: 'bootstrap/widget/templates/main.html',
        		output: path.template
        	},
        	name: 'main.html'
        },
        preview: {
        	path: {
        		input: 'bootstrap/widget/templates/preview.html',
        		output: path.template
        	},
        	name: 'preview.html'
        }
    };

    this.models = {
        widget: {
        	path: {
        		input: 'bootstrap/widget/models/bootstrap-widget.class.js',
        		output: path.model
        	},
        	name: 'bootstrap-widget.class.js'
        }
    };

    this.helpers = {
    	widget: {
        	path: {
        		input: 'bootstrap/widget/helpers/bootstrap-widget-helper.factory.js',
        		output: path.helper
        	},
        	name: 'bootstrap-widget-helper.factory.js'
        }
    };

    this.config = {
    	shortcodes: {
    		widget: {
    			name: '{WIDGET_NAME_CAMEL_CASE}',
                original: '{WIDGET_NAME}'
    		}
    	}
    };
};

module.exports = WidgetStructure;