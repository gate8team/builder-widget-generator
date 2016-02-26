import { Widget } from '../../../decorators/main.decorator.js';
import { BuilderWidget } from '../models/builder-widget.class.js';

@Widget({
    name: '[WIDGET_NAME_CAMEL_CASE]',
    templates: {
        preview: 'ha-dashboard/content-builder/widgets/shop-invite/preview.html',
        main: 'ha-dashboard/content-builder/widgets/shop-invite/main.html',
        editor: 'ha-dashboard/content-builder/widgets/shop-invite/editor.html'
    },
    helpers: {
        main: '[WIDGET_NAME_CAMEL_CASE]WidgetHelper',
        editor: '[WIDGET_NAME_CAMEL_CASE]WidgetHelper'
    }
})
class [WIDGET_NAME_CAMEL_CASE]Widget extends BuilderWidget {
    constructor(state = {}) {
        super();
        this.rebuild(_.merge(this._getDefaultState(), state));
    }

    toParams() {
        return super.toParams('message');
    }

    _getDefaultState(params = { forContext: [WIDGET_NAME_CAMEL_CASE]Widget }) {
        return _.merge(super._getDefaultState(params), {
            message: 'Hello from [WIDGET_NAME_CAMEL_CASE]Widget!'
        });
    }
}

export default [WIDGET_NAME_CAMEL_CASE]Widget;
export { [WIDGET_NAME_CAMEL_CASE]Widget };
