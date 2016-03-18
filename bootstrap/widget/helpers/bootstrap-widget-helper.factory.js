import { Inject } from '../../../../../decorators/main.decorator.js';
import { BuilderWidgetHelper } from '../../../index.js';

class {WIDGET_NAME_CAMEL_CASE}WidgetHelper extends BuilderWidgetHelper {
    constructor($log) {
        super($log);
    }

    @Inject('$log')
    static instance($log) {
        return new {WIDGET_NAME_CAMEL_CASE}WidgetHelper($log);
    }
}

export default {WIDGET_NAME_CAMEL_CASE}WidgetHelper;
export { {WIDGET_NAME_CAMEL_CASE}WidgetHelper };
