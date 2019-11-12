// Start by initializing the App with the JSON Model from AEM.

import React from 'react';
import ReactDOM from 'react-dom';
import { ModelManager, Constants } from '@adobe/cq-spa-page-model-manager';
import App from './App';
// include all React components that map to an AEM component
import "./components/MappedComponents";
import './index.scss';

function render(model) {
    ReactDOM.render(( <App cqChildren={ model[Constants.CHILDREN_PROP] } cqItems={ model[Constants.ITEMS_PROP] } cqItemsOrder={ model[Constants.ITEMS_ORDER_PROP] }
            cqPath={ ModelManager.rootPath } locationPathname={ window.location.pathname }/>),  document.getElementById('root'));
}

ModelManager.initialize({ path: process.env.REACT_APP_PAGE_MODEL_PATH }).then(render);
