// @flow
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import states from './states';
import ledger from './ledger';
import connection from './connection';
import accounts from './accounts';
import settings from './settings';
import transaction from './transaction';
import loading from './loading';

const rootReducer = combineReducers({
    ledger,
    states,
    connection,
    accounts,
    router,
    settings,
    transaction,
    loading
});

export default rootReducer;
