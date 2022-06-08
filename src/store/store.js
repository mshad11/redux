import { createStore} from 'redux';
import { reducers} from '../reducers/reducer';

const store = createStore(reducers);
//ui component => which contains state values of all the => reducer functons
export default store;